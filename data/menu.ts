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
  { name: 'Honey', price: 19, description: 'Pure organic mountain honey drizzle.', isAddon: true },
  { name: 'Cheese', price: 29, description: 'Extra slice of melted cheddar or mozzarella.', isAddon: true },
  { name: 'Cream', price: 39, description: 'Fresh dollop of heavy whipped cream.', isAddon: true },
  { name: 'Veggies', price: 49, description: 'Portion of sautéed garden-fresh greens.', isAddon: true },
  { name: 'Nuts', price: 49, description: 'Crunchy mix of almonds, cashews & walnuts.', isAddon: true },
  { name: 'Parmigiano Reggiano', price: 99, description: 'Aged Italian Parmigiano shavings.', isAddon: true }
];

export const performanceAddons: MenuItem[] = [
  { name: 'Honey', price: 19, description: 'Pure raw honey for natural glycogen recovery.', isAddon: true },
  { name: 'Banana', price: 19, description: 'Fresh sliced banana for potassium reload.', isAddon: true },
  { name: 'Peanut Butter', price: 29, description: 'Creamy high-protein unsweetened peanut butter.', isAddon: true },
  { name: 'Oats', price: 29, description: 'Slow-digesting complex carbs for sustained energy.', isAddon: true },
  { name: 'Mixed Nuts', price: 39, description: 'Handful of energy-dense premium dry fruits.', isAddon: true },
  { name: 'Dark Chocolate', price: 29, description: 'Rich antioxidant dark cocoa bits.', isAddon: true },
  { name: 'Espresso Shot', price: 29, description: 'Bold caffeine shot for pre-workout focus.', isAddon: true },
  { name: 'Seeds', price: 39, description: 'Healthy mix of chia, flax, and pumpkin seeds.', isAddon: true },
  { name: 'Extra Whey Scoop', price: 59, description: 'High-quality isolate whey protein boost.', isAddon: true }
];

