import { Restaurant, CategoryId, UserLocation } from './types';

export const USER_LOCATIONS: UserLocation[] = [
  { id: '1', label: 'Home', address: 'Rothschild Blvd 45, Tel Aviv', details: 'Apt 12, 3rd Floor', icon: 'home' },
  { id: '2', label: 'Work', address: 'Ahad Ha\'Am St 14, Tel Aviv', details: 'Tech Hub Office, Floor 5', icon: 'briefcase' },
  { id: '3', label: 'Gym / Studio', address: 'Dizengoff St 101, Tel Aviv', details: 'Entrance B', icon: 'map-pin' },
];

export const CATEGORIES: { id: CategoryId; name: string; icon: string }[] = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'sushi', name: 'Sushi', icon: '🍣' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'asian', name: 'Asian', icon: '🍜' },
  { id: 'grocery', name: 'Grocery', icon: '🛒' },
  { id: 'bakery', name: 'Bakery', icon: '🥐' },
  { id: 'healthy', name: 'Healthy', icon: '🥗' },
  { id: 'dessert', name: 'Desserts', icon: '🍩' },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'rest-1',
    name: 'America Burgers & Fries',
    slug: 'america-burgers',
    coverImage: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80',
    logoImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    reviewCount: 1420,
    deliveryTimeMin: 20,
    deliveryTimeMax: 30,
    deliveryFee: 1.99,
    minOrder: 12.00,
    isWoltPlus: true,
    badge: 'Popular',
    tags: ['Smash Burgers', 'American', 'Crispy Fries'],
    category: 'burgers',
    address: 'Allenby St 98, Tel Aviv',
    distanceKm: 1.2,
    menu: [
      {
        id: 'ab-1',
        name: 'Double Smash Cheeseburger',
        description: 'Two 100g smashed beef patties, cheddar cheese, caramelized onions, pickles, and house secret sauce.',
        price: 14.50,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        popular: true,
        category: 'Burgers',
        optionGroups: [
          {
            id: 'doneness',
            title: 'Patty Doneness',
            required: true,
            options: [
              { id: 'm', name: 'Medium', price: 0 },
              { id: 'mw', name: 'Medium Well', price: 0 },
              { id: 'w', name: 'Well Done', price: 0 }
            ]
          },
          {
            id: 'extras',
            title: 'Add Extra Toppings',
            required: false,
            options: [
              { id: 'bacon', name: 'Crispy Bacon', price: 2.50 },
              { id: 'jalapeno', name: 'Spicy Jalapeños', price: 1.00 },
              { id: 'extra_cheese', name: 'Extra Cheddar', price: 1.50 }
            ]
          }
        ]
      },
      {
        id: 'ab-2',
        name: 'Truffle & Mushroom Burger',
        description: 'Single grass-fed patty, wild mushrooms, black truffle mayo, Swiss cheese on artisanal brioche.',
        price: 16.00,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
        popular: true,
        category: 'Burgers'
      },
      {
        id: 'ab-3',
        name: 'Crispy Cajun Loaded Fries',
        description: 'Hand-cut fries spiced with Cajun seasoning, melted cheddar drizzle, and scallions.',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q