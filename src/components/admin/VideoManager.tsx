"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Upload, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Film, 
  Instagram 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnailUrl?: string;
}

interface VideoManagerProps {
  token: string;
}

/**
 * VideoManager component for managing portfolio videos and Instagram reels.
 */
export function VideoManager({ token }: VideoManagerProps) {
  const [activeTab, setActiveTab] = React.useState<"videos" | "reels">("videos");
  
  // Video State
  const [videos, setVideos] = React.useState<Video[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadTitle, setUploadTitle] = React.useState("");
  const [uploadFile, setUploadFile] = React.useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Reels State
  const [reels, setReels] = React.useState<string[]>(["", "", "", ""]);
  const [isLoadingReels, setIsLoadingReels] = React.useState(false);
  const [isSavingReels, setIsSavingReels] = React.useState(false);

  // Global Feedback
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  // Fetch Videos
  const fetchVideos = React.useCallback(async () => {
    setIsLoadingVideos(true);
    try {
      const response = await fetch("/api/admin/videos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch videos");
      const data = await response.json();
      setVideos(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoadingVideos(false);
    }
  }, [token]);

  // Fetch Reels
  const fetchReels = React.useCallback(async () => {
    setIsLoadingReels(true);
    try {
      const response = await fetch("/api/admin/reels", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch reels");
      const data = await response.json();
      // Ensure we have exactly 4 reels
      const reelsData = Array.isArray(data) ? data : data.reels || [];
      const updatedReels = [...reelsData, "", "", "", ""].slice(0, 4);
      setReels(updatedReels);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoadingReels(false);
    }
  }, [token]);

  React.useEffect(() => {
    if (activeTab === "videos") fetchVideos();
    if (activeTab === "reels") fetchReels();
  }, [activeTab, fetchVideos, fetchReels]);

  // Handlers
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile || !uploadTitle) return;

    setIsUploading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append("video", uploadFile);
    formData.append("title", uploadTitle);

    try {
      const response = await fetch("/api/admin/videos", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");
      
      setSuccess("Video uploaded successfully!");
      setUploadTitle("");
      setUploadFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      fetchVideos();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteVideo = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`/api/admin/videos/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Delete failed");
      
      setSuccess("Video deleted successfully");
      fetchVideos();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSaveReels = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingReels(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/admin/reels", {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ reels }),
      });

      if (!response.ok) throw new Error("Failed to save reels");
      
      setSuccess("Reels updated successfully!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSavingReels(false);
    }
  };

  const updateReelUrl = (index: number, url: string) => {
    const newReels = [...reels];
    newReels[index] = url;
    setReels(newReels);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-8">
      {/* Tab Controls */}
      <div className="flex justify-center gap-4">
        {[
          { id: "videos", label: "Videos", icon: Film },
          { id: "reels", label: "Reels", icon: Instagram },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={cn(
              "px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border-2",
              activeTab === tab.id 
                ? "bg-brand-dark text-white border-brand-dark shadow-lg scale-105" 
                : "bg-white text-brand-dark border-brand-dark hover:bg-brand-light"
            )}
          >
            <tab.icon className="h-5 w-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notifications */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-50 border-2 border-red-500 text-red-600 p-4 rounded-xl flex items-center gap-3"
          >
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p className="font-medium">{error}</p>
          </motion.div>
        )}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-green-50 border-2 border-green-500 text-green-600 p-4 rounded-xl flex items-center gap-3"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <p className="font-medium">{success}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tab Content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "videos" ? (
            <motion.div
              key="videos-tab"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Upload Area */}
              <div className="bg-white creative-border rounded-[2rem] p-8 shadow-xl">
                <h3 className="font-display font-black uppercase text-xl mb-6">Upload New Video</h3>
                <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={cn(
                        "border-4 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors text-center",
                        uploadFile ? "border-brand-green bg-brand-green/5" : "border-brand-dark/20 hover:border-brand-orange hover:bg-brand-orange/5"
                      )}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        className="hidden" 
                        accept="video/*"
                        onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                      />
                      <Upload className={cn("h-12 w-12 mb-4", uploadFile ? "text-brand-green" : "text-brand-dark/40")} />
                      {uploadFile ? (
                        <p className="text-brand-dark font-medium truncate max-w-full">
                          {uploadFile.name}
                        </p>
                      ) : (
                        <p className="text-brand-dark/60 font-medium">
                          Click to select or drag and drop video
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/60">Video Title</label>
                      <Input 
                        placeholder="Project Name or Client"
                        value={uploadTitle}
                        onChange={(e) => setUploadTitle(e.target.value)}
                        className="h-12 text-lg"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isUploading || !uploadFile || !uploadTitle}
                      className="h-14 text-lg font-bold uppercase creative-border-sm creative-border-hover w-full"
                    >
                      {isUploading ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Uploading...</span>
                        </div>
                      ) : (
                        "Upload Video"
                      )}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Video List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoadingVideos ? (
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="bg-white rounded-[2rem] creative-border p-4 h-64 animate-pulse" />
                  ))
                ) : videos.length === 0 ? (
                  <div className="col-span-full text-center py-20 bg-white creative-border rounded-[2rem]">
                    <Film className="h-16 w-16 mx-auto mb-4 text-brand-dark/20" />
                    <p className="text-brand-dark/40 font-bold uppercase tracking-widest text-lg">No videos uploaded yet</p>
                  </div>
                ) : (
                  videos.map((video) => (
                    <motion.div
                      layout
                      key={video.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white rounded-[2rem] creative-border overflow-hidden group shadow-lg"
                    >
                      <div className="aspect-video bg-brand-dark relative overflow-hidden">
                        <video 
                          src={video.url} 
                          className="w-full h-full object-cover"
                          muted
                          loop
                          onMouseOver={(e) => e.currentTarget.play()}
                          onMouseOut={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                      </div>
                      <div className="p-6 flex items-center justify-between gap-4">
                        <h4 className="font-bold text-lg truncate flex-1">{video.title}</h4>
                        <button
                          onClick={() => handleDeleteVideo(video.id)}
                          className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors creative-border-sm border-red-500 shadow-[2px_2px_0px_#ef4444]"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="reels-tab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white creative-border rounded-[2rem] p-10 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <Instagram className="h-8 w-8 text-brand-orange" />
                <h3 className="font-display font-black uppercase text-2xl tracking-tight">Instagram Reels Showcase</h3>
              </div>
              
              <form onSubmit={handleSaveReels} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {reels.map((url, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/60">Reel {index + 1} URL</label>
                        {url && url.includes('instagram.com') && (
                          <span className="text-[10px] bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-full font-bold uppercase">Valid Link</span>
                        )}
                      </div>
                      <Input 
                        placeholder="https://www.instagram.com/reel/.../embed/"
                        value={url}
                        onChange={(e) => updateReelUrl(index, e.target.value)}
                        className="h-12"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSavingReels || isLoadingReels}
                    className="h-16 px-12 text-xl font-bold uppercase creative-border-sm creative-border-hover min-w-[300px]"
                  >
                    {isSavingReels ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <span>Saving...</span>
                      </div>
                    ) : (
                      "Update Reels"
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-12 p-6 bg-brand-light rounded-2xl border-2 border-brand-dark/10">
                <h4 className="font-bold uppercase text-xs tracking-widest mb-3 text-brand-dark/40 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Tip for Reels
                </h4>
                <p className="text-sm text-brand-dark/60 leading-relaxed">
                  To embed a reel, copy the URL and append <code className="bg-brand-dark/5 px-1 rounded text-brand-orange font-bold">embed/</code> to the end. 
                  Example: <code className="break-all bg-brand-dark/5 px-1 rounded">https://www.instagram.com/reel/C0hn8OGuEk5/embed/</code>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
