// Core User Types
export interface User {
  id: string;
  fname: string;
  lname: string;
  mobile: string;
  email: string;
  password: string;
  verified: boolean;
  created_at: string;
  city_id: number;
  district: string;
  avatar?: string;
}

export interface Provider extends User {
  user_id: number;
  verified: boolean;
  profile_image: string;
  whatsapp_number: string;
  description: string;
  address: string;
  created_at: string;
  update_at: string;
  service_time: string;
  experience: string;
  google_map: string;
  service_charge: number;
  provider_type_id: number;
  provider_status_id: number;
  availability_status_id: number;
  rating: number;
  total_jobs: number;
  response_time: string;
}

// Service & Category Types
export interface ServiceCategory {
  id: number;
  name: string;
  image_url: string;
  description: string;
  status: string;
  created_at: string;
  icon?: string;
  provider_count?: number;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  base_price: number;
  status: string;
  created_at: string;
  service_category_id: number;
  duration: number;
  image_url?: string;
}

export interface ProviderService {
  id: number;
  provider_id: number;
  services_id: number;
  custom_price: number;
  status: string;
  service?: Service;
}

// Portfolio & Reviews
export interface ProviderPortfolio {
  id: number;
  title: string;
  image_urls: string[];
  completed_date: string;
  services_id: number;
  provider_id: number;
  description?: string;
}

export interface ProviderRating {
  id: number;
  booking_id: number;
  score: number;
  review: string;
  created_at: string;
  user?: User;
  service?: Service;
}

// Booking & Payment Types
export interface Booking {
  id: number;
  user_id: number;
  provider_id: number;
  services_id: number;
  booking_date: string;
  scheduled_date: string;
  address: string;
  location: string;
  instructions: string;
  estimated_price: number;
  commission_amount: number;
  final_price: number;
  payment_method_id: number;
  payment_status_id: number;
  booking_status_id: number;
  status_name?: string;
  provider?: Provider;
  service?: Service;
  user?: User;
}

export interface Transaction {
  id: number;
  booking_id: number;
  provider_id: number;
  amount: number;
  payment_gateway_ref: string;
  created_at: string;
  payment_method_id: number;
  payment_status_id: number;
}

// Location Types
export interface District {
  id: number;
  name: string;
  province: string;
}

export interface City {
  id: number;
  name: string;
  district_id: number;
  district?: District;
}

// Filter Types
export interface FilterOptions {
  category?: number;
  location?: string;
  priceRange?: [number, number];
  rating?: number;
  availability?: boolean;
  sortBy?: 'price' | 'rating' | 'distance' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupForm {
  fname: string;
  lname: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  district: string;
}

export interface BookingForm {
  service_id: number;
  scheduled_date: string;
  address: string;
  location: string;
  instructions: string;
  payment_method: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    current_page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'system';

// Component Props Types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}