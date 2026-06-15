import {
  Brain,
  CalendarDays,
  ChefHat,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  UtensilsCrossed,
} from "lucide-react"

export const BOOKING_URL = "https://wa.me/919310590819?text=Hi%20Savri%2C%20I%20want%20to%20book%20a%20private%20chef."
export const CHEF_APPLY_URL = "https://forms.gle/ESCw7Zpt5vJNgJxa8"
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreyaowo"

export const CONTACT_EMAIL = "hello@savri.co.in"
export const FOUNDER_EMAIL = "founder@savri.co.in"
export const CONTACT_PHONE = "+91-93105-90819"
export const INSTAGRAM_URL = "https://www.instagram.com/savri.in/"
export const TWITTER_URL = "https://x.com/savri_in"
export const LINKEDIN_URL = "https://www.linkedin.com/company/savri"

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Party", href: "/party" },
  { label: "Blog", href: "/blog" },
  { label: "Savri AI", href: "/ai" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
]

export const pricingTiers = [
  {
    id: "tier-1",
    name: "Small Table",
    guests: "1-3 guests",
    price: 549,
    dishes: 2,
    hours: 1,
    perPerson: "₹183 per person for 3 guests",
    bestFor: "Couples, solo diners, and compact gatherings",
    badge: null,
  },
  {
    id: "tier-2",
    name: "Full Table",
    guests: "4-6 guests",
    price: 1149,
    dishes: 4,
    hours: 2,
    perPerson: "₹191 per person for 6 guests",
    bestFor: "Family dinners, celebrations, and hosting at home",
    badge: "Most Popular",
  },
]

export const extraDishPrice = 149
export const bookingRule = "Book at least 24 hours in advance."

export const whySavriCards = [
  {
    title: "Premium Experience, Affordable Price",
    copy:
      "Not all private chefs are created equal. Savri brings restaurant-quality, personalized dining to your home. Starting at just ₹549.",
    eyebrow: "Premium Yet Accessible",
  },
  {
    title: "Fresh Every Time",
    copy:
      "No frozen prep. No factory-made gravies. Every dish is cooked fresh in your kitchen with ingredients sourced for your booking.",
    eyebrow: "Fresh, Authentic Ingredients",
  },
  {
    title: "Vetted & Trusted Chefs",
    copy:
      "Every chef is professionally trained, background-checked, and reviewed by real households before they reach your table.",
    eyebrow: "Your Personal Chef",
  },
  {
    title: "Affordable Enough to Make It a Habit.",
    copy:
      "₹549 for 1-3 guests. ₹1,149 for 4-6. Add extra dishes at ₹149 each. No surprise markups.",
    eyebrow: "No Hidden Costs",
  },
]

export const homeSteps = [
  {
    title: "Choose Your Guests & Tier",
    copy:
      "Select your group size. Small Table covers 1-3 guests at ₹549. Full Table covers 4-6 guests at ₹1,149.",
  },
  {
    title: "Pick Date, Time & Menu",
    copy:
      "Choose the time you want the food to be served, at least 24 hours in advance. Then confirm your core dishes and add extras for ₹149 each.",
  },
  {
    title: "Confirm & Enjoy",
    copy:
      "You choose the serve time in the app. For Small Table, your chef arrives 1 hour before service. For Full Table, your chef arrives 2 hours before service. They cook fresh, plate beautifully, and clean up after.",
  },
]

export const chefProfiles = [
  {
    name: "Rajesh Sharma",
    specialty: "North Indian Specialist",
    city: "Delhi",
    rating: "5.0",
    bookings: "120+ bookings",
    quote: "Love cooking for families who want a proper North Indian spread.",
  },
  {
    name: "Priya Malhotra",
    specialty: "Healthy & Fusion",
    city: "Bangalore",
    rating: "4.9",
    bookings: "95+ bookings",
    quote: "Balanced plates can still feel indulgent when the flavours are right.",
  },
  {
    name: "Akshay Patel",
    specialty: "Gujarati & Continental",
    city: "Mumbai",
    rating: "4.9",
    bookings: "110+ bookings",
    quote: "Comfort food and polished plating can absolutely coexist.",
  },
  {
    name: "Neha Singh",
    specialty: "Bengali & Mughlai",
    city: "Kolkata",
    rating: "5.0",
    bookings: "88+ bookings",
    quote: "I focus on rich flavour without losing the warmth of home cooking.",
  },
  {
    name: "Ravi Kumar",
    specialty: "South Indian",
    city: "Hyderabad",
    rating: "4.8",
    bookings: "102+ bookings",
    quote: "Fresh batter, real spices, and timing matter more than shortcuts.",
  },
  {
    name: "Anjali Desai",
    specialty: "Vegetarian & Baking",
    city: "Pune",
    rating: "5.0",
    bookings: "76+ bookings",
    quote: "Vegetarian menus deserve the same theatre and care as any tasting dinner.",
  },
]

