// Sri Lankan Districts
export const SRI_LANKAN_DISTRICTS = [
  // Western Province
  'Colombo', 'Gampaha', 'Kalutara',
  // Central Province
  'Kandy', 'Matale', 'Nuwara Eliya',
  // Southern Province
  'Galle', 'Matara', 'Hambantota',
  // Northern Province
  'Jaffna', 'Mannar', 'Vavuniya', 'Mullaitivu', 'Kilinochchi',
  // Eastern Province
  'Batticaloa', 'Ampara', 'Trincomalee',
  // North Western Province
  'Kurunegala', 'Puttalam',
  // North Central Province
  'Anuradhapura', 'Polonnaruwa',
  // Uva Province
  'Badulla', 'Monaragala',
  // Sabaragamuwa Province
  'Ratnapura', 'Kegalle'
];

// Colombo Areas
export const COLOMBO_AREAS = [
  'Colombo 1 (Fort)', 'Colombo 2 (Slave Island)', 'Colombo 3 (Colpetty)',
  'Colombo 4 (Bambalapitiya)', 'Colombo 5 (Narahenpita)', 'Colombo 6 (Wellawatta)',
  'Colombo 7 (Cinnamon Gardens)', 'Colombo 8 (Borella)', 'Colombo 9 (Dematagoda)',
  'Colombo 10 (Maradana)', 'Colombo 11 (Pettah)', 'Colombo 12 (Hulftsdorp)',
  'Colombo 13 (Kotahena)', 'Colombo 14 (Grandpass)', 'Colombo 15 (Mutwal)',
  'Mount Lavinia', 'Dehiwala', 'Maharagama', 'Kotte', 'Rajagiriya'
];

// Service Categories
export const SERVICE_CATEGORIES = [
  {
    id: 1,
    name: 'Home Cleaning',
    icon: 'home',
    image_url: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Professional house cleaning services',
    provider_count: 156
  },
  {
    id: 2,
    name: 'Plumbing',
    icon: 'wrench',
    image_url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Expert plumbing repairs and installation',
    provider_count: 89
  },
  {
    id: 3,
    name: 'Electrical Work',
    icon: 'bolt',
    image_url: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Licensed electrical services',
    provider_count: 72
  },
  {
    id: 4,
    name: 'AC Repair',
    icon: 'wind',
    image_url: 'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    description: 'Air conditioning maintenance and repair',
    provider_count: 43
  },
  {
    id: 5,
    name: 'Carpentry',
    icon: 'hammer',
    image_url: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Custom woodwork and furniture repair',
    provider_count: 67
  },
  {
    id: 6,
    name: 'Painting',
    icon: 'palette',
    image_url: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Interior and exterior painting',
    provider_count: 91
  },
  {
    id: 7,
    name: 'Gardening',
    icon: 'leaf',
    image_url: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Landscaping and garden maintenance',
    provider_count: 34
  },
  {
    id: 8,
    name: 'Pet Care',
    icon: 'heart',
    image_url: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Pet grooming and veterinary services',
    provider_count: 28
  }
];

// Mock Providers Data
export const MOCK_PROVIDERS = [
  {
    id: 1,
    fname: 'Kasun',
    lname: 'Perera',
    email: 'kasun.perera@email.com',
    mobile: '+94 77 123 4567',
    verified: true,
    profile_image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    whatsapp_number: '+94 77 123 4567',
    description: 'Professional plumber with 10+ years experience in Colombo area. Specializing in pipe repairs, installations, and emergency services.',
    address: 'Colombo 7',
    district: 'Colombo',
    experience: '10 years',
    service_charge: 2500,
    rating: 4.8,
    total_jobs: 245,
    response_time: '< 30 mins',
    services: [1, 2, 8]
  },
  {
    id: 2,
    fname: 'Priya',
    lname: 'Fernando',
    email: 'priya.fernando@email.com',
    mobile: '+94 71 987 6543',
    verified: true,
    profile_image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    whatsapp_number: '+94 71 987 6543',
    description: 'Expert house cleaner providing comprehensive cleaning services for homes and offices. Eco-friendly products used.',
    address: 'Dehiwala',
    district: 'Colombo',
    experience: '5 years',
    service_charge: 1800,
    rating: 4.9,
    total_jobs: 189,
    response_time: '< 1 hour',
    services: [1, 6]
  }
];

// Payment Methods
export const PAYMENT_METHODS = [
  { id: 1, name: 'Cash on Service', icon: 'banknotes' },
  { id: 2, name: 'Credit/Debit Card', icon: 'credit-card' },
  { id: 3, name: 'Bank Transfer', icon: 'building-library' },
  { id: 4, name: 'Digital Wallet', icon: 'device-phone-mobile' }
];

// Booking Status
export const BOOKING_STATUS = {
  PENDING: { id: 1, name: 'Pending', color: 'warning' },
  CONFIRMED: { id: 2, name: 'Confirmed', color: 'info' },
  IN_PROGRESS: { id: 3, name: 'In Progress', color: 'info' },
  COMPLETED: { id: 4, name: 'Completed', color: 'success' },
  CANCELLED: { id: 5, name: 'Cancelled', color: 'error' }
};

// App Configuration
export const APP_CONFIG = {
  name: 'ServiceLK',
  description: 'Sri Lanka\'s Premier Service Marketplace',
  version: '1.0.0',
  supportEmail: 'support@servicelk.com',
  supportPhone: '+94 11 234 5678'
};