export const menuCategories: MenuCategory[] = [
  {
    id: 'savouries',
    title: 'Savouries / Sandwiches',
    iconName: 'sandwich',
    items: [
      { 
        name: 'Plain Cheese Sandwich', 
        price: 79, 
        description: 'Classic melted cheddar & mozzarella between toasted buttered artisan bread.' 
      },
      { 
        name: 'Chipotle Cheese Sandwich', 
        price: 89, 
        description: 'Toasted bread with a spicy, smoky chipotle spread and melted cheese.' 
      },
      { 
        name: 'Peri Peri Cheese Sandwich', 
        price: 89, 
        description: 'Fiery peri-peri spice layered with rich cream cheese and melted mozzarella.' 
      },
      { 
        name: 'Olive, Jalapeños & Cheese Sandwich', 
        price: 99, 
        description: 'Tangy sliced black olives, spicy jalapeños, and gooey melted cheese.' 
      },
      { 
        name: 'Corn, Spinach & Cheese Sandwich', 
        price: 129, 
        description: 'Creamy sweet corn and fresh spinach tossed in garlic butter with melted cheese.' 
      },
      { 
        name: 'Picante Paneer with Greens Sandwich', 
        price: 139, 
        description: 'Spicy marinated paneer cubes, fresh garden greens, and house picante dressing.' 
      },
      { 
        name: 'Corn, Cream & Cheese Savoury', 
        price: 179, 
        description: 'A rich, baked savoury pastry filled with sweet corn, heavy cream, and Parmesan.' 
      }
    ]
  },
  {
    id: 'salads',
    title: 'Insalata / Salads',
    iconName: 'salad',
    items: [
      { 
        name: 'Salad Italiano', 
        price: 279, 
        description: 'Crisp romaine, cherry tomatoes, cucumbers, black olives, and Parmesan in Italian herb vinaigrette.' 
      },
      { 
        name: 'Simply Sautéed Asparagus with Parmigiano Reggiano', 
        price: 299, 
        description: 'Tender fresh asparagus spears pan-seared in extra virgin olive oil and topped with aged Parmigiano.' 
      },
      { 
        name: 'Sautéed Mushroom & Asparagus with Parmigiano Reggiano', 
        price: 499, 
        description: 'Earthy wild mushrooms and asparagus sautéed in garlic butter, finished with shaved Parmigiano.' 
      }
    ]
  },
  {
    id: 'beverages',
    title: 'Beverages',
    iconName: 'beverage',
    items: [
      { 
        name: 'Black Coffee', 
        price: 69, 
        description: 'Strong, aromatic espresso shot diluted with hot water for a bold finish.' 
      },
      { 
        name: 'Coffee with Milk', 
        price: 89, 
        description: 'Freshly brewed classic drip coffee blended with warm steamed milk.' 
      },
      { 
        name: 'Cold Coffee', 
        price: 109, 
        description: 'Chilled espresso blended with vanilla ice cream and fresh milk, served frosty.' 
      },
      { 
        name: 'Coffee with Cream', 
        price: 119, 
        description: 'A decadent brew topped with a thick dollop of fresh whipped heavy cream.' 
      },
      { 
        name: 'Hot Chocolate', 
        price: 139, 
        description: 'Rich, velvety melted dark cocoa whisked with steamed milk and a hint of vanilla.' 
      }
    ]
  },
  {
    id: 'pasta',
    title: 'Pasta',
    iconName: 'pasta',
    items: [
      { 
        name: 'Aglio e Olio', 
        price: 109, 
        description: 'Spaghetti tossed in olive oil, toasted garlic, red chili flakes, and fresh parsley.' 
      },
      { 
        name: 'Classic Penne', 
        price: 119, 
        description: 'Penne pasta in a rich, slow-simmered Italian plum tomato marinara sauce.' 
      },
      { 
        name: 'Classic Macaroni', 
        price: 139, 
        description: 'Comforting macaroni in a smooth, creamy three-cheese cheddar sauce.' 
      },
      { 
        name: 'Cream & Cheese Pasta', 
        price: 159, 
        description: 'Decadent pasta tossed in a luxurious Parmesan cream sauce with cracked black pepper.' 
      },
      { 
        name: 'Cream & Cheese Pasta with Veggies', 
        price: 179, 
        description: 'Parmesan cream sauce pasta loaded with sautéed broccoli, bell peppers, and zucchini.' 
      },
      { 
        name: 'Ravioli', 
        price: 199, 
        description: 'Handmade pasta pockets filled with ricotta and spinach, served in sage butter sauce.' 
      },
      { 
        name: 'Basil Pesto Pasta', 
        price: 219, 
        description: 'Pasta tossed in a fresh fragrant basil, pine nut, garlic, and Parmigiano pesto.' 
      }
    ]
  },
  {
    id: 'toast',
    title: 'Bruschetta & Toast',
    iconName: 'toast',
    items: [
      { 
        name: 'Bruschetta al Pomodoro', 
        price: 129, 
        description: 'Toasted artisan bread topped with diced vine-ripened tomatoes, garlic, basil, and olive oil.' 
      },
      { 
        name: 'Avocado Toast', 
        price: 169, 
        description: 'Sourdough toast spread with fresh mashed avocado, sea salt, and red pepper flakes.' 
      },
      { 
        name: 'Guacamole Toast', 
        price: 179, 
        description: 'Artisan toast topped with zesty Mexican guacamole, cilantro, and lime juice.' 
      }
    ]
  },
  {
    id: 'sweet-salty-spicy',
    title: 'Sweet • Salty • Spicy',
    iconName: 'sweet',
    items: [
      { 
        name: 'Caramelized Apple', 
        price: 99, 
        description: 'Warm sliced apples sautéed in brown sugar, cinnamon, and a pinch of cayenne.' 
      },
      { 
        name: 'Grilled Pineapple', 
        price: 119, 
        description: 'Juicy pineapple rings grilled to perfection and dusted with spicy Tajin seasoning.' 
      },
      { 
        name: 'Caramelized Nuts', 
        price: 199, 
        description: 'A sweet and crunchy mix of roasted almonds, cashews, and walnuts glazed in maple syrup.' 
      }
    ]
  },
  {
    id: 'waffles-pancakes-crepes',
    title: 'Waffles • Pancakes • Crepes',
    iconName: 'waffle',
    items: [], 
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
      { 
        name: 'Mango Cheesecake', 
        price: 149, 
        description: 'Creamy cold-set cheesecake topped with fresh sweet Alphonso mango puree.' 
      },
      { 
        name: 'Tiramisu Cheesecake', 
        price: 149, 
        description: 'An espresso-infused cheesecake layered with ladyfingers and dusted with dark cocoa.' 
      },
      { 
        name: 'Blueberry Cheesecake', 
        price: 149, 
        description: 'Classic New York style cheesecake topped with a sweet, tangy blueberry compote.' 
      },
      { 
        name: 'Strawberry Cheesecake', 
        price: 149, 
        description: 'Rich cheesecake finished with a luscious glaze of fresh hand-picked strawberries.' 
      },
      { 
        name: 'Biscoff Cheesecake', 
        price: 159, 
        description: 'Cheesecake swirled with melted Lotus Biscoff spread and a crunchy Biscoff cookie crust.' 
      },
      { 
        name: 'Fresh Pastry', 
        price: 79, 
        description: 'A rotating selection of daily baked, flaky pastries filled with fruit or chocolate.' 
      }
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
        protein: '≈20g',
        description: 'Chilled milk shake blended with natural peanut butter and fresh bananas.'
      },
      {
        name: 'Oats Power Shake',
        price: 119,
        protein: '≈24g',
        description: 'Fulfill complex carbs and clean protein with blended oats, milk, and honey.'
      },
      {
        name: 'Protein Shake',
        price: 159,
        protein: '≈30g',
        tag: 'Most Ordered',
        description: 'Premium pure whey isolate protein shake for muscle recovery.'
      },
      {
        name: 'Protein Shake with Whey',
        price: 199,
        protein: '≈40g',
        tag: 'Highest Protein',
        description: 'Double whey isolate serving shake formulated for serious athletes.'
      },
      {
        name: 'Custom Protein Shake',
        price: 199,
        protein: '30–45g',
        tag: 'Build-your-own',
        description: 'Select your choice of toppings and extra whey scopes.'
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
