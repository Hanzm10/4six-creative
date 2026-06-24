import * as React from "react";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { VideoManager } from "@/components/admin/VideoManager";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const TOKEN_KEY = "4six_admin_token";

/**
 * AdminPage component that handles authentication and displays the CMS dashboard.
 */
export default function AdminPage() {
  const [token, setToken] = React.useState<string | null>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Initialize token from localStorage
  React.useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN_KEY);
    if (savedToken) {
      setToken(savedToken);
    }
    setIsInitialized(true);
  }, []);

  const handleLogin = (newToken: string) => {
    localStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  // Prevent flash of login screen while checking localStorage
  if (!isInitialized) {
    return <div className="min-h-screen bg-brand-light" />;
  }

  if (!token) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      {/* Admin Navbar */}
      <nav className="bg-brand-dark h-20 px-6 flex items-center justify-between sticky top-0 z-50 shadow-xl">
        <div className="flex-1">
          <img
            src="/4six-creative-logo-white.png"
            alt="4six Creative"
            className="h-8 object-contain"
          />
        </div>
        
        <div className="flex-1 text-center">
          <h1 className="font-display font-black uppercase text-white tracking-widest text-lg hidden sm:block">
            CMS Dashboard
          </h1>
        </div>

        <div className="flex-1 flex justify-end">
          <Button
            variant="default"
            onClick={handleLogout}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold uppercase tracking-wider creative-border-sm border-white shadow-[2px_2px_0px_white] px-6"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center">
            <h2 className="text-4xl font-display font-black uppercase text-brand-dark mb-2 tracking-tighter">
              Manage Content
            </h2>
            <p className="text-brand-dark/40 font-bold uppercase tracking-[0.2em] text-xs">
              Portfolio & Social Feed Control
            </p>
          </header>

          <VideoManager token={token} />
        </div>
      </main>

      {/* Footer info */}
      <footer className="py-8 text-center text-brand-dark/20 text-[10px] uppercase font-bold tracking-[0.3em]">
        4six Creative CMS &bull; Secure Administrator Session
      </footer>
    </div>
  );
}
