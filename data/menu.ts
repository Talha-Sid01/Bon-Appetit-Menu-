export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  protein?: string;
  tag?: 'Chef\'s Pick' | 'Best Seller' | 'Most Ordered' | 'Highest Protein' | 'Build-your-own' | string;
  isAddon?: boolean;
}

export interface CollectionItem {
  name: string;
  wafflePrice: number;
  pancakePrice: number;
  crepePrice: number;
  isSignature?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  iconName: 'sandwich' | 'salad' | 'beverage' | 'pasta' | 'toast' | 'sweet' | 'waffle' | 'dessert' | 'addon' | 'dumbbell' | 'shake' | 'bolt';
  description?: string;
  items: MenuItem[];
  collections?: CollectionItem[]; // For waffles, pancakes, crepes
}

export const generalAddons: MenuItem[] = [
  { name: 'Honey', price: 19, isAddon: true },
  { name: 'Cheese', price: 29, isAddon: true },
  { name: 'Cream', price: 39, isAddon: true },
  { name: 'Veggies', price: 49, isAddon: true },
  { name: 'Nuts', price: 49, isAddon: true },
  { name: 'Parmigiano Reggiano', price: 99, isAddon: true }
];

export const performanceAddons: MenuItem[] = [
  { name: 'Honey', price: 19, isAddon: true },
  { name: 'Banana', price: 19, isAddon: true },
  { name: 'Peanut Butter', price: 29, isAddon: true },
  { name: 'Oats', price: 29, isAddon: true },
  { name: 'Mixed Nuts', price: 39, isAddon: true },
  { name: 'Dark Chocolate', price: 29, isAddon: true },
  { name: 'Espresso Shot', price: 29, isAddon: true },
  { name: 'Seeds', price: 39, isAddon: true },
  { name: 'Extra Whey Scoop', price: 59, isAddon: true }
];

