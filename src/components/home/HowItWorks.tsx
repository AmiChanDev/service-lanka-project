import React from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  UserGroupIcon, 
  CalendarDaysIcon, 
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    id: 1,
    title: 'Search Services',
    description: 'Browse categories or search for specific services you need in your area.',
    icon: MagnifyingGlassIcon,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Choose Provider',
    description: 'Compare profiles, ratings, and prices to select the perfect professional.',
    icon: UserGroupIcon,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Book & Schedule',
    description: 'Select your preferred date and time, then confirm your booking instantly.',
    icon: CalendarDaysIcon,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Get It Done',
    description: 'Your chosen provider arrives on time and completes the job to your satisfaction.',
    icon: CheckCircleIcon,
    color: 'from-green-500 to-emerald-500'
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            How ServiceLK Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Getting the help you need is simple with our platform
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="mx-auto mb-4">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-lg`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-accent-start to-accent-mid text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional benefits */}
        <div className="mt-16 glass rounded-2xl p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-2xl font-bold text-accent-mid mb-2">✓ Verified Professionals</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All service providers are background-checked and verified
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-mid mb-2">✓ Secure Payments</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Multiple payment options with secure processing
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-mid mb-2">✓ Quality Guarantee</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Satisfaction guaranteed or we'll make it right
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}