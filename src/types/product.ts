export interface Product {
  id: string;
  name: string;
  tag: string;
  category: "bestsellers" | "newarrivals" | "essentials" | "limited";
  price: number;
  image: string;
}

export const curatedProducts: Product[] = [
  {
    id: "p-1",
    name: "Glossy Beaded Retro Jacket",
    tag: "Best Sellers",
    category: "bestsellers",
    price: 450,
    image: "/images/prod-retro-jacket.jpg",
  },
  {
    id: "p-2",
    name: "3d Machete Leather Jacket",
    tag: "New Arrivals",
    category: "newarrivals",
    price: 800,
    image: "/images/prod-leather-jacket.jpg",
  },
  {
    id: "p-3",
    name: "Stripe Slim Tee",
    tag: "Everyday Essentials",
    category: "essentials",
    price: 201,
    image: "/images/prod-striped-tee.jpg",
  },
  {
    id: "p-4",
    name: "Shield Bag",
    tag: "Limited Edition",
    category: "limited",
    price: 200,
    image: "/images/prod-shield-bag.jpg",
  },
];
