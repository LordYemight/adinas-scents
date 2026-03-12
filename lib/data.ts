import { 
  ShieldCheck, 
  Clock, 
  Truck,
  Users,
  Star
} from 'lucide-react';

export interface Product {
  name: string;
  price: string;
  description: string;
  image?: string;
}

export const DATA = {
  brand: {
    name: "Adinas Scents",
    tagline: "Fragrances That Make You Stand-Out",
    description: "Curating the finest selection of premium, long-lasting unboxed perfumes, meticulously sourced for the discerning individual who values quality and exclusivity without the designer markup. Experience true olfactory luxury in the heart of Abuja."
  },
  images: {
    hero: "/images/hero.png",
    about: "/images/about.png",
    products: [
      "/images/oud_imperial.png",
      "/images/coastal_breeze.png",
      "/images/velvet_rose.png",
      "/images/midnight_amber.png"
    ]
  },
  products: [
    { 
      name: "Oud Imperial (Unboxed)", 
      price: "₦35,000", 
      description: "A deep, smoky oud blended with exotic spices. Intense and sophisticated for evening wear.",
      image: "/images/oud_imperial.png"
    },
    { 
      name: "Coastal Breeze (Unboxed)", 
      price: "₦22,500", 
      description: "Crisp, clean aquatic notes with hints of sea salt and bergamot. Perfect for daytime elegance.",
      image: "/images/coastal_breeze.png"
    },
    { 
      name: "Velvet Rose Attar", 
      price: "₦48,000", 
      description: "Pure, concentrated rose oil extract. Rich, romantic, and incredibly long-lasting.",
      image: "/images/velvet_rose.png"
    },
    { 
      name: "Midnight Amber EDP (Tester)", 
      price: "₦29,900", 
      description: "Warm amber base layered with vanilla and sandalwood. A truly seductive signature scent.",
      image: "/images/midnight_amber.png"
    },
    { 
      name: "Sandalwood Silk", 
      price: "₦38,500", 
      description: "A smooth, creamy sandalwood with hints of white musk and cardamom. Effortlessly chic."
    },
    { 
      name: "Golden Musk Exclusive", 
      price: "₦42,000", 
      description: "Our signature golden musk. A radiant, skin-like fragrance that lingers for 24+ hours."
    },
    { 
      name: "Citrus Zenith (Tester)", 
      price: "₦21,000", 
      description: "A burst of Italian lemon and grapefruit. Energizing and clean for the tropical heat."
    },
    { 
      name: "Dark Patchouli", 
      price: "₦31,500", 
      description: "Earthy, dark patchouli with a touch of sweetness. Bold and unapologetically mysterious."
    }
  ] as Product[],
  features: [
    { title: "Unboxed Authenticity", description: "Guaranteed original fragrance oils, decanted and presented in high-quality, minimalist packaging.", icon: ShieldCheck },
    { title: "Longevity Guaranteed", description: "Our collection is curated for high concentration and superior staying power.", icon: Clock },
    { title: "Nationwide Delivery", description: "Fast, secure delivery across Abuja and swift nationwide shipping to all states in Nigeria.", icon: Truck }
  ],
  stats: [
    { number: "1,600+", label: "Boutique Followers", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Unique Scents", icon: ShieldCheck }
  ],
  testimonials: [
    { name: "Chioma N.", role: "Client", text: "The longevity of the Oud Imperial is unbelievable. My new office scent is officially here." },
    { name: "Tunde A.", role: "Customer", text: "Fantastic value for money. The Coastal Breeze is fresh, and the ordering process was seamless." }
  ]
};
