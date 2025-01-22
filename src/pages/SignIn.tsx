import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

const SignIn: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <ClerkSignIn
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white shadow-sm rounded-2xl p-8",
              headerTitle: "text-2xl font-bold text-slate-800 text-center",
              headerSubtitle: "text-slate-600 text-center",
              formButtonPrimary: "bg-teal-600 hover:bg-teal-700 text-white",
              formFieldInput: "rounded-lg border-slate-200 focus:border-teal-500 focus:ring-teal-500",
              footerAction: "text-teal-600 hover:text-teal-700"
            }
          }}
          routing="path"
          path="/sign-in"
          redirectUrl="/dashboard"
        />
      </motion.div>
    </div>
  );
};

export default SignIn; 