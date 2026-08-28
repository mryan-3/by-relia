export type CommunityGridItem =
  | {
      type: "product";
      id: string;
      name: string;
      tag: string;
      lookId: string;
      price: number;
      image: string;
    }
  | {
      type: "interstitial";
      id: string;
      tag: string;
      lookId?: string;
    }
  | {
      type: "editorial";
      id: string;
      image: string;
      alt: string;
      lookId?: string;
    };

export const communityItems: CommunityGridItem[] = [
  {
    type: "product",
    id: "cp-1",
    name: "Textured Wave Jacket",
    tag: "Limited Edition",
    lookId: "look-arch",
    price: 800,
    image: "/images/prod-wave-jacket.jpg",
  },
  {
    type: "product",
    id: "cp-2",
    name: "Illusionist Leather Sneakers",
    tag: "Limited Edition",
    lookId: "look-flow",
    price: 650,
    image: "/images/prod-sneakers.jpg",
  },
  {
    type: "product",
    id: "cp-3",
    name: "Wide-Weave Denim Pants with Pleats",
    tag: "Limited Edition",
    lookId: "look-flow",
    price: 500,
    image: "/images/prod-denim-pants.jpg",
  },
  {
    type: "product",
    id: "cp-4",
    name: "Premium Pleated Casual Pants",
    tag: "Limited Edition",
    lookId: "look-arch",
    price: 600,
    image: "/images/prod-pleated-pants.jpg",
  },
  {
    type: "product",
    id: "cp-5",
    name: "Textured Cotton-Linen Short-Sleeve Top",
    tag: "Everyday Essentials",
    lookId: "look-flow",
    price: 350,
    image: "/images/prod-linen-top.jpg",
  },
  {
    type: "product",
    id: "cp-6",
    name: "Merino Wool Long-Sleeve Top",
    tag: "Everyday Essentials",
    lookId: "look-contour",
    price: 650,
    image: "/images/prod-merino-model.jpg",
  },
  {
    type: "interstitial",
    id: "cp-7",
    tag: "Everyday Essentials",
    lookId: "look-flow",
  },
  {
    type: "product",
    id: "cp-8",
    name: "Stripe Slim Tee",
    tag: "Everyday Essentials",
    lookId: "look-contour",
    price: 201,
    image: "/images/prod-striped-tee.jpg",
  },
  {
    type: "product",
    id: "cp-9",
    name: "Sculpted Derby Shoes",
    tag: "Limited Edition",
    lookId: "look-arch",
    price: 720,
    image: "/images/prod-derby-shoes.jpg",
  },
  {
    type: "interstitial",
    id: "cp-10",
    tag: "Limited Edition",
    lookId: "look-arch",
  },
  {
    type: "product",
    id: "cp-11",
    name: "Shield Bag",
    tag: "Limited Edition",
    lookId: "look-contour",
    price: 200,
    image: "/images/prod-shield-bag.jpg",
  },
  {
    type: "editorial",
    id: "cp-12",
    lookId: "look-contour",
    image: "/images/prod-editorial-bag.jpg",
    alt: "By.Relia editorial draped padded sling bag silhouette",
  },
];
