import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Clock, Puzzle, ArrowRight, Star, UserCheck, MessageSquareMore, Handshake, DollarSign, Github, Twitter, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const features = [
  {
    icon: <MessageCircle className="w-8 h-8 text-primary-500" />,
    title: "Customised AI Chat",
    description: "Customise your tone of voice, behaviour, creative response to ensure the bot is aligned with you and your product."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-500" />,
    title: "24/7 Lead Generation",
    description: "Even when you’re not around, Convola is there to greet your website visitors, answer their questions, and guide them to book a call or join your program."
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary-500" />,
    title: "Automated Call Booking",
    description: "Seamlessly books calls right from your website."
  },
  {
    icon: <Puzzle className="w-8 h-8 text-primary-500" />,
    title: "Easy Integration",
    description: "Plug & play setup — no tech skills needed. Easily integrates with your website, landing pages & other tools."
  }
];

const steps = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    text: "Visitor comes"
  },
  {
    icon: <MessageSquareMore className="w-6 h-6" />,
    text: "Starts Chat"
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    text: "Gets Value"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    text: "Books a Call"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    text: "You Close the Deal"
  }
];

const testimonials = [
  {
    quote: "Convola literally booked me 10 sales calls in a week without me doing anything.",
    author: "Sophie",
    role: "Fitness Coach",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "This AI chat feels so real — my website finally converts!",
    author: "Rahul",
    role: "Finance Mentor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
  }
];

function App() {
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  //   setFormData({ name: '', email: '', company: '', message: '' });
  //   setShowContact(false);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs.send('service_4bcifsf', 'template_xasgy0n', {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    }, 'q92WN8nR4iA0p7M6T')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Email send error:', error.text);
        alert('Failed to send message. Please try again.');
      });
  
    setFormData({ name: '', email: '', company: '', message: '' });
    setShowContact(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Get Started with <span className="text-primary-600">Convola</span></h2>
              <button 
                onClick={() => setShowContact(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-20 pb-32">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
              variants={fadeIn}
            >
              {/* Turn Conversations Into Clients with */}
               <span className="text-primary-600">CONVOLA-</span>
              THE AI SUPPORT BOT CUSTOM BUILT FOR YOUR COACHING BUSINESS
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={fadeIn}
            >
              {/* Your 24/7 AI Sales Assistant that chats like a human, books more calls, and converts website visitors — effortlessly. */}
              Grow your coaching business on autopilot with our 24/7 AI support bot designed to chat with your website visitors, answer their questions, guide them with care, and turn them into paying clients — all while you stay focused on what you do best.
            </motion.p>
            <motion.div 
              className="flex justify-center"
              variants={fadeIn}
            >
              <button 
                onClick={() => setShowContact(true)}
                className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors flex items-center"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80" 
              alt="AI Chat Interface" 
              className="rounded-2xl shadow-2xl mx-auto animate-float"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center md:w-1/5">
                <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center mb-4 relative z-10">
                  {step.icon}
                </div>
                <p className="font-medium text-center">{step.text}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[calc(50%+2rem)] top-8 w-[calc(100%-1rem)] h-[2px] bg-primary-300">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-primary-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-white shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Convert More Visitors?</h2>
          <p className="text-xl mb-8 text-primary-100">Start your 14-day free trial. No credit card required.</p>
          <button 
            onClick={() => setShowContact(true)}
            className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Convola</h3>
              <p className="text-gray-400">AI-powered conversations that convert visitors into valuable clients.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-400 transition-colors"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="hover:text-primary-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="hover:text-primary-400 transition-colors"><Github className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Convola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;