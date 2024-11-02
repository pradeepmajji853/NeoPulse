import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, FileText, Users, TrendingUp, Building2, MapPin } from 'lucide-react';

const DataAdvocacy = () => {
  const healthTrends = [
    {
      metric: 'Mental Health Support Access',
      change: '+15%',
      impact: '2,500 community members',
      trend: 'positive'
    },
    {
      metric: 'Preventive Care Utilization',
      change: '+23%',
      impact: '3,800 screenings conducted',
      trend: 'positive'
    },
    {
      metric: 'Healthcare Resource Gaps',
      change: '-8%',
      impact: '12 neighborhoods identified',
      trend: 'negative'
    }
  ];

  const reports = [
    {
      title: 'Q1 2024 Health Equity Report',
      status: 'Published',
      date: 'Mar 15, 2024',
      stakeholders: ['Local Health Board', 'Community Leaders']
    },
    {
      title: 'Mental Health Resources Analysis',
      status: 'In Review',
      date: 'Mar 20, 2024',
      stakeholders: ['Mental Health Coalition', 'City Council']
    }
  ];

  const initiatives = [
    {
      name: 'Healthcare Access Initiative',
      partner: 'Regional Health Alliance',
      status: 'Active',
      impact: '15,000 residents',
      type: 'Policy Reform'
    },
    {
      name: 'Community Health Workers Program',
      partner: 'Local NGO Coalition',
      status: 'Proposed',
      impact: '25 neighborhoods',
      type: 'Community Program'
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-slate-800">Data-Driven Advocacy</h1>
            <div className="flex items-center space-x-2 text-teal-600">
              <BarChart2 className="w-5 h-5" />
              <span className="font-medium">Real-time Analysis</span>
            </div>
          </div>

          {/* Health Trends Analysis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Health Trends Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {healthTrends.map((trend, index) => (
                <motion.div
                  key={trend.metric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-6 h-6 text-teal-600" />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      trend.trend === 'positive' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {trend.change}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{trend.metric}</h3>
                  <p className="text-slate-600">{trend.impact}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Public Health Reports */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Public Health Reports</h2>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <motion.div
                  key={report.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-teal-50 rounded-lg">
                        <FileText className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{report.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-slate-600">
                          <span>{report.date}</span>
                          <span className="px-2 py-1 bg-teal-50 text-teal-600 rounded-full">
                            {report.status}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {report.stakeholders.map((stakeholder) => (
                            <span
                              key={stakeholder}
                              className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                            >
                              {stakeholder}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Advocacy Initiatives */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Active Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-teal-50 rounded-lg">
                      {initiative.type === 'Policy Reform' ? (
                        <Building2 className="w-6 h-6 text-teal-600" />
                      ) : (
                        <Users className="w-6 h-6 text-teal-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {initiative.name}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-slate-600">
                          <span className="font-medium">Partner:</span> {initiative.partner}
                        </p>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-600">{initiative.impact}</span>
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          initiative.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                        }`}>
                          {initiative.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default DataAdvocacy;