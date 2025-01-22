import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import Insights from './pages/Insights';
import HealthServices from './pages/HealthServices';
import MentalHealthBot from './components/MentalHealthBot';
import DataAdvocacy from './pages/DataAdvocacy';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <SignedIn>
      {children}
    </SignedIn>
  );
};

const App: React.FC = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/community" element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            } />
            <Route path="/insights" element={
              <ProtectedRoute>
                <Insights />
              </ProtectedRoute>
            } />
            <Route path="/services" element={
              <ProtectedRoute>
                <HealthServices />
              </ProtectedRoute>
            } />
            <Route path="/pulseanalytics" element={
              <ProtectedRoute>
                <DataAdvocacy />
              </ProtectedRoute>
            } />
          </Routes>
          <SignedIn>
            <MentalHealthBot />
          </SignedIn>
        </div>
      </BrowserRouter>
    </ClerkProvider>
  );
};

export default App;