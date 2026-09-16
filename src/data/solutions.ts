import { SolutionIndustry } from '../types';

export const SOLUTIONS: SolutionIndustry[] = [
  {
    id: "hotels-hospitality",
    title: "Hotels & Hospitality",
    headline: "Turn Online Searches Into Direct Enquiries & Bookings.",
    description: "Give potential guests an instant, visual experience of your rooms, suites, amenities, event halls, and dining. Bypass heavy OTA commissions by enabling direct WhatsApp and online reservations.",
    features: [
      "Showcase luxury rooms & suites with high-res galleries",
      "Interactive room amenity checklists & pricing",
      "Direct WhatsApp reservation inquiry engine",
      "Event hall booking & catering inquiry flow",
      "Google Maps location & transit directions",
      "F&B restaurant menu display & specials"
    ],
    ctaText: "See Hotel Demo",
    demoId: "hotel-demo",
    iconName: "Building"
  },
  {
    id: "real-estate",
    title: "Real Estate & Property",
    headline: "Show Properties. Generate Serious Inspection Requests.",
    description: "Put your land, residential, and commercial developments in front of qualified buyers with searchable listings, video walkthroughs, and direct inspection booking forms.",
    features: [
      "Property search with location, price, and type filters",
      "Title document verification indicators (C of O, Gazette)",
      "Instant site inspection appointment requests",
      "Direct agent WhatsApp click-to-chat on each listing",
      "Neighborhood highlights (roads, power, schools)",
      "Downloadable property brochure PDFs"
    ],
    ctaText: "See Real Estate Demo",
    demoId: "realestate-demo",
    iconName: "Home"
  },
  {
    id: "automobile",
    title: "Automobile Dealerships",
    headline: "Give Your Dealership a High-Impact Online Showroom.",
    description: "Let car buyers inspect your available cars, mileage, transmission, customs clearance status, and pricing before stepping onto your physical lot.",
    features: [
      "Searchable vehicle showroom (Make, Year, Budget)",
      "Full vehicle specs (Mileage, VIN/Chassis, Customs)",
      "Multi-angle exterior & interior image carousels",
      "Test drive & inspection booking calendar",
      "Trade-in & vehicle valuation request forms",
      "Direct WhatsApp inventory inquiries"
    ],
    ctaText: "See Car Dealer Demo",
    demoId: "auto-demo",
    iconName: "Car"
  },
  {
    id: "logistics",
    title: "Logistics & Freight",
    headline: "Make Shipping, Cargo & Delivery Simple to Quote and Track.",
    description: "Clarify your delivery routes, interstate waybills, and haulage rates while giving senders a fast way to calculate shipping estimates and track shipments.",
    features: [
      "Clear delivery route directory & transit times",
      "Instant cargo rate & weight quote calculator",
      "Tracking number inquiry portal for clients",
      "Doorstep pickup request dispatch form",
      "Corporate haulage & contract partnership inquiries",
      "WhatsApp dispatch support integration"
    ],
    ctaText: "See Logistics Demo",
    demoId: "logistics-demo",
    iconName: "Truck"
  },
  {
    id: "professional-services",
    title: "Professional Services",
    headline: "Build Trust Before the First Client Conversation.",
    description: "Position your legal, accounting, consulting, or medical practice with authoritative service breakdowns, partner profiles, and streamlined consultation booking.",
    features: [
      "Structured practice areas & corporate advisories",
      "Partner & senior associate credentials showcase",
      "Online consultation booking & intake questionnaire",
      "Client advisory alerts & published insights",
      "Secure client document upload portal",
      "Direct confidential inquiry messaging"
    ],
    ctaText: "See Professional Services Demo",
    demoId: "advisory-demo",
    iconName: "Briefcase"
  },
  {
    id: "wholesale-retail",
    title: "Wholesale & Retail",
    headline: "Turn Your Product Catalogue Into a 24/7 Sales Channel.",
    description: "Allow distributors and retail shoppers to browse available inventory, check minimum order quantities (MOQs), and send itemized bulk orders directly to your sales desk.",
    features: [
      "Organized digital product catalogue with categories",
      "Wholesale cartons / pack pricing & MOQs",
      "One-click 'Order on WhatsApp' with item details",
      "Stock availability badges & bulk order requests",
      "Direct price list / catalogue PDF download",
      "Fast instant search across hundreds of SKUs"
    ],
    ctaText: "See Retail Demo",
    demoId: "retail-demo",
    iconName: "ShoppingBag"
  },
  {
    id: "education",
    title: "Schools & Education",
    headline: "Give Students, Parents & Alum a Modern Digital Portal.",
    description: "Provide parents and prospective families with clear admission criteria, academic calendars, fee structures, and direct student registration channels.",
    features: [
      "Online admission application & document submission",
      "Curriculum, academic calendar & term timetable",
      "Parent portal announcement board & fee notices",
      "School facilities gallery & virtual tour",
      "Direct admissions desk WhatsApp communication",
      "Alumni network & event updates"
    ],
    ctaText: "Discuss School Portal",
    demoId: "hotel-demo", // links to solutions or custom inquiry
    iconName: "GraduationCap"
  }
];
