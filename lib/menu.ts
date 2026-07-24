/**
 * Savri menu catalogue.
 *
 * This file is intentionally price-free — it is imported by client components
 * to render the dish picker. No pricing constants live here (those are
 * server-only in lib/server/pricing.ts). Dish ids are stable and are what we
 * persist on the booking document, so DO NOT renumber existing ids.
 */

export type DishCategory =
  // Veg
  | "chinese"
  | "italian"
  | "soups"
  | "dal"
  | "rice"
  | "indianStarters"
  | "sabzi"
  | "breads"
  | "saladSides"
  // Non-veg
  | "indianStartersChicken"
  | "indianStartersMutton"
  | "indianStartersEgg"
  | "indianStartersFish"
  | "chineseStarters"
  | "chineseMains"
  | "chineseSoups"
  | "biryaniRice"
  | "curriesChicken"
  | "curriesDry"
  | "curriesMutton"
  | "curriesEgg"
  // Shared
  | "desserts"

export type Dish = {
  id: string
  name: string
  category: DishCategory
  isVeg: boolean
  note?: string
}

/** Human-friendly section labels, in display order. */
export const categoryLabels: Record<DishCategory, string> = {
  chinese: "Chinese",
  italian: "Italian",
  soups: "Soups",
  dal: "Dal",
  rice: "Rice",
  indianStarters: "Indian Starters",
  sabzi: "Sabzi (Paneer & Veg Mains)",
  breads: "Breads",
  saladSides: "Salads & Sides",
  indianStartersChicken: "Chicken Starters",
  indianStartersMutton: "Mutton Starters",
  indianStartersEgg: "Egg Starters",
  indianStartersFish: "Fish Starters",
  chineseStarters: "Chinese Starters (Non-Veg)",
  chineseMains: "Chinese Mains (Non-Veg)",
  chineseSoups: "Chinese Soups (Non-Veg)",
  biryaniRice: "Biryani & Pulao",
  curriesChicken: "Chicken Curries",
  curriesDry: "Dry Chicken",
  curriesMutton: "Mutton Curries",
  curriesEgg: "Egg Curries",
  desserts: "Desserts",
}

/** Order in which categories are rendered. */
export const categoryOrder: DishCategory[] = [
  // Veg
  "indianStarters",
  "sabzi",
  "dal",
  "rice",
  "breads",
  "chinese",
  "italian",
  "soups",
  "saladSides",
  // Non-veg
  "indianStartersChicken",
  "indianStartersMutton",
  "indianStartersEgg",
  "indianStartersFish",
  "chineseStarters",
  "chineseMains",
  "chineseSoups",
  "biryaniRice",
  "curriesChicken",
  "curriesDry",
  "curriesMutton",
  "curriesEgg",
  // Shared
  "desserts",
]

// Small helper so the big list below stays readable.
function dish(id: string, name: string, category: DishCategory, isVeg: boolean, note?: string): Dish {
  return note ? { id, name, category, isVeg, note } : { id, name, category, isVeg }
}

