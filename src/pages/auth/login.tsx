import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInPage } from '@/components/ui/sign-in';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      description="Sistem Informasi dengan Visi Akademik"
      heroImageSrc="/images/assets/login.jpeg"
      onSignIn={handleSignIn}
    />
  );
};

export default Login;
