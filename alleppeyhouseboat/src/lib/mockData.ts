export interface SiteSettings {
  whatsappNumber: string;
  phoneNumber: string;
  email: string;
  address: string;
  googleRating: number;
  reviewCount: number;
  yearsRunning: number;
  heroHeadline: string;
  heroSubheadline: string;
  heroVideoUrl?: string;
  heroVideoFileUrl?: string;
}

export interface Package {
  title: string;
  slug: string;
  category: string;
  price: number;
  rating: number;
  shortDescription: string;
  description: string;
  images: string[];
  inclusions: string[];
}

export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  date: string;
  avatarSeed: string;
}

export interface GalleryImage {
  imageUrl: string;
  caption: string;
  category: string;
}

export interface FAQ {
  question: string;
  answer: string;
  order: number;
}

export const mockSiteSettings: SiteSettings = {
  whatsappNumber: "+91 73564 62150",
  phoneNumber: "+91 73564 62150",
  email: "aromalbabu9847@gmail.com",
  address: "Alleppy Houseboat, Near Finishing Point, Punnamada Lake Road, Alappuzha, Kerala, 688006",
  googleRating: 4.9,
  reviewCount: 1420,
  yearsRunning: 12,
  heroHeadline: "Experience the Magic of Alleppey Backwaters",
  heroSubheadline: "Book premium private houseboats, traditional shikara rides, and kayaking tours with verified captains and 100% price transparency.",
  heroVideoUrl: "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4",
};