export const menu: Dish[] = [
  // ─── VEG ──────────────────────────────────────────────────────────────────
  // Chinese
  dish("v-chi-1", "Fried Rice", "chinese", true),
  dish("v-chi-2", "Manchurian", "chinese", true),
  dish("v-chi-3", "Chowmein", "chinese", true),
  dish("v-chi-4", "Paneer Chopsi", "chinese", true),
  dish("v-chi-5", "Sizzler", "chinese", true),

  // Italian
  dish("v-ita-1", "Risotto", "italian", true),
  dish("v-ita-2", "Pasta", "italian", true),
  dish("v-ita-3", "Pizza", "italian", true),

  // Soups
  dish("v-sou-1", "Tomato Soup", "soups", true),
  dish("v-sou-2", "Sweet Corn", "soups", true),
  dish("v-sou-3", "Hot & Sour", "soups", true),
  dish("v-sou-4", "Manchow", "soups", true),
  dish("v-sou-5", "Mushroom", "soups", true),

  // Dal
  dish("v-dal-1", "Dal Makhni", "dal", true),
  dish("v-dal-2", "Dal Fry", "dal", true),
  dish("v-dal-3", "Moong Dal", "dal", true),
  dish("v-dal-4", "Chane Dal", "dal", true),

  // Rice
  dish("v-ric-1", "Plain Rice", "rice", true),
  dish("v-ric-2", "Jeera Rice", "rice", true),
  dish("v-ric-3", "Matar Pulao", "rice", true),
  dish("v-ric-4", "Onion Rice", "rice", true),
  dish("v-ric-5", "Vegetable Pulao", "rice", true),
  dish("v-ric-6", "Hyderabadi Rice", "rice", true),

  // Indian Starters (Veg)
  dish("v-ist-1", "Hari Bhari Tikki", "indianStarters", true),
  dish("v-ist-2", "Paneer Tikka", "indianStarters", true),
  dish("v-ist-3", "Cheese Balls", "indianStarters", true),
  dish("v-ist-4", "Cheese Corn Cutlets", "indianStarters", true),
  dish("v-ist-5", "French Fries", "indianStarters", true),
  dish("v-ist-6", "Chilli Paneer", "indianStarters", true),
  dish("v-ist-7", "Chilli Potato/Mushroom", "indianStarters", true),
  dish("v-ist-8", "Aloo Krara", "indianStarters", true),
  dish("v-ist-9", "Honey Chilli Potato", "indianStarters", true),
  dish("v-ist-10", "Tawa Chaap", "indianStarters", true),
  dish("v-ist-11", "Tandoori Chaap", "indianStarters", true),
  dish("v-ist-12", "Malai Tandoori Chaap", "indianStarters", true),
  dish("v-ist-13", "Corn Roll", "indianStarters", true),
  dish("v-ist-14", "Veg Seekh Kebab", "indianStarters", true),
  dish("v-ist-15", "Hara Bhara Kebab", "indianStarters", true),
  dish("v-ist-16", "Paneer/Aloo/Gobhi Pakora", "indianStarters", true),

  // Sabzi
  dish("v-sab-1", "Shahi Paneer", "sabzi", true),
  dish("v-sab-2", "Laung Latta Paneer", "sabzi", true),
  dish("v-sab-3", "Kadhai Paneer", "sabzi", true),
  dish("v-sab-4", "Mughlai Paneer", "sabzi", true),
  dish("v-sab-5", "Pudina Paneer", "sabzi", true),
  dish("v-sab-6", "Palak Paneer", "sabzi", true),
  dish("v-sab-7", "Palak Kofta", "sabzi", true),
  dish("v-sab-8", "Palak Babycorn", "sabzi", true),
  dish("v-sab-9", "Masala Paneer", "sabzi", true),
  dish("v-sab-10", "Matar Paneer", "sabzi", true),
  dish("v-sab-11", "MushrooPaneer", "sabzi", true),
  dish("v-sab-12", "Malai Kofta", "sabzi", true),
  dish("v-sab-13", "Dum Aloo", "sabzi", true),
  dish("v-sab-14", "Kashmiri Aloo", "sabzi", true),
  dish("v-sab-15", "Gobhi Aloo", "sabzi", true),
  dish("v-sab-16", "Mix Veg", "sabzi", true),
  dish("v-sab-17", "Bhindi Masala", "sabzi", true),
  dish("v-sab-18", "Matar Aloo", "sabzi", true),

  // Breads
  dish("v-bre-1", "Lachha Parantha", "breads", true),
  dish("v-bre-2", "Butter Naan", "breads", true),
  dish("v-bre-3", "Garlic Naan", "breads", true),
  dish("v-bre-4", "Butter Garlic Naan", "breads", true),
  dish("v-bre-5", "Chilli Parantha", "breads", true),
  dish("v-bre-6", "Tandoori Roti", "breads", true),
  dish("v-bre-7", "Tawa Roti", "breads", true),
  dish("v-bre-8", "Makki ki Roti", "breads", true),
  dish("v-bre-9", "Amritsari Naan", "breads", true),
  dish("v-bre-10", "Pudina Parantha", "breads", true),
  dish("v-bre-11", "Aloo Parantha", "breads", true),
  dish("v-bre-12", "Gobhi Parantha", "breads", true),
  dish("v-bre-13", "Paneer Parantha", "breads", true),

  // Salads & Sides
  dish("v-sal-1", "Green Salad", "saladSides", true),
  dish("v-sal-2", "Finger Salad", "saladSides", true),
  dish("v-sal-3", "Plain Salad", "saladSides", true),
  dish("v-sal-4", "Imli Chutney", "saladSides", true),
  dish("v-sal-5", "Mint Chutney", "saladSides", true),
  dish("v-sal-6", "Kachumber Salad", "saladSides", true),
  dish("v-sal-7", "Onion Salad with Lime", "saladSides", true),
  dish("v-sal-8", "Roasted Papad", "saladSides", true),
  dish("v-sal-9", "Boondi Raita", "saladSides", true),

  // ─── NON-VEG ────────────────────────────────────────────────────────────────
  // Chicken Starters
  dish("n-chs-1", "Chicken Tikka", "indianStartersChicken", false),
  dish("n-chs-2", "Chicken Malai Tikka", "indianStartersChicken", false),
  dish("n-chs-3", "Chicken Seekh Kebab", "indianStartersChicken", false),
  dish("n-chs-4", "Chicken Pakora", "indianStartersChicken", false),
  dish("n-chs-5", "Chicken Afghani Tikka", "indianStartersChicken", false),
  dish("n-chs-6", "Tandoori Chicken", "indianStartersChicken", false, "(half / full)"),
  dish("n-chs-7", "Chicken Hariyali Tikka", "indianStartersChicken", false, "(green mint marinade)"),
  dish("n-chs-8", "Chicken Achari Tikka", "indianStartersChicken", false),

  // Mutton Starters
  dish("n-mts-1", "Mutton Seekh Kebab", "indianStartersMutton", false),
  dish("n-mts-2", "Mutton Shammi Kebab", "indianStartersMutton", false),
  dish("n-mts-3", "Mutton Galouti Kebab", "indianStartersMutton", false, "(Delhi special, must try)"),
  dish("n-mts-4", "Mutton Boti Kebab", "indianStartersMutton", false),

  // Egg Starters
  dish("n-egs-1", "Egg Bhurji Toast", "indianStartersEgg", false),
  dish("n-egs-2", "Masala Omelette", "indianStartersEgg", false),

  // Fish Starters
  dish("n-fis-1", "Fish Tikka", "indianStartersFish", false),
  dish("n-fis-2", "Fish Amritsari", "indianStartersFish", false),

  // Chinese Starters (Non-Veg)
  dish("n-cst-1", "Chicken Manchurian (dry)", "chineseStarters", false),
  dish("n-cst-2", "Crispy Chilli Chicken", "chineseStarters", false),
  dish("n-cst-3", "Chicken Lollipop", "chineseStarters", false),
  dish("n-cst-4", "Prawn Toast", "chineseStarters", false),

  // Chinese Mains (Non-Veg)
  dish("n-cmn-1", "Chicken Manchurian (gravy)", "chineseMains", false),
  dish("n-cmn-2", "Chicken in Black Bean Sauce", "chineseMains", false),
  dish("n-cmn-3", "Prawn Fried Rice", "chineseMains", false),
  dish("n-cmn-4", "Chicken Hakka Noodles", "chineseMains", false),
  dish("n-cmn-5", "Chilli Garlic Chicken", "chineseMains", false),

  // Chinese Soups (Non-Veg)
  dish("n-cso-1", "Chicken Hot & Sour Soup", "chineseSoups", false),
  dish("n-cso-2", "Chicken Sweet Corn Soup", "chineseSoups", false),

  // Biryani & Pulao
  dish("n-bir-1", "Chicken/Mutton Biryani (dum)", "biryaniRice", false),
  dish("n-bir-2", "Egg Biryani", "biryaniRice", false),
  dish("n-bir-3", "Chicken/Mutton/Keema Pulao", "biryaniRice", false),

  // Chicken Curries
  dish("n-ccu-1", "Butter Chicken", "curriesChicken", false),
  dish("n-ccu-2", "Kadhai Chicken", "curriesChicken", false),
  dish("n-ccu-3", "Chicken Do Pyaza", "curriesChicken", false),
  dish("n-ccu-4", "Chicken Korma", "curriesChicken", false),
  dish("n-ccu-5", "Chicken Handi", "curriesChicken", false),
  dish("n-ccu-6", "Achari Chicken", "curriesChicken", false),
  dish("n-ccu-7", "Chicken Lababdar", "curriesChicken", false),
  dish("n-ccu-8", "Chicken Changezi", "curriesChicken", false),
  dish("n-ccu-9", "Chicken Kalimirch", "curriesChicken", false),
  dish("n-ccu-10", "Chicken Saagwala", "curriesChicken", false),
  dish("n-ccu-11", "Chicken Keema", "curriesChicken", false),
  dish("n-ccu-12", "Keema Matar", "curriesChicken", false),
  dish("n-ccu-13", "Chicken Razala", "curriesChicken", false),

  // Dry Chicken
  dish("n-cdr-1", "Chicken Sukka", "curriesDry", false),
  dish("n-cdr-2", "Chicken Tawa Masala", "curriesDry", false),

  // Mutton Curries
  dish("n-mcu-1", "Mutton Rogan Josh", "curriesMutton", false),
  dish("n-mcu-2", "Mutton Curry", "curriesMutton", false),
  dish("n-mcu-3", "Mutton Keema", "curriesMutton", false),
  dish("n-mcu-4", "Mutton Keema Matar", "curriesMutton", false),
  dish("n-mcu-5", "Mutton Nihari", "curriesMutton", false),
  dish("n-mcu-6", "Mutton Paya", "curriesMutton", false),
  dish("n-mcu-7", "Mutton Pasanda", "curriesMutton", false),
  dish("n-mcu-8", "Mutton Korma", "curriesMutton", false),
  dish("n-mcu-9", "Mutton Handi", "curriesMutton", false),
  dish("n-mcu-10", "Mutton Do Pyaza", "curriesMutton", false),
  dish("n-mcu-11", "Mutton Saagwala", "curriesMutton", false),
  dish("n-mcu-12", "Mutton Tawa Masala", "curriesMutton", false),

  // Egg Curries
  dish("n-ecu-1", "Egg Curry", "curriesEgg", false),
  dish("n-ecu-2", "Egg Bhurji", "curriesEgg", false),
  dish("n-ecu-3", "Egg Masala", "curriesEgg", false),
  dish("n-ecu-4", "Anda Do Pyaza", "curriesEgg", false),
  dish("n-ecu-5", "Egg Keema", "curriesEgg", false),
  dish("n-ecu-6", "Nargisi Kofta", "curriesEgg", false),

  // ─── DESSERTS (shared across veg / non-veg) ─────────────────────────────────
  dish("d-1", "Cold Halwa", "desserts", true),
  dish("d-2", "Fruit Cream", "desserts", true),
  dish("d-3", "Fruit Custard", "desserts", true),
  dish("d-4", "Firni", "desserts", true),
  dish("d-5", "Maal Pua", "desserts", true),
  dish("d-6", "Gulab Jamun", "desserts", true),
  dish("d-7", "Badam Halwa", "desserts", true),
  dish("d-8", "Jalebi & Rabri", "desserts", true),
  dish("d-9", "Kulfi Faluda", "desserts", true),
  dish("d-10", "Ice Cream", "desserts", true),
  dish("d-11", "Moong Dal Halwa", "desserts", true),
  dish("d-12", "Ras Malai", "desserts", true),
  dish("d-13", "Thandi Kheer", "desserts", true),
  dish("d-14", "Rabri Faluda", "desserts", true),
  dish("d-15", "Teela Wali Kulfi", "desserts", true),
]

/** Fast lookup by id — used server-side to resolve dish names for a booking. */
export const dishById: Record<string, Dish> = Object.fromEntries(
  menu.map((d) => [d.id, d]),
)

/** All dishes for a category, in menu order. */
export function dishesByCategory(category: DishCategory): Dish[] {
  return menu.filter((d) => d.category === category)
}
