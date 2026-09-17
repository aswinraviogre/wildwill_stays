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
    id: "geo-greens",
    slug: "geo-greens",
    name: "Wildvill Geo Greens",
    tagline: "Private 3-BHK Luxury Pool Villa with Indoor Swing Lounge & Lush Lawn",
    badge: "Private Pool Villa",
    location: "Wayanad, Kerala",
    elevation: "2,400 ft Above Sea Level",
    startingPrice: "₹8,500",
    heroImage: "/images/geo-greens/villa-exterior-night.jpg",
    gallery: [
      "/images/geo-greens/villa-exterior-night.jpg",
      "/images/geo-greens/living-room-lounge.jpg",
      "/images/geo-greens/indoor-swing-recreation.jpg",
      "/images/geo-greens/tv-lounge-interior.jpg",
      "/images/geo-greens/modern-bathroom.jpg"
    ],
    shortDescription:
      "A serene 3-bedroom, 3-washroom private sanctuary featuring an exclusive swimming pool, fully equipped kitchen, air conditioning, high-speed Wi-Fi, 24/7 hot water, indoor recreation swing, and free parking.",
    fullDescription:
      "Experience blissful seclusion at Wildvill Geo Greens, a private 3-bedroom, 3-washroom luxury retreat crafted for families and groups. Unwind in the private swimming pool, relax in the spacious living hall with plush sectional seating, enjoy casual games on the traditional indoor wooden swing and carrom board, and savor homemade feasts in the fully equipped kitchen. With continuous hot water, high-speed Wi-Fi, full air conditioning, and dedicated private parking, Geo Greens is your ultimate tranquil haven in Wayanad.",
    accentColor: "#10b981",
    amenities: [
      {
        name: "Swimming Pool",
        description: "Private outdoor swimming pool for exclusive guest relaxation",
        iconName: "Waves"
      },
      {
        name: "Equipped Kitchen",
        description: "Full private kitchen setup for home cooking and dining convenience",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Air Conditioned",
        description: "Air conditioning installed across all bedrooms and living spaces",
        iconName: "Wind"
      },
      {
        name: "High-Speed Wi-Fi",
        description: "Reliable high-speed wireless internet for workations and streaming",
        iconName: "Wifi"
      },
      {
        name: "24/7 Hot Water",
        description: "Continuous hot water showers across all 3 washrooms",
        iconName: "Bath"
      },
      {
        name: "Free On-Site Parking",
        description: "Dedicated complimentary private vehicle parking on villa grounds",
        iconName: "Car"
      },
      {
        name: "Indoor Swing & Games",
        description: "Traditional ceiling swing and carrom board for leisurely family moments",
        iconName: "Compass"
      }
    ],
    rooms: [
      {
        id: "master-pool-bedroom",
        name: "Master Pool-View Bedroom",
        tagline: "Air-conditioned master suite with private attached washroom & hot water",
        capacity: "2-3 Guests",
        size: "420 sq.ft",
        pricePerNight: "₹8,500",
        image: "/images/geo-greens/villa-exterior-night.jpg",
        features: ["King Size Bed", "Attached Modern Washroom", "24/7 Hot Water Shower", "Air Conditioning", "Lawn & Pool View"]
      },
      {
        id: "deluxe-family-bedroom",
        name: "Deluxe Family Bedroom",
        tagline: "Spacious air-conditioned room with private attached washroom",
        capacity: "2-3 Guests",
        size: "380 sq.ft",
        pricePerNight: "₹8,500",
        image: "/images/geo-greens/living-room-lounge.jpg",
        features: ["King Size Bed", "Attached Washroom", "Hot Water Facility", "Air Conditioning", "Wardrobe & Vanity"]
      },
      {
        id: "comfort-suite-bedroom",
        name: "Comfort Bedroom Suite",
        tagline: "Cozy bedroom with dedicated modern washroom and AC",
        capacity: "2-3 Guests",
        size: "360 sq.ft",
        pricePerNight: "₹8,500",
        image: "/images/geo-greens/indoor-swing-recreation.jpg",
        features: ["Queen Bed", "Dedicated Modern Washroom", "Hot Water Shower", "Air Conditioning", "Quiet Garden View"]
      }
    ],
    diningHighlight: {
      title: "Private Villa Kitchen & Dining",
      description:
        "Enjoy total culinary freedom with a fully equipped kitchen featuring cookware, refrigeration, and a spacious dining hall overlooking the open veranda.",
      image: "/images/geo-greens/living-room-lounge.jpg",
      specialties: ["Self-Catering Cooking Facilities", "Spacious Family Dining Hall", "Barbecue Setup Upon Request", "Local Wayanad Chef On Demand"]
    },
    experiences: [
      {
        title: "Private Poolside Relaxation",
        description: "Take refreshing dips under the open sky and unwind on the grassy lawn surrounding the private pool.",
        image: "/images/geo-greens/villa-exterior-night.jpg"
      },
      {
        title: "Indoor Recreation & Swing Evenings",
        description: "Bond over classic carrom board tournaments and relax on the suspended traditional wooden swing.",
        image: "/images/geo-greens/indoor-swing-recreation.jpg"
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
    stayedAt: "Wildvill Geo Greens",
    date: "February 2026",
    quote: "Geo Greens was unbelievable! Having the entire 3-bedroom villa with private swimming pool, equipped kitchen, and AC made our family holiday in Wayanad pure relaxation. The indoor swing was a huge favorite!",
    rating: 5
  },
  {
    name: "Dr. Vikram & Sneha Nair",
    stayedAt: "Wildvill Whispering Woods",
    date: "January 2026",
    quote: "Staying in the cantilevered glass chalet among the ancient trees and granite boulders was pure serenity. The attentive private butler service and starlit barbecue made our anniversary extraordinary.",
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

