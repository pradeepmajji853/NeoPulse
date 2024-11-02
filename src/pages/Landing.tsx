import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Brain, ChevronRight } from 'lucide-react';

const Landing = () => {
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              What Our Community Says
            </h2>
            <blockquote className="text-xl text-slate-600 italic">
              "Neopulse has transformed how I approach my health. The personalized insights and supportive community have made all the difference."
            </blockquote>
            <div className="mt-4">
              <p className="font-medium text-slate-800">Sarah Johnson</p>
              <p className="text-slate-600">Community Member</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Start Your Journey?
            </h2>
            <button className="px-8 py-4 bg-white text-teal-600 rounded-full font-medium text-lg hover:bg-slate-100 transition-colors inline-flex items-center">
              Join Neopulse Today
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;