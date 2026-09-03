export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  size: string;
  pricePerNight: string;
  image: string;
  features: string[];
}

export interface Amenity {
  name: string;
  description: string;
  iconName: string;
}

export interface Resort {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  location: string;
  elevation: string;
  startingPrice: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  accentColor: string;
  amenities: Amenity[];
  rooms: RoomType[];
  diningHighlight: {
    title: string;
    description: string;
    image: string;
    specialties: string[];
  };
  experiences: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const RESORTS_DATA: Resort[] = [
  {
    id: "mist-meadows",
    slug: "mist-meadows",
    name: "Wildvill Mist & Meadows",
    tagline: "Serene Plantation Sanctuary in the Heart of Wayanad",
    badge: "Valley & Plantation Retreat",
    location: "Meppadi, Wayanad, Kerala",
    elevation: "2,600 ft Above Sea Level",
    startingPrice: "₹8,500",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription:
      "Nestled amid 40 acres of organic coffee and cardamom estates, Mist & Meadows offers private heated jacuzzis, babbling natural streams, and secluded colonial cottages enveloped in morning mist.",
    fullDescription:
      "Awaken to the gentle melody of Malabar whistling thrushes and the aroma of freshly roasted coffee. Wildvill Mist & Meadows blends traditional Kerala architecture with bespoke luxury amenities. Each cottage opens up to emerald plantation vistas, private wooden verandas, and curated nature trails that lead to secluded natural streams within the property.",
    accentColor: "#38bdf8",
    amenities: [
      {
        name: "Private Heated Jacuzzi",
        description: "Outdoor warm jacuzzi overlooking cardamom groves",
        iconName: "Bath"
      },
      {
        name: "Coffee Estate Trails",
        description: "Guided morning estate walks & bean-to-cup coffee tasting",
        iconName: "Compass"
      },
      {
        name: "Natural Stream Access",
        description: "Private pristine freshwater stream running through the retreat",
        iconName: "Waves"
      },
      {
        name: "Farm-to-Table Malabar Dining",
        description: "Authentic culinary heritage crafted with local spices & organic herbs",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Campfire & Starry Deck",
        description: "Evening acoustic fireplace gatherings under starlit skies",
        iconName: "Flame"
      },
      {
        name: "Ayurvedic Wellness Spa",
        description: "Traditional herbal massages and holistic rejuvenation therapies",
        iconName: "Sparkles"
      }
    ],
    rooms: [
      {
        id: "plantation-jacuzzi-villa",
        name: "Plantation Jacuzzi Villa",
        tagline: "Private outdoor jacuzzi with panoramic valley mist views",
        capacity: "2-3 Guests",
        size: "780 sq.ft",
        pricePerNight: "₹11,500",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        features: ["King Bed", "Private Heated Jacuzzi", "Open Sky Shower", "Coffee Balcony", "Complimentary Breakfast"]
      },
      {
        id: "heritage-colonial-cottage",
        name: "Heritage Colonial Cottage",
        tagline: "Teakwood interiors & private veranda facing spice gardens",
        capacity: "2-4 Guests",
        size: "950 sq.ft",
        pricePerNight: "₹14,000",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        features: ["2 King Beds", "Teakwood Living Room", "Garden Patio", "Mini Bar", "Butler Service"]
      },
      {
        id: "stream-side-chalet",
        name: "Stream-Side Glass Chalet",
        tagline: "Floor-to-ceiling glass looking straight into natural waters",
        capacity: "2 Guests",
        size: "650 sq.ft",
        pricePerNight: "₹9,500",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        features: ["King Bed", "Sound of Flowing Stream", "Glass View Deck", "Espresso Station", "Hammock"]
      }
    ],
    diningHighlight: {
      title: "The Spice Pavilion",
      description:
        "An open-air dining sanctuary suspended above the coffee groves, serving slow-cooked Malabar Biryani, fresh river fish curry, and handcrafted wood-fired delights.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
      specialties: ["Authentic Malabar Fish Curry", "Appam with Vegetable Stew", "Spiced Pepper Roast", "Artisanal Pour-Over Coffee"]
    },
    experiences: [
      {
        title: "Estate Coffee Cupping & Roasting",
        description: "Participate in harvesting, drying, and brewing single-origin Robusta & Arabica with master plantation growers.",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Midnight Stargazing & Barbecue",
        description: "Private barbecue setup on your wooden deck beside cozy crackling embers under unpolluted mountain skies.",
        image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "whispering-woods",
    slug: "whispering-woods",
    name: "Wildvill Whispering Woods",
    tagline: "Cantilevered Glass Chalets & Stone Pathways in Ancient Forest Groves",
    badge: "Forest & Glasshouse Sanctuary",
    location: "Chembra Foothills, Wayanad, Kerala",
    elevation: "3,100 ft Above Sea Level",
    startingPrice: "₹9,500",
    heroImage: "/images/whispering-woods/chalet-exterior.jpg",
    gallery: [
      "/images/whispering-woods/chalet-exterior.jpg",
      "/images/whispering-woods/glass-bedroom.jpg",
      "/images/whispering-woods/stone-pathway-villa.jpg",
      "/images/whispering-woods/two-story-residence.jpg",
      "/images/whispering-woods/boulder-forest-lawn.jpg"
    ],
    shortDescription:
      "Perched amidst ancient evergreen forest canopies and granite boulders, Whispering Woods features cantilevered timber-roof glass chalets, stone-paved nature trails, and luxurious two-story private forest residences.",
    fullDescription:
      "Step into an untouched woodland paradise where nature meets modern architectural minimalism. Wildvill Whispering Woods is crafted for guests who crave deep wilderness privacy with refined comforts. Sleep surrounded by floor-to-ceiling glass looking straight into lush tropical canopies, walk along stone pathways lined with ancient boulders, and unwind on expansive private timber decks.",
    accentColor: "#10b981",
    amenities: [
      {
        name: "Elevated Glasshouse Chalet",
        description: "Cantilevered chalets with sloping timber roofs and 270° canopy vistas",
        iconName: "Mountain"
      },
      {
        name: "Stone Garden Pathways",
        description: "Winding stone walkways connecting private villas across manicured emerald lawns",
        iconName: "Compass"
      },
      {
        name: "Ancient Boulder Forest Lawn",
        description: "Secluded natural granite formations and tranquil open-air campfire zones",
        iconName: "Flame"
      },
      {
        name: "Organic Spiced Gastronomy",
        description: "Authentic Kerala claypot delicacies crafted with forest herbs and farm produce",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Canopy Birdwatching Deck",
        description: "Private upper deck vantage points for spotting rare Western Ghats bird species",
        iconName: "Eye"
      },
      {
        name: "High-Speed Forest Wi-Fi",
        description: "Seamless connectivity for workations in absolute natural seclusion",
        iconName: "Wifi"
      }
    ],
    rooms: [
      {
        id: "elevated-glass-chalet",
        name: "The Elevated Glasshouse Chalet",
        tagline: "Cantilevered glass-walled haven with sloping timber soffit and canopy balcony",
        capacity: "2 Guests",
        size: "820 sq.ft",
        pricePerNight: "₹12,000",
        image: "/images/whispering-woods/glass-bedroom.jpg",
        features: ["Floating King Bed", "Floor-to-Ceiling Glass Walls", "Private Timber Balcony", "Air Conditioning", "Rainforest Shower"]
      },
      {
        id: "estate-two-story-villa",
        name: "The Two-Story Forest Residence",
        tagline: "Spacious multi-level private residence with upper terrace and teakwood doors",
        capacity: "4-6 Guests",
        size: "1,600 sq.ft",
        pricePerNight: "₹21,000",
        image: "/images/whispering-woods/two-story-residence.jpg",
        features: ["2 Master Bedrooms", "Upper Viewing Deck", "Private Living Lounge", "Stone Garden Pathway", "Dedicated Butler"]
      },
      {
        id: "boulder-lawn-cottage",
        name: "The Boulder Garden Cottage",
        tagline: "Ground-level cozy sanctuary opening directly into stone pathways and boulders",
        capacity: "2-3 Guests",
        size: "750 sq.ft",
        pricePerNight: "₹9,500",
        image: "/images/whispering-woods/stone-pathway-villa.jpg",
        features: ["King Bed", "Private Lawn Veranda", "Granite Sit-out", "Complimentary Breakfast", "Espresso Machine"]
      }
    ],
    diningHighlight: {
      title: "The Canopy Hearth",
      description:
        "Set amid ancient trees and granite boulders, enjoy traditional Kerala bamboo-steamed delicacies, freshly roasted spices, and slow-braised mountain specialties.",
      image: "/images/whispering-woods/boulder-forest-lawn.jpg",
      specialties: ["Wayanad Bamboo Biryani", "Kanthari Spiced Fish", "Steamed Puttu & Kadala Curry", "Forest Honey Ginger Tea"]
    },
    experiences: [
      {
        title: "Ancient Boulder Trail & Forest Walk",
        description: "Guided morning exploration of natural rock shelters and wild spice groves surrounding the retreat.",
        image: "/images/whispering-woods/chalet-exterior.jpg"
      },
      {
        title: "Campfire Barbecue on the Boulder Lawn",
        description: "Private acoustic evening beside glowing embers surrounded by illuminated forest canopies.",
        image: "/images/whispering-woods/boulder-forest-lawn.jpg"
      }
    ]
  },
  {
    id: "cloud-peak",
    slug: "cloud-peak",
    name: "Wildvill Cloud Peak",
    tagline: "Dramatic Cliffside Luxury Overlooking the Western Ghats",
    badge: "Cliff & Panoramic View Retreat",
    location: "Vythiri Heights, Wayanad, Kerala",
    elevation: "3,800 ft Above Sea Level",
    startingPrice: "₹11,000",
    heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDescription:
      "Perched on a dramatic cliff edge above the cloud line, Cloud Peak features a heated infinity pool that merges with the horizon, cantilevered viewing decks, and ultra-modern glass villas.",
    fullDescription:
      "Witness jaw-dropping sunrises where rolling sea of clouds flow underneath your feet. Wildvill Cloud Peak is designed for the discerning traveler seeking seclusion, dramatic architectural vistas, and bespoke service. Enjoy your infinity pool overlooking deep Western Ghats valleys, private sunset gazebos, and gourmet high-altitude dining.",
    accentColor: "#60a5fa",
    amenities: [
      {
        name: "Cliff-Edge Infinity Pool",
        description: "Temperature-regulated infinity pool with infinite mountain horizons",
        iconName: "Eye"
      },
      {
        name: "Floating Cloud Decks",
        description: "Cantilevered glass decks suspended over 1,000-foot valley drops",
        iconName: "Mountain"
      },
      {
        name: "Sunset Gazebo & Lounge",
        description: "Curated sundowners and artisanal cocktails with panoramic views",
        iconName: "Wine"
      },
      {
        name: "Private Chef & Fine Dining",
        description: "Custom multi-course dining tailored to your palate",
        iconName: "ChefHat"
      },
      {
        name: "High-Altitude Yoga Pavillion",
        description: "Morning guided meditation and prana sessions above the clouds",
        iconName: "Sun"
      },
      {
        name: "High-Speed Optical Wi-Fi",
        description: "Uninterrupted connectivity for remote executive retreats",
        iconName: "Wifi"
      }
    ],
    rooms: [
      {
        id: "sky-infinity-suite",
        name: "Sky Infinity Suite",
        tagline: "Direct private plunge pool and 180-degree cliffside glass vistas",
        capacity: "2 Guests",
        size: "920 sq.ft",
        pricePerNight: "₹16,500",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        features: ["King Bed", "Private Plunge Pool", "Glass Cantilever Balcony", "Sunset View Bath", "Complimentary High Tea"]
      },
      {
        id: "cloud-summit-chalet",
        name: "Cloud Summit Chalet",
        tagline: "Two-story luxury residence atop the highest cliff vantage point",
        capacity: "4-6 Guests",
        size: "1,450 sq.ft",
        pricePerNight: "₹24,000",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
        features: ["2 Master Suites", "Spacious Living Room", "Private Fire Pit", "Dedicated Butler", "All-Inclusive Dining"]
      },
      {
        id: "horizon-glass-room",
        name: "Horizon Glass Room",
        tagline: "Romantic glass-walled cocoon gazing into emerald mountain ridges",
        capacity: "2 Guests",
        size: "700 sq.ft",
        pricePerNight: "₹12,500",
        image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
        features: ["King Bed", "Rainforest Shower", "Private Sun Deck", "Telescope for Stargazing", "Breakfast in Bed"]
      }
    ],
    diningHighlight: {
      title: "The Horizon Cliff Grill",
      description:
        "Dine on the edge of the world. Freshly grilled delicacies, fusion Kerala curries, and handpicked wines paired with unmatched sunset colors.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      specialties: ["Charcoal Grilled Prawns", "Slow Braised Cardamom Lamb", "Kerala Red Rice Bowls", "Flambéed Tropical Desserts"]
    },
    experiences: [
      {
        title: "Private Chembra Peak Helicopter / Trek",
        description: "Custom guided trekking to the heart-shaped lake or scenic valley vantage flights.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Sunrise Cloud Walk & Yoga",
        description: "Gentle morning walk into the mist followed by energizing breathing exercises above the fog line.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

export const WAYANAD_HIGHLIGHTS = [
  {
    title: "Chembra Peak Heart Lake",
    distance: "12 km from Stays",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description: "Famous mist-clad summit with a natural heart-shaped lake halfway to the top."
  },
  {
    title: "Banasura Sagar Dam",
    distance: "24 km from Stays",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "The largest earthen dam in India with speedboating amidst floating mountain islands."
  },
  {
    title: "Edakkal Cave Carvings",
    distance: "22 km from Stays",
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
    description: "Prehistoric rock shelters with 6,000-year-old petroglyphs and panoramic valley views."
  },
  {
    title: "Soochipara Waterfalls",
    distance: "10 km from Stays",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    description: "Spectacular three-tiered cascade surrounded by dense deciduous and evergreen forests."
  }
];

export const TESTIMONIALS = [
  {
    name: "Arjun & Priyanka Sharma",
    stayedAt: "Wildvill Mist & Meadows",
    date: "February 2026",
    quote: "The private jacuzzi in the coffee plantation was pure magic. The food was hands-down the best Malabar cuisine we've ever tasted. Wildvill sets a new benchmark for boutique luxury in Kerala!",
    rating: 5
  },
  {
    name: "Dr. Vikram & Sneha Nair",
    stayedAt: "Wildvill Cloud Peak",
    date: "January 2026",
    quote: "Standing on the cliff edge infinity pool while the clouds rolled beneath us was a dream. The service was extraordinarily attentive and discrete. We are already booking our return trip.",
    rating: 5
  },
  {
    name: "Karan & Ananya Verma",
    stayedAt: "Wildvill Whispering Woods",
    date: "March 2026",
    quote: "The elevated glass chalet among the ancient trees felt like living in a luxury treehouse with five-star service. Walking through the stone paths with mist rolling in was utterly peaceful.",
    rating: 5
  }
];
