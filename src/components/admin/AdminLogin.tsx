"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface AdminLoginProps {
  onLogin: (token: string) => void;
}

/**
 * AdminLogin component for the 4six Creative admin panel.
 * Centered layout with entrance animations and creative styling.
 */
export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid password");
      }

      if (data.token) {
        onLogin(data.token);
      } else {
        throw new Error("No token received from server");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: "easeOut"
        }}
        className="w-full max-w-sm"
      >
        <div className="bg-white creative-border rounded-[2rem] p-10 shadow-2xl flex flex-col items-center">
          <img
            src="/4six-creative-logo-black.png"
            alt="4six Creative Logo"
            className="h-12 mb-8 object-contain"
          />
          
          <h1 className="font-display font-black uppercase text-2xl mb-8 text-center tracking-tight">
            Admin Access
          </h1>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className={cn(
                  "h-12 text-center",
                  error && "border-red-500 focus-visible:ring-red-500/20"
                )}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center font-medium animate-in fade-in slide-in-from-top-1">
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              variant="default"
              size="lg"
              className="w-full h-12 text-base font-bold uppercase tracking-wider creative-border-sm creative-border-hover"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Authenticating...</span>
                </div>
              ) : (
                "Access Dashboard"
              )}
            </Button>
          </form>

          <Link
            to="/"
            className="mt-6 text-sm font-bold uppercase tracking-wider text-brand-dark/50 hover:text-brand-orange transition-colors duration-200"
          >
            &larr; Back to Home
          </Link>
        </div>
        
        <p className="mt-8 text-center text-brand-dark/40 text-xs uppercase tracking-widest font-medium">
          &copy; {new Date().getFullYear()} 4six Creative Agency
        </p>
      </motion.div>
    </div>
  );
}