export const mockPackages: Package[] = [
  {
    title: "1-Bedroom Deluxe Houseboat",
    slug: "1-bedroom-deluxe-houseboat",
    category: "houseboat-deluxe",
    price: 8500,
    rating: 4.8,
    shortDescription: "Ideal for couples seeking a standard, comfortable cruise through Alleppey's scenic canals.",
    description: "Our Deluxe Houseboats are perfect for budget-friendly backwater trips. They offer complete privacy with fully furnished bedrooms, attached bathrooms, a small living/dining area, and delicious traditional Kerala meals prepared onboard by your private chef. Fully operational standard AC runs from 9:00 PM to 6:00 AM.",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200",
      "https://images.unsplash.com/photo-1593693411515-c202e974eb8f?q=80&w=1200"
    ],
    inclusions: [
      "Welcome Drink & Traditional Lunch",
      "Evening Tea with Snacks",
      "Traditional Dinner & Breakfast",
      "21 Hours Cruise (Day cruise + overnight stay)",
      "Standard Air Conditioning (9 PM to 6 AM)",
      "Dedicated Captain and Onboard Chef"
    ],
  },
  {
    title: "2-Bedroom Premium Houseboat",
    slug: "2-bedroom-premium-houseboat",
    category: "houseboat-premium",
    price: 13500,
    rating: 4.9,
    shortDescription: "Superior comfort and full-day air conditioning for families or small groups.",
    description: "Enjoy a superior backwater journey on our Premium Houseboats. Complete with refined wooden paneling, a spacious glass-enclosed upper deck, and premium furnishing. Traditional meals are served with customizable menus. Premium AC runs unlimited during the cruise.",
    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200"
    ],
    inclusions: [
      "Premium Welcome Drink & Special Seafood Lunch",
      "Premium snacks and local sweets",
      "Candlelit Dinner & Multi-cuisine Breakfast",
      "Full-time Air Conditioning (24 hours)",
      "High-speed Wi-Fi onboard",
      "3-person professional crew (Captain, Guide, Chef)"
    ],
  },
  {
    title: "Royal Luxury Glass Houseboat",
    slug: "royal-luxury-glass-houseboat",
    category: "houseboat-luxury",
    price: 22000,
    rating: 4.9,
    shortDescription: "Ultra-luxury glass houseboat with dynamic views, modern interiors, and high-end services.",
    description: "Redefining luxury on the water. These modern glass-walled houseboats offer panoramic, unobstructed views of the backwaters from the comfort of an air-conditioned luxury lounge. Experience royal hospitality, customized gourmet culinary experiences, plush queen beds, and top-tier amenities.",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200"
    ],
    inclusions: [
      "Exquisite Welcome Drink & Custom Seafood Banquet",
      "Premium High Tea with multiple varieties",
      "Luxury Candlelit Dinner with Live Cooking Demo",
      "Fully Glass-Enclosed Air Conditioned Living Lounge",
      "Premium Toiletries & Linens",
      "Kayak attached for private exploring"
    ],
  },
  {
    title: "Private Day-Cruise Houseboat",
    slug: "private-day-cruise-houseboat",
    category: "houseboat-private",
    price: 7500,
    rating: 4.7,
    shortDescription: "Private full-day backwater tour ideal for cruise lovers not looking for an overnight stay.",
    description: "Our Private Day-Cruise is specifically designed for guests with tight schedules. Cruise from 10:30 AM to 5:00 PM. Experience the village life, broad lakes, and winding canals of Alappuzha. Lunch and evening tea are freshly cooked and served onboard.",
    images: [
      "https://images.unsplash.com/photo-1593693411515-c202e974eb8f?q=80&w=1200",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200"
    ],
    inclusions: [
      "Exclusive Private Boat (no sharing)",
      "Traditional Kerala Toddy Shop style Lunch",
      "Evening Tea, Coffee, and Banana Fritters",
      "6-Hour continuous backwater cruise",
      "Dedicated Crew members"
    ],
  },
  {
    title: "Sharing Cabin Houseboat Experience",
    slug: "sharing-cabin-houseboat-experience",
    category: "houseboat-sharing",
    price: 4500,
    rating: 4.6,
    shortDescription: "Rent a private bedroom on a large shared houseboat. Perfect for solo travelers and couples.",
    description: "Experience the magic of Alleppey houseboats at a fraction of the cost. You get a fully private AC bedroom with attached washroom, while sharing the lounge and dining areas with other like-minded travelers. All meals are included.",
    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200"
    ],
    inclusions: [
      "Private Air-Conditioned Cabin",
      "En-suite attached bathroom",
      "All meals included (Buffet style lunch, dinner, breakfast)",
      "Standard 21-hour cruise schedule",
      "Great opportunity to meet other travelers"
    ],
  },
  {
    title: "Traditional Shikara Boat Ride",
    slug: "traditional-shikara-boat-ride",
    category: "shikara",
    price: 1500,
    rating: 4.8,
    shortDescription: "Hourly rental of open-air traditional wooden boats. Excellent for narrow canals.",
    description: "Shikara boats are small, wooden boats with comfortable seating and a roof overhead. Unlike houseboats, they can navigate the narrowest backwater canals, getting you close to daily village activities, rice paddy fields, and local temples. Ideal for 2 to 8 guests.",
    images: [
      "https://images.unsplash.com/photo-1593693411515-c202e974eb8f?q=80&w=1200",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200"
    ],
    inclusions: [
      "Hourly pricing (minimum 3 hours recommended)",
      "Access to narrow, quiet canals",
      "Cushioned reclining seats",
      "Life jackets provided",
      "Experienced local captain/guide"
    ],
  },
  {
    title: "Guided Kayaking Backwater Tour",
    slug: "guided-kayaking-backwater-tour",
    category: "kayaking",
    price: 900,
    rating: 4.9,
    shortDescription: "Sunrise or sunset kayaking adventure through small village channels.",
    description: "Paddle through the narrow channels of Alleppey on our guided kayaking tour. Choose between a stunning sunrise or peaceful sunset tour. Get an eco-friendly, close-up look at local life, duck farming, and coconut tree-lined shores.",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200"
    ],
    inclusions: [
      "High-quality kayak and lightweight paddle",
      "Certified local kayak guide",
      "Traditional Kerala breakfast or tea/snacks at a village home",
      "Waterproof dry bags for phones/cameras",
      "Complete safety briefing and life jackets"
    ],
  },
  {
    title: "High-Speed Boat Ride",
    slug: "high-speed-boat-ride",
    category: "speedboat",
    price: 3000,
    rating: 4.7,
    shortDescription: "Thrilling speedboat cruise across Punnamada Lake and open waters.",
    description: "Get your adrenaline pumping with a high-speed tour across Alappuzha's vast lakes. Perfect for adventure enthusiasts who want to cover larger distances quickly. Features a modern speedboat with powerful engines and a skilled pilot.",
    images: [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200"
    ],
    inclusions: [
      "Fully private high-speed motorboat",
      "Safety gear & life vests",
      "Experienced pilot",
      "Thrilling high-speed turns & sprints",
      "Great photo opportunities"
    ],
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    name: "Rohan Sharma",
    quote: "Absolutely magical! The Premium Houseboat was clean, spacious, and the chef served the best Karimeen Pollichathu (pearl spot fish) I've ever had. Booking through WhatsApp was seamless.",
    rating: 5,
    date: "1 week ago",
    avatarSeed: "Rohan",
  },
  {
    name: "Anjali Nair",
    quote: "We took the sunrise Kayaking tour and it was the highlight of our Kerala trip. Watching the village wake up while paddling through the mist is an experience we'll never forget.",
    rating: 5,
    date: "2 weeks ago",
    avatarSeed: "Anjali",
  },
  {
    name: "David Miller",
    quote: "Extremely professional service. No hidden charges, boat was exactly as shown in photos. The staff was courteous and kept us safe. Highly recommended for families.",
    rating: 5,
    date: "1 month ago",
    avatarSeed: "David",
  },
  {
    name: "Priyanka Patel",
    quote: "The glass houseboat is beautiful. Waking up to the sunrise over Punnamada Lake directly from the bed was amazing. 5 stars for the service!",
    rating: 5,
    date: "3 weeks ago",
    avatarSeed: "Priyanka",
  }
];

