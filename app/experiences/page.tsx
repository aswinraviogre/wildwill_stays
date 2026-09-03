"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  MapPin,
  Clock,
  Calendar,
  Mountain,
  UtensilsCrossed,
  Flame,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface ExperienceItem {
  id: string;
  category: "all" | "plantation" | "cliffside" | "culinary" | "landmarks";
  title: string;
  tagline: string;
  duration: string;
  bestTime: string;
  location: string;
  image: string;
  description: string;
  included: string[];
}

const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "chembra-heart-lake",
    category: "landmarks",
    title: "Chembra Peak & Heart-Shaped Lake Trek",
    tagline: "Wayanad's most iconic alpine summit and mist-shrouded natural heart lake.",
    duration: "4 - 5 Hours",
    bestTime: "Early Morning (6:30 AM)",
    location: "Meppadi (12 km from Stays)",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Trek through lush green tea plantations and cloud-kissed grasslands to reach the legendary natural heart-shaped lake, Hridayathadakam. Guided by our experienced certified local naturalist.",
    included: ["Forest permit assistance", "Naturalist guide", "Hydration pack & artisanal energy snacks"]
  },
  {
    id: "boulder-forest-trail",
    category: "plantation",
    title: "Ancient Boulder Trail & Canopy Walk",
    tagline: "Walk amidst prehistoric granite monoliths and towering evergreen tree canopies.",
    duration: "2 Hours",
    bestTime: "Morning & Late Afternoon",
    location: "Wildvill Whispering Woods",
    image: "/images/whispering-woods/boulder-forest-lawn.jpg",
    description:
      "Explore the private woodland grounds of Whispering Woods. Traverse stone walkways between ancient moss-covered boulders, spot native bird species, and learn about indigenous spice varieties.",
    included: ["Resident naturalist escort", "Binoculars for birdwatching", "Freshly brewed herbal tea"]
  },
  {
    id: "estate-cupping",
    category: "plantation",
    title: "Bean-to-Cup Coffee Roasting & Cupping",
    tagline: "Single-origin Robusta & Arabica harvesting and brewing mastery.",
    duration: "1.5 Hours",
    bestTime: "10:00 AM & 4:00 PM",
    location: "Wildvill Mist & Meadows",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Discover the heritage of Wayanad coffee cultivation. Walk the berry rows, handpick beans during harvest season, roast over open fire, and participate in a guided coffee cupping masterclass.",
    included: ["Coffee masterclass", "Tasting 4 artisanal roasts", "Fresh beans souvenir pouch"]
  },
  {
    id: "cloud-yoga",
    category: "cliffside",
    title: "Sunrise Cloud Walk & Prana Yoga",
    tagline: "High-altitude breathing and meditation suspended above the Western Ghats fog.",
    duration: "1 Hour",
    bestTime: "6:15 AM (Dawn)",
    location: "Wildvill Cloud Peak",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    description:
      "Awaken your senses above the clouds on the cantilevered glass viewing deck at Cloud Peak. Guided pranayama and gentle yoga flows accompanied by panoramic morning valley sunrises.",
    included: ["Yoga mats & props", "Certified yoga instructor", "Warm detox turmeric & ginger elixir"]
  },
  {
    id: "private-deck-barbecue",
    category: "culinary",
    title: "Private Starlit Fireplace & Deck Barbecue",
    tagline: "Candlelit multi-course grill feast prepared beside crackling embers on your private veranda.",
    duration: "2 - 3 Hours",
    bestTime: "Evening (7:30 PM)",
    location: "Available at All 3 Properties",
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
    description:
      "A tailored private culinary celebration. Fresh mountain river fish, marinated meats or spiced paneer skewers grilled live by your personal chef beside your outdoor campfire.",
    included: ["Private chef setup", "Acoustic music playlist", "Customized 4-course barbecue dinner"]
  },
  {
    id: "edakkal-caves",
    category: "landmarks",
    title: "Edakkal Caves Prehistoric Exploration",
    tagline: "6,000-year-old Neolithic rock petroglyphs overlooking the Wayanad plateau.",
    duration: "3 Hours",
    bestTime: "Morning (9:00 AM)",
    location: "Ambalavayal (22 km from Stays)",
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Climb the Ambukuthi Hills to explore the split-rock caverns of Edakkal containing ancient stone age rock carvings, pictograms, and panoramic vista points of three states.",
    included: ["Chauffeur transfers", "Priority entry coordination", "Local history narrative"]
  }
];

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<string | undefined>(undefined);

  const filtered =
    activeCategory === "all"
      ? EXPERIENCES_DATA
      : EXPERIENCES_DATA.filter((item) => item.category === activeCategory);

  const handleBookExperience = (title: string) => {
    setSelectedExperience(`Experience: ${title}`);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-navy-950 selection:text-white">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-navy-950 text-xs font-semibold uppercase tracking-[0.25em] shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Wayanad Immersion</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight">
            Unforgettable Encounters with Nature
          </h1>

          <p className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From trekking the heart-shaped summit of Chembra to private bean-to-cup coffee cuppings and starlit estate barbecues, our concierges craft moments that stay with you forever.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {[
              { id: "all", label: "All Experiences" },
              { id: "plantation", label: "Plantation & Forests" },
              { id: "cliffside", label: "Cliffside & Wellness" },
              { id: "culinary", label: "Culinary & Stargazing" },
              { id: "landmarks", label: "Wayanad Icons" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === tab.id
                    ? "bg-navy-950 text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:text-navy-950 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md flex flex-col justify-between group hover:shadow-2xl hover:border-navy-950 transition-all"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-sky-300 text-[11px] font-semibold border border-white/10">
                    {item.location}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-navy-950" />
                      <span>{item.duration}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-navy-950" />
                      <span>{item.bestTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-navy-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Included In Excursion:
                    </div>
                    {item.included.map((inc, iIdx) => (
                      <div key={iIdx} className="text-xs text-slate-700 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy-950 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleBookExperience(item.title)}
                  className="w-full py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Inquire For This Excursion
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Concierge Custom Itinerary Banner in Navy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <div className="bg-navy-950 text-white p-8 sm:p-12 rounded-3xl border border-navy-900 shadow-2xl text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-sky-400 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Looking for a Tailored Wayanad Itinerary?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Our guest experience team can arrange private helicopter transfers, waterfall photo shoots, romantic candlelit setup, and customized wildlife safaris across Wayanad.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/919526459920?text=Hello%20Wildvill%20Concierge!%20I%20would%20like%20to%20plan%20a%20tailored%20Wayanad%20itinerary."
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all hover:scale-105 shadow-xl"
            >
              Chat on WhatsApp (+91 95264 59920)
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Concierge Widget */}
      <FloatingWhatsApp />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultResortSlug={selectedExperience ? "mist-meadows" : undefined}
      />
    </main>
  );
}
