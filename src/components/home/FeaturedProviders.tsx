import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/20/solid';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MOCK_PROVIDERS } from '../../utils/constants';

export function FeaturedProviders() {
  const featuredProviders = MOCK_PROVIDERS.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Service Providers
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Meet our top-rated professionals ready to help you
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredProviders.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={provider.profile_image}
                      alt={`${provider.fname} ${provider.lname}`}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    {provider.verified && (
                      <div className="absolute -bottom-2 -right-2">
                        <Badge variant="success" size="sm">✓</Badge>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {provider.fname} {provider.lname}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                          {provider.rating}
                        </span>
                      </div>
                      <span className="text-gray-300 dark:text-gray-600">•</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {provider.total_jobs} jobs
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {provider.description}
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {provider.address}, {provider.district}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    Responds in {provider.response_time}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Starting from</span>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      LKR {provider.service_charge.toLocaleString()}
                    </div>
                  </div>
                  <Link to={`/provider/${provider.id}`}>
                    <Button size="sm">View Profile</Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/providers">
            <Button variant="secondary" size="lg">
              View All Providers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}