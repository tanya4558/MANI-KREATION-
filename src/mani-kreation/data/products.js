// Product catalogue for MANI-KREATION home storage organizers
export const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const PRODUCTS = [
  {
    id: "mani-kreation-storage-box",
    name: "MANI-KREATION Foldable Storage Box",
    colorway: "Multi-angle product view",
    price: 250,
    mrp: 500,
    rating: 4.8,
    reviews: 214,
    badge: "Bestseller",
    tone: "rose",
    short:
      "A roomy fabric organizer with a lift-up lid, soft lining and a front label window for simple sorting.",
    image: "/ProductImage/IMG_3451.jpeg",
    gallery: [
      "/ProductImage/IMG_3451.jpeg",
      "/ProductImage/IMG_3452.jpeg",
      "/ProductImage/IMG_3453.jpeg",
      "/ProductImage/IMG_3454.jpeg",
      "/ProductImage/IMG_3455.jpeg",
    ],
    dimensions: "15 × 9.5 × 9.5 inches",
    material: "Durable fabric with soft lining",
    highlights: [
      "Lift-up lid for quick access",
      "Roomy compartment for clothes and linens",
      "Front label window for easy sorting",
      "Folds flat when not in use",
    ],
  },
];

export const FEATURES = [
  {
    icon: "hook",
    title: "Easy access",
    text: "Lift the lid and see what you need at a glance.",
  },
  {
    icon: "mesh",
    title: "Neat sorting",
    text: "Keep seasonal pieces and daily essentials together.",
  },
  {
    icon: "zip",
    title: "Protective lid",
    text: "A covered top helps keep stored items dust-free.",
  },
  {
    icon: "structure",
    title: "Roomy interior",
    text: "Use the generous compartment for linens, toys or clothing.",
  },
  {
    icon: "side",
    title: "Stackable shape",
    text: "Build a tidy storage system on shelves or in wardrobes.",
  },
  {
    icon: "portable",
    title: "Folds flat",
    text: "Store it away neatly when the organizer is not in use.",
  },
];

export const getById = (id) => PRODUCTS.find((p) => p.id === id);
export const getFeatured = () => PRODUCTS;
