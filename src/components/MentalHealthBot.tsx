import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Brain, Smile, Frown, Meh, Camera } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const MentalHealthBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your wellness companion. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const moodOptions = [
    { icon: Smile, label: 'Great', color: 'text-green-500' },
    { icon: Meh, label: 'Okay', color: 'text-yellow-500' },
    { icon: Frown, label: 'Not Good', color: 'text-red-500' }
  ];

  const toggleChat = () => setIsOpen(prev => !prev);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const lowercaseInput = userInput.toLowerCase();
    
    if (lowercaseInput.includes('anxious') || lowercaseInput.includes('anxiety')) {
      return "I understand feeling anxious can be overwhelming. Would you like to try a quick breathing exercise together?";
    } else if (lowercaseInput.includes('sad') || lowercaseInput.includes('depressed')) {
      return "I'm here to listen. Would you like to talk about what's making you feel this way?";
    } else if (lowercaseInput.includes('stress') || lowercaseInput.includes('stressed')) {
      return "Stress can be challenging. Let's identify what's causing it and explore some coping strategies together.";
    }
    
    return "Thank you for sharing. How long have you been feeling this way?";
  };

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setMessages(prev => [
        ...prev,
        { id: messages.length + 1, text: "Photo captured. Analyzing...", sender: 'bot', timestamp: new Date() }
      ]);
      
      setTimeout(() => {
        // Mock analysis for skin and mood
        const botResponse: Message = {
          id: messages.length + 2,
          text: "Your skin appears smooth and healthy with a neutral tone. You seem to have a calm mood. For skin care, remember to stay hydrated and use SPF. Need advice on wellness tips?",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1500);
    }
    setShowCamera(false);
  }, [messages.length]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className={`fixed left-6 bottom-6 z-50 p-4 rounded-full shadow-lg transition-colors ${isOpen ? 'bg-slate-700 hover:bg-slate-800' : 'bg-teal-600 hover:bg-teal-700'}`}
        onClick={toggleChat}
      >
        <Brain className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1 left-6 bottom-24 z-50 w-[380px] bg-white rounded-2xl shadow-xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Brain className="w-6 h-6 text-teal-600" />
                <h3 className="font-semibold text-slate-800">Wellness Assistant</h3>
              </div>
              <button onClick={toggleChat} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div key={message.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${message.sender === 'user' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                    <p>{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Mood Selection */}
            <div className="p-4 border-t border-slate-100">
              <p className="text-sm text-slate-600 mb-2">How are you feeling?</p>
              <div className="flex justify-around mb-4">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => {
                      setInputText(`I'm feeling ${mood.label.toLowerCase()}`);
                      handleSendMessage();
                    }}
                    className="flex flex-col items-center space-y-1 p-2 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <mood.icon className={`w-6 h-6 ${mood.color}`} />
                    <span className="text-xs text-slate-600">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input and Camera Button */}
            <div className="p-4 border-t border-slate-100 flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500"
              />
              <button onClick={() => setShowCamera(true)} className="p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                <Camera className="w-5 h-5" />
              </button>
              <button onClick={handleSendMessage} className="p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Camera Modal */}
            {showCamera && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="rounded-lg shadow-lg"
                />
                <button onClick={capturePhoto} className="mt-4 p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">Capture Photo</button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MentalHealthBot;