export const testimonials = [
  {
    name: "Radhika M.",
    location: "Pitampura, Delhi",
    useCase: "Anniversary Dinner",
    quote:
      "Best dinner we have hosted at home in years. Fresh food, professional service, and the table felt special without us lifting a finger.",
  },
  {
    name: "Amit & Neha",
    location: "Rohini, Delhi",
    useCase: "Date Night",
    quote:
      "We were skeptical about a home chef. Savri made it easy. The chef arrived on time, cooked beautifully, cleaned up, and the whole evening felt worth every rupee.",
  },
  {
    name: "Sharma Family",
    location: "Shalimar Bagh, Delhi",
    useCase: "Family Gathering",
    quote:
      "Hosting extended family used to stress us out. With Savri, we actually enjoyed the evening and the food still felt personal.",
  },
  {
    name: "Priya S.",
    location: "Paschim Vihar, Delhi",
    useCase: "Dietary Preferences",
    quote:
      "As a vegan, finding a chef who understands my preferences is rare. Savri's chef was creative, respectful, and genuinely informed.",
  },
]

export const homepageFaqs = [
  {
    question: "How much does a private chef cost in Delhi?",
    answer:
      "Private chef services in Delhi start at ₹549 with Savri for 1-3 guests. Full table for 4-6 guests is ₹1,149. Party bookings with a private chef start at ₹5,999 in Delhi.",
  },
  {
    question: "Can I book a chef for my home in Delhi NCR?",
    answer:
      "Yes. Savri lets you book a verified private chef for your home in Delhi, Noida, Gurugram, Faridabad, and Ghaziabad. The chef brings fresh ingredients, cooks your choice of dishes, and cleans up after.",
  },
  {
    question: "Is there a private chef app in India?",
    answer:
      "Savri is India's private chef booking platform available via the website at savri.co.in (Android and iOS apps rolling out). You can book a chef for everyday meals or special party occasions directly.",
  },
  {
    question: "What is the best way to hire a chef for a birthday party in Delhi?",
    answer:
      "The easiest way is to book through Savri — choose your date, select your menu from 90+ dishes, and a verified chef arrives at your home. Party bookings start at ₹5,999 for Delhi.",
  },
  {
    question: "Do private chefs in Delhi bring their own ingredients?",
    answer:
      "Yes, Savri chefs bring all fresh ingredients for your chosen dishes. You just need to provide your kitchen — the chef handles everything from cooking to cleanup.",
  },
  {
    question: "Do you do party bookings?",
    answer:
      "Yes! Savri now offers party bookings starting at ₹5,999 for Delhi. We handle everything — chef, cooking, and cleanup. Visit our Party Bookings page to know more.",
  },
  {
    question: "How many guests can you accommodate for a party?",
    answer:
      "Our party bookings are designed for gatherings in Delhi NCR. The menu includes 4 snacks, 4 main course dishes, 2 sides, and 2 desserts — perfect for 10-20 guests.",
  },
  {
    question: "Is there an extra charge for NCR areas?",
    answer:
      "Yes, bookings in Noida, Gurugram, Faridabad, and Ghaziabad have an additional ₹1,999 travel surcharge, bringing the total to ₹7,998.",
  },
  {
    question: "How far in advance do I need to book?",
    answer:
      "Minimum 24 hours. If you book today at 5pm, the earliest service is tomorrow at 5pm. That gives us time for chef assignment and ingredient planning.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Chef time, cooking, plating, service guidance, and kitchen cleanup. Ingredients are reimbursed separately. Alcohol is not included.",
  },
  {
    question: "Can I customize the menu?",
    answer:
      "Yes. You can share dietary restrictions, flavour preferences, and specific dish requests. Your chef builds around that.",
  },
  {
    question: "What if I have allergies?",
    answer:
      "Tell us before the booking. We pass that information to the chef in advance so ingredients and prep decisions reflect your needs.",
  },
  {
    question: "Can I cancel a booking?",
    answer:
      "Yes. Cancellations made more than 24 hours before service are accepted without issue.",
  },
  {
    question: "Do you operate in my city?",
    answer:
      "Savri is launching in Delhi first. Contact us to confirm whether your locality is currently serviceable before you book.",
  },
]

