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
  category: string; // houseboat-deluxe, houseboat-premium, houseboat-luxury, houseboat-sharing, houseboat-private, shikara, kayaking, speedboat, village-tour, fishing, sunset-cruise, package-day, package-overnight, package-honeymoon, package-family, package-couple, package-group, package-premium
  price: number;
  rating: number;
  shortDescription: string;
  description: string;
  images: string[];
  inclusions: string[];
  // Detailed attributes
  bedrooms?: number;
  capacity?: string;
  duration?: string;
  foodIncluded?: string;
  checkIn?: string;
  checkOut?: string;
  facilities?: string[];
  cancellationPolicy?: string;
  location?: string;
  dayCruisePrice?: number;
  overnightPrice?: number;
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
  heroVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-kerala-backwaters-india-42289-large.mp4",
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
    bedrooms: 1,
    capacity: "2 Adults (Up to 1 Child)",
    duration: "21 Hours (Overnight)",
    foodIncluded: "Full Board (Lunch, Dinner, Breakfast & Snacks)",
    checkIn: "12:00 PM",
    checkOut: "09:00 AM",
    facilities: ["Attached Bathroom", "LCD TV", "Dining Area", "In-boat Kitchen", "Music System", "Life Jackets"],
    cancellationPolicy: "Free cancellation up to 7 days before check-in. 50% refund between 7 to 3 days. No refund within 72 hours.",
    location: "Punnamada Jetty, Alleppey"
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
    bedrooms: 2,
    capacity: "4 - 6 Guests",
    duration: "21 Hours (Overnight)",
    foodIncluded: "Custom Premium Full Board (Seafood Specials included)",
    checkIn: "12:00 PM",
    checkOut: "09:00 AM",
    facilities: ["Glass Lounge", "High-speed Wi-Fi", "Premium Linen", "Upper Deck Sit-out", "Attached Luxury Baths", "Safety Gear"],
    cancellationPolicy: "Free cancellation up to 10 days before check-in. 50% refund up to 5 days before check-in.",
    location: "Finishing Point Jetty, Alleppey",
    dayCruisePrice: 5250,
    overnightPrice: 7500
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
    bedrooms: 3,
    capacity: "6 - 9 Guests",
    duration: "21 Hours (Overnight)",
    foodIncluded: "Gourmet Dining (Chef-selected local and international delicacies)",
    checkIn: "12:00 PM",
    checkOut: "09:00 AM",
    facilities: ["Fully Glass Enclosed Lounge", "Smart TV with Netflix", "Kayaks", "Premium Toiletries", "En-suite Jacuzzi", "Upper Sun Deck"],
    cancellationPolicy: "Free cancellation up to 15 days before check-in. 50% refund up to 7 days before check-in.",
    location: "Punnamada Lake Entrance, Alleppey"
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
    bedrooms: 1,
    capacity: "2 - 10 Guests",
    duration: "6.5 Hours (Day Cruise)",
    foodIncluded: "Lunch and Evening Snacks",
    checkIn: "10:30 AM",
    checkOut: "05:00 PM",
    facilities: ["Sundeck Lounge", "Dining Table", "Clean Restrooms", "Music System", "Local Guide Crew"],
    cancellationPolicy: "Free cancellation up to 48 hours before check-in.",
    location: "Finishing Point Jetty, Alleppey"
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
    bedrooms: 1,
    capacity: "2 Adults per Cabin",
    duration: "21 Hours (Overnight)",
    foodIncluded: "Buffet Lunch, Dinner, Breakfast & Tea",
    checkIn: "12:00 PM",
    checkOut: "09:00 AM",
    facilities: ["Private Bed & Bath", "Shared Lounge & Dining", "AC (9 PM to 6 AM)", "Safety Equipment"],
    cancellationPolicy: "Non-refundable booking.",
    location: "Nehru Trophy Finishing Point, Alleppey"
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
    capacity: "Up to 8 Guests",
    duration: "Flexible (Hourly)",
    foodIncluded: "Not Included (Optional Village lunch stops available)",
    checkIn: "Flexible (Sunrise to Sunset)",
    checkOut: "Flexible",
    facilities: ["Cushioned Seating", "Sun Roof Shade", "Life Jackets", "Experienced Local Captain"],
    cancellationPolicy: "Free cancellation up to 24 hours before start time.",
    location: "Punnamada Finishing Point, Alleppey"
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
    capacity: "Single & Tandem Kayaks",
    duration: "3 to 4 Hours",
    foodIncluded: "Traditional Village Breakfast or Snacks",
    checkIn: "05:30 AM (Sunrise) or 03:00 PM (Sunset)",
    checkOut: "Flexible",
    facilities: ["Premium Kayaks", "Waterproof Dry Bags", "Paddles", "Guide Assistance", "Village Experience"],
    cancellationPolicy: "Free cancellation up to 24 hours prior.",
    location: "Pallathuruthy Bridge, Alleppey"
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
    capacity: "Up to 5 Guests",
    duration: "1 Hour",
    foodIncluded: "Not Included",
    checkIn: "Flexible",
    checkOut: "Flexible",
    facilities: ["High-speed Outboard Engine", "Certified Safety Pilot", "Life Vests", "Wind Shields"],
    cancellationPolicy: "Free cancellation up to 24 hours prior.",
    location: "Punnamada Lake Jetty, Alleppey"
  },
  // NEW ACTIVITIES
  {
    title: "Traditional Village Tour",
    slug: "traditional-village-tour",
    category: "village-tour",
    price: 1200,
    rating: 4.8,
    shortDescription: "Immersive walking and canoe tour through the local farming islands.",
    description: "Discover Kuttanad, the rice bowl of Kerala. Walk along narrow fields below sea level, witness coconut leaf weaving, toddy tapping, and cruise in a non-motorized country canoe steered by locals.",
    images: [
      "https://images.unsplash.com/photo-1593693411515-c202e974eb8f?q=80&w=1200",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600"
    ],
    inclusions: [
      "Canoe ride through micro-canals",
      "Walking tour of paddy fields",
      "Interaction with local artisans",
      "Fresh tender coconut drink",
      "Local English/Hindi speaking guide"
    ],
    capacity: "2 - 12 Guests",
    duration: "4 Hours",
    foodIncluded: "Fresh Toddy / Coconut Drink & Local Snacks",
    checkIn: "08:30 AM or 02:00 PM",
    facilities: ["Traditional Canoe", "Local Guide", "Field Walks", "Drinking Water"],
    cancellationPolicy: "Free cancellation up to 48 hours in advance.",
    location: "Kuttanad Village Jetty, Alleppey"
  },
  {
    title: "Backwater Fishing Adventure",
    slug: "backwater-fishing-adventure",
    category: "fishing",
    price: 1800,
    rating: 4.6,
    shortDescription: "Try traditional angling and Chinese fishing net operations with local fishermen.",
    description: "A unique opportunity to fish like a local! Head to quiet spots on a country boat, learn traditional bamboo rod fishing, and even assist in operating the massive shoreline Chinese Fishing Nets.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600"
    ],
    inclusions: [
      "Traditional fishing rod & baits",
      "Boat ride to prime fishing spots",
      "Chinese net operation experience",
      "Freshly fried catch (prepared on boat/jetty)",
      "Local fishing guide"
    ],
    capacity: "Up to 4 Guests",
    duration: "3 Hours",
    foodIncluded: "Light Tea/Snacks & Fresh Fried Fish Catch",
    checkIn: "06:00 AM or 03:30 PM",
    facilities: ["Bamboo Fishing Rods", "Canoe Boat", "Live Bait", "Frying/Cooking Gear"],
    cancellationPolicy: "Free cancellation up to 24 hours prior.",
    location: "Kavalam Backwaters, Alleppey"
  },
  {
    title: "Romantic Sunset Cruise",
    slug: "romantic-sunset-cruise",
    category: "sunset-cruise",
    price: 2500,
    rating: 4.9,
    shortDescription: "A beautiful evening cruise across Vembanad Lake to watch the sunset.",
    description: "Watch the sun melt into the horizon where the Vembanad Lake meets the sea. This cruise offers a quiet, breeze-filled evening with classical music and fresh refreshments on a luxury open-deck Shikara or private motor boat.",
    images: [
      "https://images.unsplash.com/photo-1593693411515-c202e974eb8f?q=80&w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600"
    ],
    inclusions: [
      "Exclusive private sunset cruise",
      "Refreshing drinks & fruit platter",
      "Soft music onboard",
      "Life jackets and insurance",
      "Stunning golden-hour photography spots"
    ],
    capacity: "2 - 6 Guests",
    duration: "2 Hours",
    foodIncluded: "Mocktails, Juices, and Premium Fruit Basket",
    checkIn: "05:00 PM",
    checkOut: "07:00 PM",
    facilities: ["Comfortable Sofa Seating", "Bluetooth Speaker", "Washroom", "Upper Deck Access"],
    cancellationPolicy: "Free cancellation up to 24 hours before cruise.",
    location: "Vembanad Lake Entrance, Alleppey"
  },
  // NEW PACKAGES
  {
    title: "Romantic Backwater Honeymoon Package",
    slug: "honeymoon-package",
    category: "package-honeymoon",
    price: 18500,
    rating: 5.0,
    shortDescription: "Special premium houseboat stay with candlelit dinner, bed decoration, and cake.",
    description: "Celebrate love in the Venice of the East. This package includes a private 1-bedroom premium houseboat decorated with flowers, candlelit dinner under the stars, a special honeymoon cake, private sunset kayak cruise, and premium Kerala meals customized to your preferences.",
    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200"
    ],
    inclusions: [
      "Private Premium 1-Bedroom Houseboat",
      "Floral Bed Decoration & Honeymoon Cake",
      "Candlelit Dinner with Premium Seafood/Chicken Menu",
      "Private Sunrise Kayaking Ride (1 Hour)",
      "Welcome Mocktails & Full Board Meals"
    ],
    bedrooms: 1,
    capacity: "2 Adults (Couples)",
    duration: "21 Hours (Overnight)",
    foodIncluded: "Premium Customized Full Board (Candlelit Seafood Dinner)",
    checkIn: "12:00 PM",
    checkOut: "09:00 AM",
    facilities: ["Premium AC Lounge", "Bluetooth Soundbar", "Jacuzzi Bath", "Upper Deck Canopy"],
    cancellationPolicy: "Free cancellation up to 10 days before check-in.",
    location: "Punnamada Finishing Point, Alleppey"
  },
  {
    title: "Family Backwater Reunion Cruise",
    slug: "family-package",
    category: "package-family",
    price: 25000,
    rating: 4.8,
    shortDescription: "Spacious 3 or 4 bedroom houseboats with kids activities and local games.",
    description: "Bring the whole family together for an unforgettable cruise. With large indoor dining spaces, board games, traditional music, and a safe, child-friendly environment, our multi-bedroom family houseboats provide standard and premium options for groups of 6 to 12 people.",
    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200"
    ],
    inclusions: [
      "Private 3-Bedroom or 4-Bedroom Houseboat",
      "Traditional Kerala Family Lunch (Sadya)",
      "Traditional board games & playing cards",
      "Kid-friendly food options",
      "Verified crew of 3 (Captain, Cook, Deckhand)"
    ],
    bedrooms: 3,
    capacity: "6 - 12 Guests",
    duration: "21 Hours (Overnight)",
    foodIncluded: "Multi-cuisine Family Buffet (Lunch, Dinner, Breakfast & Snacks)",
    checkIn: "12:00 PM",
    checkOut: "09:00 AM",
    facilities: ["Spacious Dining Area", "LED Screen with Kids channels", "Board Games", "First Aid Kit", "Safety Railings"],
    cancellationPolicy: "Free cancellation up to 7 days before check-in.",
    location: "Nehru Trophy Finishing Point, Alleppey"
  },
  {
    title: "Day Cruise Escape Package",
    slug: "day-cruise",
    category: "package-day",
    price: 7000,
    rating: 4.7,
    shortDescription: "Private daytime houseboat cruise showing village canals and lake views.",
    description: "Perfect for travelers who want to enjoy the houseboat experience without spending the night. Enjoy 6 hours of private cruising with an onboard chef cooking traditional pearl spot fish fry and local rice items fresh for your lunch.",
    images: [
      "https://images.unsplash.com/photo-1593693411515-c202e974eb8f?q=80&w=1200",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200"
    ],
    inclusions: [
      "Private Day-Cruise Houseboat (6 Hours)",
      "Freshly prepared Kerala Lunch onboard",
      "Evening Tea/Coffee and local snacks (Banana Fritters)",
      "Explore Vembanad Lake and Punnamada canals",
      "Experienced local captain"
    ],
    bedrooms: 1,
    capacity: "2 - 15 Guests",
    duration: "6 Hours",
    foodIncluded: "Lunch and Evening High Tea",
    checkIn: "11:00 AM",
    checkOut: "05:00 PM",
    facilities: ["Large Open Sit-out", "Clean Bathroom", "Kitchen with Private Chef", "Comfortable Couch Chairs"],
    cancellationPolicy: "Free cancellation up to 48 hours prior.",
    location: "Punnamada Jetty, Alleppey"
  },
  {
    title: "Overnight Classic Houseboat Package",
    slug: "overnight-houseboat",
    category: "package-overnight",
    price: 9000,
    rating: 4.8,
    shortDescription: "Standard 21-hour overnight stay with all traditional meals cooked fresh onboard.",
    description: "Our signature overnight package. Waking up to the calm water reflections, cruising past illuminated backwater temples, and enjoying hot, fresh food makes this classic package the ultimate Kerala bucket list experience.",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200"
    ],
    inclusions: [
      "21-Hour private houseboat charter",
      "All meals: Welcome drink, Lunch, Evening Tea, Dinner, Breakfast",
      "Air conditioning in bedrooms (09:00 PM to 06:00 AM)",
      "Traditional Kerala style fish fry included",
      "Dedicated 3-man crew"
    ],
    bedrooms: 1,
    capacity: "2 Adults (Extra bed available)",
    duration: "21 Hours",
    foodIncluded: "Full Board (All meals prepared fresh by private chef)",
    checkIn: "12:00 PM",
    checkOut: "09:00 AM",
    facilities: ["AC Bedrooms", "Attached Bathrooms", "Sundeck Chair", "Private Chef"],
    cancellationPolicy: "Free cancellation up to 7 days before check-in.",
    location: "Finishing Point Jetty, Alleppey"
  },
  {
    title: "Premium Luxury Glass Cruise",
    slug: "premium-luxury-package",
    category: "package-premium",
    price: 24000,
    rating: 4.9,
    shortDescription: "Ultra-luxury modern glass boat cruise with dynamic lake views.",
    description: "The ultimate luxury statement in Kuttanad. Fully glass-enclosed air-conditioned living rooms, designer furniture, plush memory-foam queen beds, high-speed Wi-Fi, and a gourmet crew serving premium seafood items like jumbo prawns and crabs.",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200"
    ],
    inclusions: [
      "Ultra-Luxury Glass-Walled Houseboat",
      "Gourmet Seafood Feast (Prawns, Karimeen, Chicken)",
      "Full-day unlimited Air Conditioning",
      "Attached Kayak for private exploration",
      "Premium organic linens, toiletries and bath robes"
    ],
    bedrooms: 2,
    capacity: "4 Guests",
    duration: "21 Hours",
    foodIncluded: "Gourmet Customized Full Board",
    checkIn: "12:00 PM",
    checkOut: "09:00 AM",
    facilities: ["Glass Enclosed Living Area", "High-speed Wi-Fi", "Mini Bar", "Premium Sound System", "En-suite Luxury Bathrooms"],
    cancellationPolicy: "Free cancellation up to 14 days before check-in.",
    location: "Punnamada Lake Entrance, Alleppey"
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
  },
  {
    name: "Sophie Dubois",
    quote: "Wonderful experience! The crew was exceptionally helpful and took great care of us. Watching the fishermen and local birds from the top deck is peace at its best.",
    rating: 5,
    date: "4 days ago",
    avatarSeed: "Sophie"
  },
  {
    name: "Vishnu Prasad",
    quote: "Best value for money. The houseboat was well-maintained and food was hot and delicious. Very direct communication, no brokers involved.",
    rating: 5,
    date: "3 days ago",
    avatarSeed: "Vishnu"
  },
  {
    name: "Daniel Craig",
    quote: "The sunset kayaking was a pristine experience. Canals were narrow and beautiful. Guide was helpful with instructions and took great photos.",
    rating: 4.8,
    date: "2 weeks ago",
    avatarSeed: "Daniel"
  },
  {
    name: "Arjun Mehta",
    quote: "Perfect weekend getaway. We did the overnight stay on a 2-bedroom premium boat. AC worked perfectly and the upper deck was great for evening tea.",
    rating: 5,
    date: "1 month ago",
    avatarSeed: "Arjun"
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
