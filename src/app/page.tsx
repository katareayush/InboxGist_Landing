'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Zap,
  Shield,
  LineChart,
  Menu,
  X
} from 'lucide-react';
import Footer from '@/components/Footer';

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
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      description: "Add Inbox Gist to your browser with just one click. Available for Chrome."
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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#features" className="text-gray-600 hover:text-indigo-600">Features</Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How it Works</Link>
              <button 
                onClick={() => {router.push(`https://chromewebstore.google.com/detail/inboxgist-summarize-any-e/hmlfldbomclhfbbnokfnjihonhebhpol`)}}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Add to Browser
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="#features"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it Works
                </Link>
                <div className="px-3 py-2">
                  <button
                    onClick={() => {
                      router.push(`https://chromewebstore.google.com/detail/inboxgist-summarize-any-e/hmlfldbomclhfbbnokfnjihonhebhpol`);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                  >
                    Add to Browser
                  </button>
                </div>
              </div>
            </div>
          )}
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
              <button 
                onClick={() => {router.push(`https://chromewebstore.google.com/detail/inboxgist-summarize-any-e/hmlfldbomclhfbbnokfnjihonhebhpol`)}}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold"
              >
                Install Now - It's Free
              </button>
              <button 
                onClick={() => {router.push(`https://www.youtube.com/watch?v=JSbY58Czj_I`)}}
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition duration-300 text-lg font-semibold"
              >
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

      <Footer/>
    </main>
  );
};

export default Home;