export const pricingFaqs = [
  {
    question: "Why is Full Table better value for 6 guests?",
    answer:
      "Full Table spreads the chef's time and menu across more guests, so the effective per-person price drops significantly when the group is full.",
  },
  {
    question: "Do I pay extra for dietary restrictions?",
    answer:
      "No separate dietary fee. Ingredient choices may affect reimbursement, but Savri does not add a surcharge just because your needs are specific.",
  },
  {
    question: "Can I add more than 5 extra dishes?",
    answer:
      "Yes, as long as the chef has enough time and your schedule supports it. Each extra dish adds roughly 30 minutes.",
  },
  {
    question: "Is there a minimum booking value?",
    answer:
      "Yes. The minimum is the selected tier price. Extra dishes and ingredient reimbursement are added on top.",
  },
]

export const processFaqs = [
  {
    question: "What time can I book?",
    answer:
      "Any slot that meets the 24-hour minimum and has chef availability. We recommend booking earlier for weekends and celebrations.",
  },
  {
    question: "Can I change my menu later?",
    answer:
      "Yes, as long as you tell us with enough notice for sourcing and prep. Last-minute changes may affect what can realistically be delivered.",
  },
  {
    question: "What if I am running late?",
    answer:
      "Message us or your Savri contact as soon as possible. We will coordinate with the chef and reset expectations where possible.",
  },
]

export const aiFeaturePreview = [
  {
    title: "Taste profile learning",
    icon: Brain,
  },
  {
    title: "Meal prediction",
    icon: Sparkles,
  },
  {
    title: "Smart chef matching",
    icon: Target,
  },
  {
    title: "Dietary intelligence",
    icon: ShieldCheck,
  },
]

export const contactReasons = [
  "Book a chef",
  "Pricing question",
  "Corporate or event enquiry",
  "Chef partnership",
  "Savri AI updates",
  "Press or collaboration",
]

export const aboutValues = [
  {
    title: "Quality",
    copy: "Every booking should feel considered, not mass-produced.",
    icon: UtensilsCrossed,
  },
  {
    title: "Trust",
    copy: "You are inviting someone into your home. Verification and reliability are non-negotiable.",
    icon: ShieldCheck,
  },
  {
    title: "Personal Service",
    copy: "Private dining should adapt to your household, not force you into a generic flow.",
    icon: HeartHandshake,
  },
]

export const howItWorksSteps = [
  {
    step: "01",
    title: "Sign Up",
    timing: "2 mins",
    copy: "Share your basic details so we can confirm area coverage and coordinate your booking cleanly.",
    icon: CalendarDays,
  },
  {
    step: "02",
    title: "Choose Tier",
    timing: "1 min",
    copy: "Pick Small Table for 1-3 guests at ₹549 or Full Table for 4-6 guests at ₹1,149.",
    icon: Target,
  },
  {
    step: "03",
    title: "Pick Date & Time",
    timing: "1 min",
    copy: "Select the time you want the food to be served, making sure it is at least 24 hours away so the chef and sourcing plan are locked in properly.",
    icon: Clock3,
  },
  {
    step: "04",
    title: "Select Dishes",
    timing: "2 mins",
    copy: "Choose 2-4 curated dishes depending on tier. Extra dishes cost ₹149 each.",
    icon: UtensilsCrossed,
  },
  {
    step: "05",
    title: "Book & Pay",
    timing: "2 mins",
    copy: "Review the total, confirm the ingredient flow, and complete payment through the booking process.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Chef Arrives",
    timing: "Service day",
    copy: "You choose the serve time in the app. For Small Table, your chef arrives 1 hour before that time. For Full Table, your chef arrives 2 hours before that time, then cooks, plates, and cleans up before leaving.",
    icon: ChefHat,
  },
]
