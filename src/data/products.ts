export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "ice-cream" | "cakes" | "candies" | "cookies";
  rating: number;
  inStock: boolean;
  ingredients?: string[];
  customizations?: {
    sugarLevel?: boolean;
    toppings?: string[];
    sizes?: string[];
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Strawberry Dream Ice Cream",
    description: "Creamy vanilla ice cream swirled with fresh strawberry chunks and a hint of mint",
    price: 8.99,
    image: "https://media.istockphoto.com/id/936205852/photo/chocolate-ice-cream-in-a-glass-cup.jpg?s=612x612&w=0&k=20&c=gcPTroDVPNSlCS45BkqEG-6-REnKFEzboBpuX8O3lY4=", // real ice cream image
    category: "ice-cream",
    rating: 4.8,
    inStock: true,
    ingredients: ["Fresh cream", "Strawberries", "Vanilla", "Sugar", "Mint"],
    customizations: {
      sugarLevel: true,
      toppings: ["Chocolate chips", "Whipped cream", "Fresh berries"],
      sizes: ["Small", "Medium", "Large"]
    }
  },
  {
    id: "2",
    name: "Rainbow Velvet Cake",
    description: "Multi-layered rainbow cake with smooth cream cheese frosting and colorful sprinkles",
    price: 24.99,
    image: "https://t4.ftcdn.net/jpg/08/46/78/67/360_F_846786782_npQ8KtE0LU4u7aFxlCqw3m1Sb0Xp8Tzx.jpg",
    category: "cakes",
    rating: 4.9,
    inStock: true,
    ingredients: ["Flour", "Eggs", "Butter", "Cream cheese", "Food coloring"],
    customizations: {
      sizes: ["6 inch", "8 inch", "10 inch"]
    }
  },
  {
    id: "3",
    name: "Cotton Candy Clouds",
    description: "Fluffy cotton candy in various pastel colors, melts in your mouth",
    price: 5.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWVAhejZN1yiRKBuTHWXoC41Q0lCZc9sNWg&s",
    category: "candies",
    rating: 4.6,
    inStock: true,
    ingredients: ["Sugar", "Food coloring", "Natural flavoring"]
  },
  {
    id: "4",
    name: "Chocolate Chip Delight",
    description: "Warm, gooey chocolate chip cookies with sea salt and caramel drizzle",
    price: 12.99,
    image: "https://i.pinimg.com/736x/91/40/86/914086c465ae50d886374cefad66b654.jpg",
    category: "cookies",
    rating: 4.7,
    inStock: true,
    ingredients: ["Flour", "Chocolate chips", "Butter", "Brown sugar", "Vanilla"],
    customizations: {
      toppings: ["Caramel drizzle", "Sea salt", "Extra chocolate chips"]
    }
  },
  {
    id: "5",
    name: "Mint Chocolate Chip",
    description: "Refreshing mint ice cream loaded with dark chocolate chips",
    price: 9.99,
    image: "https://thumbs.dreamstime.com/b/various-varieties-ice-cream-cones-various-varieties-ice-cream-cones-mint-blueberry-strawberry-pistachio-cherry-158155767.jpg", // same as 1 for example
    category: "ice-cream",
    rating: 4.5,
    inStock: true,
    ingredients: ["Fresh cream", "Mint", "Dark chocolate", "Sugar"],
    customizations: {
      sugarLevel: true,
      sizes: ["Small", "Medium", "Large"]
    }
  },
  {
    id: "6",
    name: "Red Velvet Cupcakes",
    description: "Classic red velvet cupcakes topped with cream cheese frosting",
    price: 18.99,
    image: "https://cdn.pixabay.com/photo/2016/10/03/23/15/ice-1713160_640.jpg",
    category: "cakes",
    rating: 4.8,
    inStock: false,
    ingredients: ["Flour", "Cocoa powder", "Red food coloring", "Cream cheese"]
  },
  {
    id: "7",
    name: "Gummy Bear Paradise",
    description: "Assorted gummy bears in fruity flavors with a chewy texture",
    price: 7.99,
    image: "https://wallpapers.com/images/featured/ice-cream-background-gudzr50hbe61ehdb.jpg",
    category: "candies",
    rating: 4.4,
    inStock: true,
    ingredients: ["Gelatin", "Fruit juices", "Sugar", "Natural flavoring"]
  },
  {
    id: "8",
    name: "Oatmeal Raisin Cookies",
    description: "Hearty oatmeal cookies with plump raisins and a touch of cinnamon",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    category: "cookies",
    rating: 4.3,
    inStock: true,
    ingredients: ["Oats", "Raisins", "Flour", "Cinnamon", "Brown sugar"]
  }
];

export const categories = [
  { id: "all", name: "All Products", icon: "🍯" },
  { id: "ice-cream", name: "Ice Cream", icon: "🍦" },
  { id: "cakes", name: "Cakes", icon: "🎂" },
  { id: "candies", name: "Candies", icon: "🍬" },
  { id: "cookies", name: "Cookies", icon: "🍪" }
];
