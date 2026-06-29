import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