export const mockGallery: GalleryImage[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600",
    caption: "Traditional houseboat cruising through the palm-fringed backwaters",
    category: "houseboat",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600",
    caption: "A happy family enjoying the upper deck views during sunset",
    category: "guests",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600",
    caption: "Eco-friendly kayaking tour inside narrow residential village canals",
    category: "activities",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1593693411515-c202e974eb8f?q=80&w=600",
    caption: "Sunset casting golden reflections on the waters of Punnamada Lake",
    category: "scenery",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600",
    caption: "Premium houseboat moored near the shore for an overnight stay",
    category: "houseboat",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
    caption: "Couple enjoying the scenic views from their private glass cabin",
    category: "guests",
  }
];

export const mockFAQs: FAQ[] = [
  {
    question: "What is the difference between Private, Luxury, Premium, and Deluxe houseboats?",
    answer: "Deluxe houseboats are standard budget-friendly boats where air conditioning runs only at night (usually 9:00 PM to 6:00 AM). Premium boats offer better wooden interiors, upper deck options, and full-day air conditioning. Luxury houseboats are ultra-premium with glass rooms, luxury furniture, and top-tier menus. Sharing houseboats allow you to rent a single cabin while sharing common spaces, whereas Private houseboats are fully chartered for your group only.",
    order: 1,
  },
  {
    question: "What is the typical booking process?",
    answer: "Booking is very simple! You can select a package, click 'Book Now', which opens a WhatsApp message with the package details. We confirm boat availability, finalize any custom meal preferences, and request a 30% advance payment to lock in the booking. The remaining balance is paid upon check-in at the jetty.",
    order: 2,
  },
  {
    question: "What meals are provided on the houseboat?",
    answer: "All overnight houseboat stays include freshly prepared traditional Kerala meals onboard: Welcome drink, Lunch (rice, local vegetable dishes, pearl spot fish fry), Evening tea/coffee with banana fritters, Dinner (chicken curry, chappathi, rice), and Breakfast (Idli/Dosa/Puttu with curry). Custom vegetarian, vegan, or kids' menus are available upon prior request.",
    order: 3,
  },
  {
    question: "When is the best time of year to visit Alleppey?",
    answer: "The best time to visit Alappuzha is from September to March when the weather is pleasant and cool. The monsoon season (June to August) is also beautiful for seeing lush greenery, though rain can occasionally pause active cruises. April and May are warmer but offer great off-season discounts.",
    order: 4,
  },
  {
    question: "Is it safe for children and senior citizens?",
    answer: "Yes, houseboats are extremely safe. All boats are verified, certified by the Port Department, and equipped with standard life jackets, fire extinguishers, and first-aid kits. A professional, experienced 3-member crew remains onboard at all times to assist you.",
    order: 5,
  },
  {
    question: "What are the standard check-in and check-out times?",
    answer: "For overnight houseboat cruises, check-in is at 12:00 PM (noon) and check-out is at 9:00 AM the following morning. For day cruises, the timings are typically from 10:30 AM to 5:00 PM.",
    order: 6,
  },
  {
    question: "Where is the boarding jetty located?",
    answer: "Our main boarding point is near Finishing Point, Punnamada Lake, Alappuzha. We will send you the exact Google Map location and coordinates via WhatsApp along with your boarding pass.",
    order: 7,
  },
  {
    question: "Can I book a boat on the same day?",
    answer: "Same-day bookings are possible before 11:00 AM, subject to availability. However, we highly recommend booking at least 1-2 weeks in advance during weekends and peak season to ensure you get a verified boat in your preferred category.",
    order: 8,
  }
];
