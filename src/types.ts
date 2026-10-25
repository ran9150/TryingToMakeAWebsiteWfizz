export type CategoryId = 'all' | 'burgers' | 'sushi' | 'pizza' | 'asian' | 'grocery' | 'bakery' | 'healthy' | 'dessert';

export interface MenuItemOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItemOptionGroup {
  id: string;
  title: string;
  required: boolean;
  maxSelect?: number;
  options: MenuItemOption[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  category: string;
  optionGroups?: MenuItemOptionGroup[];
}

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  coverImage: string;
  logoImage: string;
  rating: number;
  reviewCount: number;
  deliveryTimeMin: number;
  deliveryTimeMax: number;
  deliveryFee: number;
  minOrder: number;
  isWoltPlus: boolean;
  badge?: string;
  tags: string[];
  category: CategoryId;
  address: string;
  distanceKm: number;
  menu: MenuItem[];
}

export interface SelectedOption {
  groupId: string;
  groupTitle: string;
  optionId: string;
  optionName: string;
  price: number;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  quantity: number;
  selectedOptions: SelectedOption[];
  specialInstructions?: string;
  itemTotalPrice: number;
}

export interface UserLocation {
  id: string;
  label: string;
  address: string;
  details?: string;
  icon: string;
}

export type OrderStatus = 'received' | 'preparing' | 'picked_up' | 'arriving' | 'delivered';

export interface ActiveOrder {
  id: string;
  restaurant: Restaurant;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  tip: number;
  total: number;
  status: OrderStatus;
  etaMinutes: number;
  placedAt: Date;
  deliveryAddress: string;
  driver?: {
    name: string;
    phone: string;
    vehicle: string;
    vehiclePlate: string;
    photo: string;
  };
}