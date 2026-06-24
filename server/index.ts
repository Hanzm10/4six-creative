import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const UPLOAD_DIR = path.join(__dirname, 'uploads');
const VIDEOS_JSON = path.join(UPLOAD_DIR, 'videos.json');
const REELS_JSON = path.join(UPLOAD_DIR, 'reels.json');

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}
if (!fs.existsSync(VIDEOS_JSON)) {
  fs.writeFileSync(VIDEOS_JSON, JSON.stringify([]));
}
if (!fs.existsSync(REELS_JSON)) {
  const defaultReels = [
    { id: 'C0hn8OGuEk5', url: 'https://www.instagram.com/p/C0hn8OGuEk5/' },
    { id: 'CmMnxhTOqiZ', url: 'https://www.instagram.com/p/CmMnxhTOqiZ/' },
    { id: 'DVJ7qwBEjSu', url: 'https://www.instagram.com/p/DVJ7qwBEjSu/' },
    { id: 'DO7EsRUDejI', url: 'https://www.instagram.com/p/DO7EsRUDejI/' },
  ];
  fs.writeFileSync(REELS_JSON, JSON.stringify(defaultReels));
}

// Helper Functions
const readVideos = () => JSON.parse(fs.readFileSync(VIDEOS_JSON, 'utf-8'));
const writeVideos = (data: any) => fs.writeFileSync(VIDEOS_JSON, JSON.stringify(data, null, 2));
const readReels = () => JSON.parse(fs.readFileSync(REELS_JSON, 'utf-8'));
const writeReels = (data: any) => fs.writeFileSync(REELS_JSON, JSON.stringify(data, null, 2));

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(UPLOAD_DIR));

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Invalid file type'));
  },
});

// Auth Middleware
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// --- Existing Routes ---
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) return res.status(400).json({ error: 'All fields are required.' });
  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'hello@4sixcreative.com',
      replyTo: email,
      subject: `[4SIX Contact] ${subject}`,
      html: `<p>Name: ${name}</p><p>Message: ${message}</p>`,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Failed' });
  }
});

app.post('/api/booking', async (req, res) => {
  const { name, email, sessionType, preferredDate, preferredTime } = req.body;
  if (!name || !email || !sessionType || !preferredDate || !preferredTime) return res.status(400).json({ error: 'All fields are required.' });
  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'hello@4sixcreative.com',
      replyTo: email,
      subject: `[4SIX Booking] ${sessionType} ${name}`,
      html: `<p>Name: ${name}</p>`,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Failed' });
  }
});

// --- New Routes ---
app.post('/api/admin/login', async (req, res) => {
  const { password } = req.body;
  const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH || '');
  if (isMatch || password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ user: 'admin' }, process.env.JWT_SECRET || 'secret');
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Unauthorized' });
});

app.get('/api/videos', (req, res) => res.json(readVideos()));
app.get('/api/reels', (req, res) => res.json(readReels()));

app.post('/api/admin/videos', authenticateToken, upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  const videos = readVideos();
  const newVideo = { id: Date.now(), filename: req.file.filename };
  videos.push(newVideo);
  writeVideos(videos);
  res.json(newVideo);
});

app.delete('/api/admin/videos/:id', authenticateToken, (req, res) => {
  let videos = readVideos();
  videos = videos.filter((v: any) => v.id != req.params.id);
  writeVideos(videos);
  res.json({ success: true });
});

app.get('/api/admin/reels', authenticateToken, (req, res) => res.json(readReels()));
app.put('/api/admin/reels', authenticateToken, (req, res) => {
  writeReels(req.body);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
