import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-accent-start via-accent-mid to-accent-end">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <SparklesIcon className="mr-2 h-4 w-4" />
              Trusted by 10,000+ Sri Lankan families
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Find <span className="text-white-lilac">Trusted</span> Service
            <br />
            Providers in Sri Lanka
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto"
          >
            Connect with verified local professionals for home services, repairs, and more. 
            Book instantly, pay securely, and get the job done right.
          </motion.p>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <div className="glass-light rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-mid focus:border-transparent"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-mid focus:border-transparent appearance-none">
                    <option>Select Location</option>
                    <option>Colombo</option>
                    <option>Gampaha</option>
                    <option>Kandy</option>
                    <option>Galle</option>
                  </select>
                </div>
                <Button size="lg" className="sm:w-auto">
                  Find Services
                </Button>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/categories">
              <Button size="lg" className="bg-white text-dark-blue hover:bg-white/90">
                Browse Categories
              </Button>
            </Link>
            <Link to="/providers">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-dark-blue">
                Find Providers
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-white">1,500+</div>
              <div className="text-sm text-white/80">Verified Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">25,000+</div>
              <div className="text-sm text-white/80">Jobs Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4.8★</div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}