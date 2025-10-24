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
          SIA SMK Sasmita Jaya 1
        </span>
      }
      description="Masuk ke sistem informasi akademik untuk mengelola data sekolah"
      heroImageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
      onSignIn={handleSignIn}
    />
  );
};

export default Login;
