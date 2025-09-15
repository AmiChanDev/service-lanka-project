import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedProviders } from '../components/home/FeaturedProviders';
import { HowItWorks } from '../components/home/HowItWorks';

export function Homepage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProviders />
      <HowItWorks />
    </div>
  );
}