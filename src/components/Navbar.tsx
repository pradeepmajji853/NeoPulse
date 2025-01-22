import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, LogOut } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useClerk();

  const links = [
    { to: '/', label: 'Home', public: true },
    { to: '/services', label: 'Services', public: false },
    { to: '/dashboard', label: 'Dashboard', public: false },
    { to: '/community', label: 'Community', public: false },
    { to: '/insights', label: 'AI Insights', public: false },
    { to: '/pulseanalytics', label: 'Pulse Analytics', public: false }
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-bold text-slate-800">Neopulse</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <SignedIn>
              {links.filter(link => !link.public).map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="relative px-1 py-2 text-slate-600 hover:text-teal-600 transition-colors"
                >
                  {location.pathname === to && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-teal-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {label}
                </Link>
              ))}
            </SignedIn>
          </div>

          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonBox: "hover:opacity-80 transition-opacity"
                  }
                }}
              />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in" className="px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
                Sign In
              </Link>
              <Link to="/sign-up" className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors">
                Sign Up
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;