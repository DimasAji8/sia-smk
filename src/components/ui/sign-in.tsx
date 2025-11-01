import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';

// --- TYPE DEFINITIONS ---

interface SignInPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  heroImageSrc?: string;
  onSignIn?: (event: React.FormEvent<HTMLFormElement>, captchaToken: string | null) => void;
  onResetPassword?: () => void;
}

// --- SUB-COMPONENTS ---

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-violet-400/70 focus-within:bg-violet-500/10">
    {children}
  </div>
);

// --- MAIN COMPONENT ---

export const SignInPage: React.FC<SignInPageProps> = ({
  title = <span className="font-light text-foreground tracking-tighter">Welcome</span>,
  description = "Access your account and continue your journey with us",
  heroImageSrc = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
  onSignIn,
 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSignIn) {
      onSignIn(e, captchaToken);
    }
  };

  return (
    <div className="h-[100dvh] flex flex-col md:flex-row font-geist w-[100dvw]">
      {/* Left column: sign-in form - 30% */}
      <section className="md:w-[30%] flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-4">
            {/* Logo Section - left aligned and compact */}
            <div className="flex items-center justify-start gap-4 mb-4">
              {/* Compact sizes to stay within title boundary */}
              <img src="/images/logo/sasmita.png" alt="Logo yayasan" className="h-16 w-auto object-contain" />
              <div className="h-16 w-[2px] bg-border mx-1"></div>
              <img src="/images/logo/smk1.png" alt="Logo Sekolah" className="h-16 w-auto object-contain" />
              <img src="/images/logo/smk2.png" alt="Logo SMK" className="h-16 w-auto object-contain ml-1" />
            </div>


            {/* Title & Description */}
            <div className="space-y-1 mb-2">
              <h1 className="animate-element animate-delay-100 text-xl md:text-3xl font-semibold leading-tight">{title}</h1>
              <p className="animate-element animate-delay-200 text-base font-light text-muted-foreground">{description}</p>
            </div>

            <form className="space-y-5" onSubmit={handleFormSubmit}>
              <div className="animate-element animate-delay-300">
                <label className="text-sm font-medium text-muted-foreground">Username</label>
                <GlassInputWrapper>
                  <input name="username" type="text" placeholder="Masukkan NIS" className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none" />
                </GlassInputWrapper>
              </div>

              <div className="animate-element animate-delay-400">
                <label className="text-sm font-medium text-muted-foreground">Password</label>
                <GlassInputWrapper>
                  <div className="relative">
                    <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Masukkan Password" className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center">
                      {showPassword ? <EyeOff className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" /> : <Eye className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />}
                    </button>
                  </div>
                </GlassInputWrapper>
              </div>

              {/* Cloudflare Turnstile Captcha */}
              <div className="animate-element animate-delay-500">
                <Turnstile
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  onSuccess={(token) => setCaptchaToken(token)}
                  onError={() => setCaptchaToken(null)}
                  onExpire={() => setCaptchaToken(null)}
                  options={{
                    theme: 'light',
                    size: 'flexible',
                  }}
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={!captchaToken}
                  className="animate-element animate-delay-600 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Login
                </button>
              </div>
            </form>

            
          </div>
        </div>
      </section>

      {/* Right column: hero image - 70% */}
      <section className="hidden md:block md:w-[70%] relative p-4">
        <div className="animate-slide-right animate-delay-300 absolute inset-4 rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${heroImageSrc})` }}></div>
      </section>
    </div>
  );
};  