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

export interface HouseRules {
  checkIn: string;
  checkOut: string;
  quietHours: string;
  poolTiming: string;
  additionalRules: string[];
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
  houseRules?: HouseRules;
  cancellationPolicy?: string;
}

export const RESORTS_DATA: Resort[] = [
  {
    id: "geo-greens",
    slug: "geo-greens",
    name: "Wildvill Geo Greens",
    tagline: "Premium 3-BHK Luxury Private Pool Villa in Peaceful Wayanad",
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
      "Relax in our premium 3-bedroom villa, thoughtfully designed for families and small groups of friends seeking comfort, privacy, and convenience. Located in a quiet and peaceful area, the villa offers a calm stay while being easily accessible to major tourist attractions and the local town.",
    fullDescription:
      "Relax in our premium 3-bedroom villa, thoughtfully designed for families and small groups of friends seeking comfort, privacy, and convenience. Located in a quiet and peaceful area, the villa offers a calm stay while being easily accessible to major tourist attractions and the local town.\n\nSpacious interiors, essential amenities, and a serene setting make it ideal for a comfortable, hassle-free stay. Perfect for guests who value peace, cleanliness, and quality time together.",
    accentColor: "#10b981",
    amenities: [
      {
        name: "Swimming Pool",
        description: "Exclusive private swimming pool for guest relaxation (8 AM – 10 PM)",
        iconName: "Waves"
      },
      {
        name: "Air Conditioning",
        description: "Full air conditioning installed across bedrooms and living spaces",
        iconName: "Wind"
      },
      {
        name: "Barbecue Grill",
        description: "Dedicated outdoor BBQ grill setup for evening cookouts",
        iconName: "Flame"
      },
      {
        name: "Kitchen",
        description: "Full private kitchen setup for self-catering and home cooking",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Cooking Basics",
        description: "Pots, pans, oil, salt, pepper and essential kitchen cookware provided",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Blender",
        description: "Kitchen blender available for fresh smoothies, juices and shakes",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Dining Table",
        description: "Spacious indoor dining table for family meals and gatherings",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Wifi",
        description: "Reliable high-speed wireless internet for workations and streaming",
        iconName: "Wifi"
      },
      {
        name: "Dedicated Workspace",
        description: "Comfortable desk setup and seating suited for remote working",
        iconName: "Laptop"
      },
      {
        name: "TV",
        description: "Large screen television in the living lounge for entertainment",
        iconName: "Tv"
      },
      {
        name: "Hot Water",
        description: "24/7 continuous hot water facility across all washrooms",
        iconName: "Bath"
      },
      {
        name: "Ceiling Fan",
        description: "High-efficiency cooling ceiling fans in all rooms",
        iconName: "Wind"
      },
      {
        name: "Clothing Storage",
        description: "Spacious wardrobes, closets and luggage storage in bedrooms",
        iconName: "Sparkles"
      },
      {
        name: "Crib",
        description: "Comfortable infant crib available for families traveling with babies",
        iconName: "Baby"
      },
      {
        name: "Fire Pit",
        description: "Open-air campfire pit for cozy starlit evenings on the lawn",
        iconName: "Flame"
      },
      {
        name: "Hammock",
        description: "Outdoor relaxation hammock set under tranquil garden shade",
        iconName: "Sun"
      },
      {
        name: "Free Parking on Premises",
        description: "Dedicated complimentary on-site private parking for multiple vehicles",
        iconName: "Car"
      }
    ],
    houseRules: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      quietHours: "10:00 PM to 7:00 AM",
      poolTiming: "8:00 AM to 10:00 PM",
      additionalRules: [
        "Alcohol is strictly not allowed inside the swimming pool",
        "Smoking is strictly prohibited inside the villa bedrooms",
        "Please keep the premises clean and respect the serene neighborhood"
      ]
    },
    cancellationPolicy:
      "100% cancellation fee within 3 days of booking date. Free cancellation is permitted up to 3 days prior to your check-in date.",
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
    name: "Wildvill Crocolake Hut Resort",
    tagline: "Exclusive 4-Bedroom Private Pool Villa with Lake Views in 10-Acre Plantation",
    badge: "Lakeview 4-BHK Pool Villa",
    location: "Wayanad, Kerala",
    elevation: "2,800 ft Above Sea Level",
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
      "Escape to an exclusive 4-bedroom private pool villa nestled within a serene 10-acre plantation in Wayanad. Wake up to breathtaking lake views from your private balcony, unwind in spacious interiors, and enjoy complete privacy surrounded by lush greenery. Perfect for families, friends, and celebrations, this is where luxury meets nature for an unforgettable getaway.",
    fullDescription:
      "Escape to an exclusive 4-bedroom private pool villa nestled within a serene 10-acre plantation in Wayanad. Wake up to breathtaking lake views from your private balcony, unwind in spacious interiors, and enjoy complete privacy surrounded by lush greenery.\n\nPerfect for families, friends, and celebrations, this is where luxury meets nature for an unforgettable getaway.",
    accentColor: "#10b981",
    amenities: [
      {
        name: "Swimming Pool",
        description: "Exclusive private swimming pool with plantation & lake views (8 AM – 10 PM)",
        iconName: "Waves"
      },
      {
        name: "Air Conditioning",
        description: "Full air conditioning installed across bedrooms and living spaces",
        iconName: "Wind"
      },
      {
        name: "Barbecue Grill",
        description: "Outdoor BBQ grill setup for evening cookouts by the lake",
        iconName: "Flame"
      },
      {
        name: "Kitchen",
        description: "Fully equipped private kitchen with refrigerator and appliances",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Cooking Basics",
        description: "Pots, pans, oil, salt, pepper and essential kitchen cookware provided",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Blender",
        description: "Kitchen blender available for fresh smoothies, juices and shakes",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Dining Table",
        description: "Spacious indoor dining table for family meals and group gatherings",
        iconName: "UtensilsCrossed"
      },
      {
        name: "Wifi",
        description: "Reliable high-speed wireless internet throughout the estate",
        iconName: "Wifi"
      },
      {
        name: "Dedicated Workspace",
        description: "Comfortable desk setup and seating suited for remote work",
        iconName: "Laptop"
      },
      {
        name: "TV",
        description: "Large screen television in the living lounge for entertainment",
        iconName: "Tv"
      },
      {
        name: "Hot Water",
        description: "24/7 continuous hot water facility across all washrooms",
        iconName: "Bath"
      },
      {
        name: "Ceiling Fan",
        description: "High-efficiency cooling ceiling fans in all bedrooms and halls",
        iconName: "Wind"
      },
      {
        name: "Clothing Storage",
        description: "Spacious wardrobes, closets and luggage storage in all bedrooms",
        iconName: "Sparkles"
      },
      {
        name: "Crib",
        description: "Comfortable infant crib available upon request for families with babies",
        iconName: "Baby"
      },
      {
        name: "Fire Pit",
        description: "Open-air campfire pit for cozy starlit evenings on the lawn",
        iconName: "Flame"
      },
      {
        name: "Hammock",
        description: "Outdoor relaxation hammock set under tranquil plantation shade",
        iconName: "Sun"
      },
      {
        name: "Kids Play Area",
        description: "Dedicated outdoor kids play area with swings and open green lawn",
        iconName: "Gamepad2"
      },
      {
        name: "Free Parking on Premises",
        description: "Dedicated complimentary on-site private parking for multiple vehicles",
        iconName: "Car"
      }
    ],
    rooms: [
      {
        id: "elevated-glass-chalet",
        name: "Lakeview Master Suite",
        tagline: "Spacious master suite with panoramic lake balcony and luxury ensuite",
        capacity: "2-3 Guests",
        size: "650 sq.ft",
        pricePerNight: "₹9,500",
        image: "/images/whispering-woods/glass-bedroom.jpg",
        features: ["King Bed", "Private Lake Balcony", "Air Conditioning", "Hot Water Shower", "Walk-in Wardrobe"]
      },
      {
        id: "estate-two-story-villa",
        name: "Plantation Family Suite",
        tagline: "Generous family room overlooking the green coffee groves and pool",
        capacity: "4 Guests",
        size: "800 sq.ft",
        pricePerNight: "₹9,500",
        image: "/images/whispering-woods/two-story-residence.jpg",
        features: ["2 Queen Beds", "Garden Sit-out", "Private Living Area", "Tea Station", "Attached Washroom"]
      }
    ],
    diningHighlight: {
      title: "Lakeview Dining & Plantation Hearth",
      description:
        "Enjoy home-cooked Kerala specialties, live barbecue on the lawn, and breakfast on the private veranda overlooking the mist over the lake.",
      image: "/images/whispering-woods/boulder-forest-lawn.jpg",
      specialties: ["Traditional Wayanad Sadhya", "Lake Fish Fry & Curry", "Tandoori Barbecue Evenings", "Fresh Filter Coffee & Malabar Snacks"]
    },
    experiences: [
      {
        title: "Private Lake Walks & Plantation Trails",
        description: "Scenic morning walks along the lake shore and guided exploration of the 10-acre estate.",
        image: "/images/whispering-woods/chalet-exterior.jpg"
      },
      {
        title: "Campfire Barbecue by the Lake",
        description: "Private acoustic evening with glowing embers under starlit Wayanad skies.",
        image: "/images/whispering-woods/boulder-forest-lawn.jpg"
      }
    ],
    houseRules: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      quietHours: "10:00 PM to 7:00 AM",
      poolTiming: "8:00 AM to 10:00 PM",
      additionalRules: [
        "Alcohol is strictly not allowed inside the swimming pool",
        "Smoking is strictly prohibited inside the villa bedrooms",
        "Please respect the tranquil plantation environment and quiet hours"
      ]
    },
    cancellationPolicy:
      "100% cancellation fee within 3 days of booking date. Free cancellation is permitted up to 3 days prior to your check-in date."
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

