export type Product = {
  code: string
  name: string
  price: number
  currency: string
  package: string
  category: "Tea" | "Powder" | "Capsules" | "Essential Oils"
  images: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  description: string
  benefits: string[]
  ingredients: { name: string; percentage: number }[]
  usage: string
  contraindications: string[]
  certifications: string[]
  relatedProducts: string[]
}

export const products: Product[] = [
  {
    code: "HWT-001",
    name: "Himalayan Wellness Tea",
    price: 12.99,
    currency: "USD",
    package: "50g loose leaf",
    category: "Tea",
    images: ["/premium-organic-himalayan-wellness-tea-leaves.jpg", "/himalayan-tea-in-cup.jpg", "/himalayan-tea-packaging.jpg"],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    description:
      "A harmonious blend of high-altitude Himalayan herbs crafted to promote relaxation and mental clarity. Sourced from organic farms at 3000m elevation.",
    benefits: [
      "Promotes relaxation and reduces stress",
      "Supports mental clarity and focus",
      "Rich in antioxidants",
      "Aids digestion naturally",
    ],
    ingredients: [
      { name: "Himalayan Green Tea", percentage: 40 },
      { name: "Chamomile", percentage: 30 },
      { name: "Tulsi (Holy Basil)", percentage: 20 },
      { name: "Natural Herbs", percentage: 10 },
    ],
    usage: "Steep 1 teaspoon in hot water (80°C) for 3-5 minutes. Enjoy 2-3 cups daily.",
    contraindications: [
      "Not recommended during pregnancy",
      "Avoid if allergic to chamomile",
      "Consult physician if on blood thinners",
    ],
    certifications: ["USDA Organic", "India Organic"],
    relatedProducts: ["ASH-006", "LAV-004"],
  },
  {
    code: "MOR-002",
    name: "Pure Moringa Leaf Powder",
    price: 9.49,
    currency: "USD",
    package: "200g powder",
    category: "Powder",
    images: ["/organic-moringa-powder-green.jpg", "/moringa-powder-in-spoon.jpg", "/moringa-leaves-fresh.jpg"],
    rating: 4.9,
    reviewCount: 342,
    inStock: true,
    description:
      "Nutrient-dense superfood powder from organic moringa leaves. Contains all 9 essential amino acids, vitamins, and minerals.",
    benefits: [
      "Boosts energy and vitality",
      "Rich in iron and vitamin A",
      "Supports immune function",
      "Natural anti-inflammatory properties",
    ],
    ingredients: [{ name: "100% Organic Moringa Oleifera Leaves", percentage: 100 }],
    usage: "Add 1-2 teaspoons to smoothies, juices, or warm water daily. Can be mixed with yogurt or oatmeal.",
    contraindications: [
      "May lower blood sugar - monitor if diabetic",
      "Consult physician if pregnant or nursing",
      "Start with small amounts to assess tolerance",
    ],
    certifications: ["USDA Organic", "India Organic"],
    relatedProducts: ["GMT-005", "ASH-006"],
  },
  {
    code: "TRI-003",
    name: "Triphala Digestive Complex",
    price: 10.99,
    currency: "USD",
    package: "90 tablets",
    category: "Capsules",
    images: ["/triphala-tablets-bottle.jpg", "/triphala-fruits-amalaki-haritaki.jpg", "/digestive-wellness-capsules.jpg"],
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    description:
      "Traditional Ayurvedic formula combining three powerful fruits for comprehensive digestive support and gentle detoxification.",
    benefits: [
      "Supports healthy digestion",
      "Gentle colon cleanse",
      "Promotes regular bowel movements",
      "Rich in vitamin C and antioxidants",
    ],
    ingredients: [
      { name: "Amalaki (Amla)", percentage: 33 },
      { name: "Haritaki", percentage: 33 },
      { name: "Bibhitaki", percentage: 34 },
    ],
    usage: "Take 2 tablets before bed with warm water. Start with 1 tablet and increase gradually.",
    contraindications: [
      "Not for use during pregnancy",
      "May interact with diabetes medications",
      "Discontinue if diarrhea occurs",
    ],
    certifications: ["USDA Organic", "India Organic"],
    relatedProducts: ["GMT-005", "HWT-001"],
  },
  {
    code: "LAV-004",
    name: "Lavender Essential Oil",
    price: 21.99,
    currency: "USD",
    package: "15ml pure oil",
    category: "Essential Oils",
    images: ["/lavender-essential-oil-bottle.jpg", "/lavender-flowers-field.jpg", "/essential-oil-dropper.jpg"],
    rating: 4.8,
    reviewCount: 412,
    inStock: true,
    description:
      "100% pure therapeutic grade lavender essential oil steam-distilled from Bulgarian lavender flowers. Perfect for aromatherapy and relaxation.",
    benefits: [
      "Promotes deep relaxation and sleep",
      "Reduces anxiety and stress",
      "Natural antiseptic properties",
      "Soothes skin irritations",
    ],
    ingredients: [{ name: "Lavandula Angustifolia (Lavender) Oil", percentage: 100 }],
    usage:
      "Aromatherapy: Add 3-5 drops to diffuser. Topical: Dilute 2-3 drops in carrier oil. Bath: Add 5-8 drops to warm bathwater.",
    contraindications: [
      "Do not ingest",
      "Always dilute before topical use",
      "May cause sensitivity in some individuals",
      "Avoid during first trimester of pregnancy",
    ],
    certifications: ["USDA Organic", "Pure Therapeutic Grade"],
    relatedProducts: ["HWT-001", "ASH-006"],
  },
  {
    code: "GMT-005",
    name: "Golden Milk Turmeric Blend",
    price: 7.99,
    currency: "USD",
    package: "150g powder",
    category: "Powder",
    images: ["/golden-milk-turmeric-powder.jpg", "/turmeric-latte-cup.jpg", "/turmeric-root-spices.jpg"],
    rating: 4.7,
    reviewCount: 298,
    inStock: true,
    description:
      "Authentic golden milk powder blend with organic turmeric, warming spices, and black pepper for maximum curcumin absorption.",
    benefits: [
      "Powerful anti-inflammatory",
      "Supports joint health",
      "Boosts immunity",
      "Aids in recovery and healing",
    ],
    ingredients: [
      { name: "Organic Turmeric", percentage: 70 },
      { name: "Black Pepper", percentage: 5 },
      { name: "Ginger", percentage: 10 },
      { name: "Cinnamon", percentage: 10 },
      { name: "Cardamom", percentage: 5 },
    ],
    usage:
      "Mix 1-2 teaspoons with warm milk (dairy or plant-based). Add honey to taste. Enjoy daily, preferably before bed.",
    contraindications: [
      "May interact with blood thinners",
      "Consult physician if gallbladder issues",
      "High doses may cause stomach upset",
    ],
    certifications: ["USDA Organic", "India Organic"],
    relatedProducts: ["MOR-002", "ASH-006"],
  },
  {
    code: "ASH-006",
    name: "Ashwagandha Root Extract (KSM-66®)",
    price: 15.49,
    currency: "USD",
    package: "60 capsules × 500mg",
    category: "Capsules",
    images: [
      "/ashwagandha-capsules-bottle.jpg",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.8,
    reviewCount: 247,
    inStock: true,
    description:
      "Premium full-spectrum ashwagandha root extract standardized to 5% withanolides. Clinically proven KSM-66® formula for stress relief and vitality.",
    benefits: [
      "Reduces stress and cortisol levels",
      "Enhances energy and stamina",
      "Supports cognitive function",
      "Promotes restful sleep",
    ],
    ingredients: [{ name: "KSM-66® Ashwagandha Root Extract", percentage: 100 }],
    usage: "Take 1-2 capsules daily with food. For best results, take consistently for 8-12 weeks.",
    contraindications: [
      "Not recommended during pregnancy",
      "May interact with thyroid medications",
      "Avoid with immunosuppressants",
      "Consult physician if autoimmune conditions",
    ],
    certifications: ["USDA Organic", "India Organic", "KSM-66® Certified"],
    relatedProducts: ["HWT-001", "MOR-002"],
  },
]

export function getProductByCode(code: string): Product | undefined {
  return products.find((p) => p.code === code)
}

export function getRelatedProducts(codes: string[]): Product[] {
  return products.filter((p) => codes.includes(p.code))
}
