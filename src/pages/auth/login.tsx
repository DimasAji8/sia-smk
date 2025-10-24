import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInPage } from '@/components/ui/sign-in';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>, captchaToken: string | null) => {
    event.preventDefault();
    
    // Validasi captcha token
    if (!captchaToken) {
      alert('Silakan selesaikan verifikasi captcha terlebih dahulu');
      return;
    }

    // Log token untuk testing
    console.log('Captcha Token:', captchaToken);
    
    // TODO: Kirim captchaToken ke backend untuk verifikasi
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, password, captchaToken })
    // });
    
    // Untuk sementara langsung redirect ke dashboard
    navigate('/dashboard');
  };

  return (
    <SignInPage
      title={
        <span className="font-light text-foreground tracking-tighter">
         Selamat Datang di SIVIA ,
        </span>
      }
      description="Sistem Informasi dan Visualisasi Data Akademik"
      heroImageSrc="/images/assets/login.jpeg"
      onSignIn={handleSignIn}
    />
  );
};

export default Login;
