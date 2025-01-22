import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Brain, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: Heart,
      title: 'Personalized Health Plans',
      description: 'Tailored wellness journeys based on your unique needs and goals'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others on similar health journeys for motivation and advice'
    },
    {
      icon: Brain,
      title: 'Data-Driven Insights',
      description: 'AI-powered recommendations to optimize your health decisions'
    }
  ];

  const handleGetStarted = () => {
    navigate('/services');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-slate-800 mb-6"
          >
            Empowering Communities for
            <span className="text-teal-600"> Health Equity</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Join a revolutionary platform that combines personalized health insights with community support to create lasting positive change.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="px-8 py-4 bg-teal-600 text-white rounded-full font-medium text-lg hover:bg-teal-700 transition-colors flex items-center space-x-2 mx-auto"
          >
            Get Started <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Transform Your Health Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience a comprehensive platform designed to support your wellness goals through innovation and community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spline Section with Overlays */}
      <section className="relative w-full h-screen">
        {/* Testimonial Overlay - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute top-12 left-12 max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg z-10"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            What Our Community Says
          </h2>
          <blockquote className="text-lg text-slate-600 italic mb-4">
            "Neopulse has transformed how I approach my health. The personalized insights and supportive community have made all the difference."
          </blockquote>
          <div>
            <p className="font-medium text-slate-800">Sarah Johnson</p>
            <p className="text-slate-600">Community Member</p>
          </div>
        </motion.div>

        {/* CTA Overlay - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-4 right-4 bg-white backdrop-blur-sm p-8 rounded-2xl shadow-lg z-10"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Ready to Start Your Journey?
          </h2>
          <button 
            onClick={handleGetStarted}
            className="px-6 py-3 bg-teal-600 text-white rounded-full font-medium text-lg hover:bg-teal-700 transition-colors inline-flex items-center"
          >
            Join Neopulse Today
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>

        {/* Spline iframe */}
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-4dbf2147b458fe5319ae8c62d131b355/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-teal-400">Neopulse</h3>
              <p className="text-slate-400">Empowering communities for better health outcomes through innovation and collaboration.</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-slate-400 hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="/services" className="text-slate-400 hover:text-teal-400 transition-colors">Services</a></li>
                <li><a href="/community" className="text-slate-400 hover:text-teal-400 transition-colors">Community</a></li>
                <li><a href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-slate-400 hover:text-teal-400 transition-colors">Blog</a></li>
                <li><a href="/faq" className="text-slate-400 hover:text-teal-400 transition-colors">FAQ</a></li>
                <li><a href="/support" className="text-slate-400 hover:text-teal-400 transition-colors">Support</a></li>
                <li><a href="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="text-slate-400">
                <p>Email: contact@neopulse.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Health Street</p>
                <p>San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Neopulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;