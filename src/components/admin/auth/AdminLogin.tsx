import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const checkExistingSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Auto-login if session exists
        localStorage.setItem('adminUser', JSON.stringify({ username: session.user.email, role: 'admin' }));
        window.location.reload();
      } else {
        setCheckingSession(false);
      }
    };
    checkExistingSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else if (data.session) {
      localStorage.setItem('adminUser', JSON.stringify({ username: data.user.email, role: 'admin' }));
      window.location.reload();
    }
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,61,127,0.15)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      
      <div className="bg-[#0B0E14] border-[2px] border-primary p-10 md:p-14 rounded-[2rem] max-w-md w-full text-center relative z-10 shadow-[0_0_50px_rgba(255,61,127,0.1)]">
        
        <div className="mb-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: "'Caveat', cursive" }}>
            zuup <span className="text-primary">auth</span>
          </h2>
          <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">
            Centralized Identity
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="zuup id (email)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-4 bg-[#171A21] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-4 bg-[#171A21] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 px-8 py-4 bg-primary text-white rounded-[2rem] text-2xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] active:translate-y-2 active:shadow-[0_0px_0_0_#96163e] transition-all flex items-center justify-center gap-3"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            {loading && <Loader2 className="w-6 h-6 animate-spin" />}
            {loading ? 'authenticating...' : 'continue'}
          </button>
        </form>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Powered by Zuup Auth
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
