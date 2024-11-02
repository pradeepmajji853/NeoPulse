import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Award, Users, Heart } from 'lucide-react';

const Community = () => {
  const posts = [
    {
      id: 1,
      author: 'Sarah K.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      content: 'Just completed my first 5K! Thanks to everyone for the support and motivation.',
      likes: 24,
      comments: 8,
      time: '2h ago'
    },
    {
      id: 2,
      author: 'Mike R.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      content: 'New personal record in meditation streak - 30 days! The mindfulness challenge has been life-changing.',
      likes: 18,
      comments: 5,
      time: '4h ago'
    }
  ];

  const leaderboard = [
    { name: 'Jennifer M.', points: 2840, badge: '🏆' },
    { name: 'David L.', points: 2560, badge: '🥈' },
    { name: 'Sarah K.', points: 2320, badge: '🥉' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Community Feed</h2>
              
              <div className="space-y-6">
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold text-slate-800">{post.author}</h3>
                        <p className="text-sm text-slate-500">{post.time}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{post.content}</p>
                    
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-slate-600 hover:text-teal-600 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-slate-600 hover:text-teal-600 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Community Stats</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-slate-600">Active Members</span>
                </div>
                <span className="font-semibold text-slate-800">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-slate-600">Challenges Active</span>
                </div>
                <span className="font-semibold text-slate-800">8</span>
              </div>
            </motion.div>

            {/* Leaderboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <motion.div
                    key={user.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{user.badge}</span>
                      <span className="text-slate-800">{user.name}</span>
                    </div>
                    <span className="font-semibold text-teal-600">{user.points}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;