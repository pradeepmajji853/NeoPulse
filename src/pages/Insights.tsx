import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Activity, Brain, TrendingUp } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      title: 'Sleep Pattern Analysis',
      description: 'Your sleep quality has improved by 15% this week. Keep maintaining a consistent bedtime routine.',
      icon: Brain,
      trend: 'positive'
    },
    {
      title: 'Activity Insights',
      description: 'You are most active between 2-4 PM. Consider scheduling important tasks during this peak energy window.',
      icon: Activity,
      trend: 'neutral'
    },
    {
      title: 'Wellness Score',
      description: 'Your overall wellness score is trending upward. Great progress in meditation and exercise consistency.',
      icon: TrendingUp,
      trend: 'positive'
    }
  ];

  const healthMetrics = [
    { label: 'Sleep Quality', value: 85, change: '+15%' },
    { label: 'Activity Level', value: 72, change: '+5%' },
    { label: 'Stress Level', value: 45, change: '-10%' },
    { label: 'Nutrition Score', value: 88, change: '+8%' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-slate-800">AI Health Insights</h1>
            <div className="flex items-center space-x-2 text-teal-600">
              <LineChart className="w-5 h-5" />
              <span className="font-medium">Last Updated: Today</span>
            </div>
          </div>

          {/* Health Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {healthMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <h3 className="text-sm font-medium text-slate-500 mb-2">{metric.label}</h3>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold text-slate-800">{metric.value}</div>
                  <div className={`text-sm font-medium ${
                    metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-teal-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Insights */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Personalized Insights</h2>
            {insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-50 rounded-lg">
                    <insight.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {insight.title}
                    </h3>
                    <p className="text-slate-600">{insight.description}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        insight.trend === 'positive' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                      }`}>
                        {insight.trend === 'positive' ? 'Improving' : 'Stable'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Insights;