export const menuCategories: MenuCategory[] = [
  {
    id: 'savouries',
    title: 'Savouries / Sandwiches',
    iconName: 'sandwich',
    items: [
      { name: 'Plain Cheese Sandwich', price: 79 },
      { name: 'Chipotle Cheese Sandwich', price: 89 },
      { name: 'Peri Peri Cheese Sandwich', price: 89 },
      { name: 'Olive, Jalapeños & Cheese Sandwich', price: 99 },
      { name: 'Corn, Spinach & Cheese Sandwich', price: 129 },
      { name: 'Picante Paneer with Greens Sandwich', price: 139 },
      { name: 'Corn, Cream & Cheese Savoury', price: 179 }
    ]
  },
  {
    id: 'salads',
    title: 'Insalata / Salads',
    iconName: 'salad',
    items: [
      { name: 'Salad Italiano', price: 279 },
      { name: 'Simply Sautéed Asparagus with Parmigiano Reggiano', price: 299 },
      { name: 'Sautéed Mushroom & Asparagus with Parmigiano Reggiano', price: 499 }
    ]
  },
  {
    id: 'beverages',
    title: 'Beverages',
    iconName: 'beverage',
    items: [
      { name: 'Black Coffee', price: 69 },
      { name: 'Coffee with Milk', price: 89 },
      { name: 'Cold Coffee', price: 109 },
      { name: 'Coffee with Cream', price: 119 },
      { name: 'Hot Chocolate', price: 139 }
    ]
  },
  {
    id: 'pasta',
    title: 'Pasta',
    iconName: 'pasta',
    items: [
      { name: 'Aglio e Olio', price: 109 },
      { name: 'Classic Penne', price: 119 },
      { name: 'Classic Macaroni', price: 139 },
      { name: 'Cream & Cheese Pasta', price: 159 },
      { name: 'Cream & Cheese Pasta with Veggies', price: 179 },
      { name: 'Ravioli', price: 199 },
      { name: 'Basil Pesto Pasta', price: 219 }
    ]
  },
  {
    id: 'toast',
    title: 'Bruschetta & Toast',
    iconName: 'toast',
    items: [
      { name: 'Bruschetta al Pomodoro', price: 129 },
      { name: 'Avocado Toast', price: 169 },
      { name: 'Guacamole Toast', price: 179 }
    ]
  },
  {
    id: 'sweet-salty-spicy',
    title: 'Sweet • Salty • Spicy',
    iconName: 'sweet',
    items: [
      { name: 'Caramelized Apple', price: 99 },
      { name: 'Grilled Pineapple', price: 119 },
      { name: 'Caramelized Nuts', price: 199 }
    ]
  },
  {
    id: 'waffles-pancakes-crepes',
    title: 'Waffles • Pancakes • Crepes',
    iconName: 'waffle',
    items: [], // Kept empty, handled via collections toggle or separate UI
    collections: [
      {
        name: 'Daily Collection',
        wafflePrice: 79,
        pancakePrice: 79,
        crepePrice: 79
      },
      {
        name: 'Triple Chocolate Collection',
        wafflePrice: 99,
        pancakePrice: 99,
        crepePrice: 99
      },
      {
        name: 'Nutella Dream Delight',
        wafflePrice: 119,
        pancakePrice: 119,
        crepePrice: 119
      },
      {
        name: 'Whipped Cream Collection',
        wafflePrice: 129,
        pancakePrice: 129,
        crepePrice: 129
      },
      {
        name: 'Naked Nutella with KitKat',
        wafflePrice: 139,
        pancakePrice: 139,
        crepePrice: 139
      },
      {
        name: 'Signature Therapy Collection',
        wafflePrice: 199,
        pancakePrice: 199,
        crepePrice: 199,
        isSignature: true
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Classic Desserts',
    iconName: 'dessert',
    items: [
      { name: 'Mango Cheesecake', price: 149 },
      { name: 'Tiramisu Cheesecake', price: 149 },
      { name: 'Blueberry Cheesecake', price: 149 },
      { name: 'Strawberry Cheesecake', price: 149 },
      { name: 'Biscoff Cheesecake', price: 159 },
      { name: 'Fresh Pastry', price: 79 }
    ]
  },
  {
    id: 'addons',
    title: 'General Add-Ons',
    iconName: 'addon',
    items: generalAddons
  },
  {
    id: 'protein-diet',
    title: 'High Protein Diet',
    iconName: 'dumbbell',
    items: [
      {
        name: 'Peanut Butter Sandwich',
        description: 'Double Layered Whole Wheat Bread, Natural Peanut Butter',
        price: 99,
        protein: '≈16g'
      },
      {
        name: 'Peanut Butter Banana Sandwich',
        description: 'Double Layered Whole Wheat Bread, Peanut Butter, Banana',
        price: 119,
        protein: '≈18g',
        tag: 'Chef\'s Pick'
      },
      {
        name: 'Overloaded Protein Muesli Bowl',
        description: 'Greek Yogurt, Muesli, Banana, Peanut Butter, Mixed Nuts, Honey',
        price: 199,
        protein: '≈32g',
        tag: 'Best Seller'
      }
    ]
  },
  {
    id: 'protein-shakes',
    title: 'High Protein Shakes (500 ml)',
    iconName: 'shake',
    description: 'We only use milk.',
    items: [
      {
        name: 'Peanut Banana Shake',
        price: 99,
        protein: '≈20g'
      },
      {
        name: 'Oats Power Shake',
        price: 119,
        protein: '≈24g'
      },
      {
        name: 'Protein Shake',
        price: 159,
        protein: '≈30g',
        tag: 'Most Ordered'
      },
      {
        name: 'Protein Shake with Whey',
        price: 199,
        protein: '≈40g',
        tag: 'Highest Protein'
      },
      {
        name: 'Custom Protein Shake',
        price: 199,
        protein: '30–45g',
        tag: 'Build-your-own',
        description: 'Depends on ingredients'
      }
    ]
  },
  {
    id: 'performance-addons',
    title: 'Performance Add-Ons',
    iconName: 'bolt',
    items: performanceAddons
  }
];

export const trustBadges = [
  { label: 'High Protein', icon: 'dumbbell' },
  { label: 'Fresh Ingredients', icon: 'leaf' },
  { label: 'No Artificial Preservatives', icon: 'shield-check' },
  { label: 'Gym Friendly', icon: 'apple' },
  { label: 'Muscle Recovery', icon: 'activity' },
  { label: 'Made Fresh Daily', icon: 'clock' },
  { label: 'Made with Love', icon: 'heart' },
  { label: 'Premium Quality', icon: 'sparkles' },
  { label: 'Happy Experience', icon: 'smile' }
];
