'use client';

import React from 'react';
import Link from 'next/link';
import {
  Zap,
  Shield,
  LineChart,
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface YouTubeEmbedProps {
  videoId: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="p-6 bg-gray-50 rounded-lg transition-transform hover:scale-105">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => (
  <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Inbox Gist Demo"
    />
  </div>
);

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Home: React.FC = () => {
  const features = [
    {
      title: "Lightning Fast",
      description: "Get instant summaries of your emails with just one click. No more wasting time reading lengthy emails.",
      icon: <Zap className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Privacy First",
      description: "Your emails stay private. Our AI processes everything locally on your device.",
      icon: <Shield className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Smart Summaries",
      description: "AI-powered summarization that captures the key points and action items from your emails.",
      icon: <LineChart className="w-6 h-6 text-indigo-600" />
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Install the Extension",
      description: "Add Inbox Gist to your browser with just one click. Available for Chrome, Firefox, and Safari."
    },
    {
      number: 2,
      title: "Open Your Email",
      description: "Navigate to any email in your inbox that you want summarized."
    },
    {
      number: 3,
      title: "Get Your Summary",
      description: "Click the Inbox Gist icon to instantly generate a smart summary of your email."
    }
  ];

  return (
    <main className="bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">InboxGist</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#features" className="text-gray-600 hover:text-indigo-600">Features</Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How it Works</Link>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                Add to Browser
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
              Your Inbox, <span className="text-indigo-600">Simplified</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Get instant AI-powered summaries of your emails. Save time and stay focused on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold">
                Install Now - It's Free
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition duration-300 text-lg font-semibold">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Inbox Gist?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <StepCard key={index} {...step} />
              ))}
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <YouTubeEmbed videoId="JSbY58Czj_I" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Simplify Your Inbox?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of professionals who save hours every week with Inbox Gist.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition duration-300 text-lg font-semibold">
            Get Started - It's Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Inbox Gist</h3>
            <p className="text-gray-400">Email summaries that save you time.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;