import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Trophy, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Activity, label: 'Daily Steps', value: '8,432', target: '10,000' },
    { icon: Heart, label: 'Avg Heart Rate', value: '72', unit: 'bpm' },
    { icon: Trophy, label: 'Challenges Complete', value: '3', total: '5' },
    { icon: TrendingUp, label: 'Weekly Progress', value: '+15%', trend: 'up' }
  ];

  const recommendations = [
    {
      title: 'Morning Yoga Session',
      description: 'Start your day with a 15-minute yoga routine',
      time: '15 mins'
    },
    {
      title: 'Hydration Check',
      description: 'Remember to drink 8 glasses of water today',
      time: 'All day'
    },
    {
      title: 'Evening Walk',
      description: 'Take a relaxing walk after dinner',
      time: '30 mins'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-8">
            Welcome back, Alex
          </h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-teal-600" />
                  <span className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-800">
                  {stat.value}
                </div>
                {stat.target && (
                  <div className="mt-2">
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '84%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-teal-600 h-2 rounded-full"
                      />
                    </div>
                    <p className="text-sm text-slate-500 mt-1">
                      Target: {stat.target}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Recommendations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Today's Recommendations
            </h2>
            <div className="grid gap-6">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {rec.title}
                      </h3>
                      <p className="text-slate-600">{rec.description}</p>
                    </div>
                    <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      {rec.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;