'use client';

import { useState } from 'react';
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface MenuItemProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const MenuItems = ({ backgroundImage, title, description }: MenuItemProps) => {
  return (
    <div className={`h-[500px] w-[500px] min-w-[800px] ${backgroundImage} bg-cover bg-center bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-4">
      <div className="flexCenter gap-4">
        <div className=" bg-green-50">
          <Image
            src="/food_app_logo.png"
            alt="Food Logo"
            width={52}
            height={52}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{description}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <div className="flex flex-col items-center">
          <button className="bg-white text-green-50 px-4 py-2 rounded-full mt-2 hover:bg-green-50 hover:text-white transition-colors">
            Order Now
          </button>
        </div>
      </div>
     </div>
    </div>
  )
}

const MenuHighlights = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/${isLogin ? 'login' : 'signup'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        localStorage.setItem('token', data.token);
        // Redirect to home page after successful login/signup
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setMessage({ type: 'error', text: data.message || 'Authentication failed' });
      }
    } catch (error) {
      console.error('Auth error:', error);
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-4 lg:py-5 xl:mb-20">
      {/* Menu Items Section */}
      <div className="hide-scrollbar flex flex-col gap-8 lg:gap-8 lg:flex-row">
        <MenuItems 
          backgroundImage="bg-[url('/tacos.png')]"
          title="Signature Tacos"
          description="Fresh and authentic Mexican flavors"
        />
        <MenuItems 
          backgroundImage="bg-[url('/sandwiches.jpg')]"
          title="Gourmet Sandwiches"
          description="Premium ingredients in every bite"
        />
      </div>

      {/* Login/Signup Form */}
      <div className="flexEnd mt-60 px-16 lg:-mt-96 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[350px] xl:max-w-[500px] xl:rounded-5xl xl:px-16 xl:py-11 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-40 capitalize text-white text-center mb-8">
            <strong>{isLogin ? 'Welcome Back' : 'Create Account'}</strong>
          </h2>
          
          {message.text && (
            <div className={`p-3 mb-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-white regular-14">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white regular-14">Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
                required
                disabled={isLoading}
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="w-4 h-4" />
                  <label htmlFor="remember" className="text-white regular-14">Remember me</label>
                </div>
                <a href="#" className="text-white regular-14 hover:underline">Forgot password?</a>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-white text-green-50 py-3 rounded-lg mt-4 hover:bg-green-50 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
            </button>

            <p className="text-white regular-14 text-center mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="underline hover:text-white/80"
                disabled={isLoading}
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </form>

          <Image 
            src="/quote.svg"
            alt="decorative quote"
            width={186}
            height={219}
            className="camp-quote opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;