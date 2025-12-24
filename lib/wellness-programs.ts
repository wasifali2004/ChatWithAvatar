export type WellnessProgram = {
  id: string
  name: string
  duration: string
  description: string
  price: number
  savings: number
  originalPrice: number
  products: Array<{
    code: string
    name: string
    quantity: number
  }>
  benefits: string[]
  schedule: Array<{
    week: string
    instructions: string
  }>
  expectedResults: string[]
  gradient: string
}

export const wellnessPrograms: WellnessProgram[] = [
  {
    id: "stress-relief",
    name: "Stress Relief Program",
    duration: "30 Days",
    description:
      "A comprehensive 30-day program designed to reduce stress, promote relaxation, and restore balance to your mind and body through the synergistic power of adaptogens and calming botanicals.",
    price: 50.47,
    savings: 5,
    originalPrice: 55.47,
    products: [
      { code: "ASH-006", name: "Ashwagandha Root Extract", quantity: 1 },
      { code: "HWT-001", name: "Himalayan Wellness Tea", quantity: 1 },
      { code: "LAV-004", name: "Lavender Essential Oil", quantity: 1 },
    ],
    benefits: [
      "Reduces cortisol levels naturally",
      "Improves sleep quality and duration",
      "Enhances mental clarity and focus",
      "Promotes emotional balance",
      "Supports adrenal health",
    ],
    schedule: [
      {
        week: "Week 1-2",
        instructions:
          "Start with 1 Ashwagandha capsule daily with breakfast. Enjoy 1 cup of Himalayan Wellness Tea in the evening. Use 3-5 drops of Lavender Oil in diffuser before bed.",
      },
      {
        week: "Week 3-4",
        instructions:
          "Increase to 2 Ashwagandha capsules daily (morning and evening). Continue tea ritual and aromatherapy practice. Add 5-minute meditation after tea.",
      },
    ],
    expectedResults: [
      "Week 1: Improved sleep onset and quality",
      "Week 2: Reduced feelings of overwhelm and anxiety",
      "Week 3: Enhanced energy without jitters",
      "Week 4: Greater emotional resilience and balance",
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: "energy-vitality",
    name: "Energy & Vitality Boost",
    duration: "60 Days",
    description:
      "Revitalize your body and mind with this 60-day program combining nutrient-dense superfoods and adaptogens to naturally enhance energy, stamina, and overall vitality.",
    price: 32.97,
    savings: 0,
    originalPrice: 32.97,
    products: [
      { code: "MOR-002", name: "Pure Moringa Leaf Powder", quantity: 1 },
      { code: "ASH-006", name: "Ashwagandha Root Extract", quantity: 1 },
      { code: "GMT-005", name: "Golden Milk Turmeric Blend", quantity: 1 },
    ],
    benefits: [
      "Sustained energy throughout the day",
      "Enhanced physical stamina and endurance",
      "Improved mental alertness",
      "Supports mitochondrial function",
      "Reduces fatigue and burnout",
    ],
    schedule: [
      {
        week: "Week 1-4",
        instructions:
          "Morning: 1-2 tsp Moringa powder in smoothie or juice. Afternoon: 1 Ashwagandha capsule with lunch. Evening: Golden Milk before bed.",
      },
      {
        week: "Week 5-8",
        instructions:
          "Continue morning routine. Increase Ashwagandha to 2 capsules daily. Add light exercise 3x weekly to maximize benefits.",
      },
    ],
    expectedResults: [
      "Week 2: Noticeable increase in morning energy",
      "Week 4: Improved workout performance and recovery",
      "Week 6: Enhanced mental clarity and productivity",
      "Week 8: Sustained vitality and reduced afternoon crashes",
    ],
    gradient: "from-gold/20 to-secondary/20",
  },
  {
    id: "digestive-health",
    name: "Digestive Health Reset",
    duration: "45 Days",
    description:
      "A gentle 45-day program to reset and optimize your digestive system using time-tested Ayurvedic formulations that support gut health, regularity, and nutrient absorption.",
    price: 31.77,
    savings: 0,
    originalPrice: 31.77,
    products: [
      { code: "TRI-003", name: "Triphala Digestive Complex", quantity: 1 },
      { code: "GMT-005", name: "Golden Milk Turmeric Blend", quantity: 1 },
      { code: "HWT-001", name: "Himalayan Wellness Tea", quantity: 1 },
    ],
    benefits: [
      "Promotes regular bowel movements",
      "Reduces bloating and gas",
      "Supports healthy gut flora",
      "Enhances nutrient absorption",
      "Gentle detoxification",
    ],
    schedule: [
      {
        week: "Week 1-3",
        instructions:
          "Evening: Start with 1 Triphala tablet before bed. Morning: Himalayan Tea after breakfast. Include Golden Milk 3x weekly.",
      },
      {
        week: "Week 4-6",
        instructions:
          "Increase to 2 Triphala tablets nightly. Continue tea ritual. Daily Golden Milk for optimal anti-inflammatory support.",
      },
    ],
    expectedResults: [
      "Week 1: Improved regularity and reduced bloating",
      "Week 2: Enhanced digestion and less discomfort",
      "Week 4: Noticeable improvement in energy and skin clarity",
      "Week 6: Optimal digestive function and nutrient absorption",
    ],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    id: "immunity-booster",
    name: "Immunity Booster",
    duration: "Seasonal",
    description:
      "A seasonal wellness program designed to fortify your immune system with powerful antioxidants, vitamins, and adaptogens. Perfect for seasonal transitions and year-round wellness.",
    price: 30.57,
    savings: 0,
    originalPrice: 30.57,
    products: [
      { code: "HWT-001", name: "Himalayan Wellness Tea", quantity: 1 },
      { code: "MOR-002", name: "Pure Moringa Leaf Powder", quantity: 1 },
      { code: "GMT-005", name: "Golden Milk Turmeric Blend", quantity: 1 },
    ],
    benefits: [
      "Strengthens immune response",
      "Rich in antioxidants and vitamins",
      "Anti-inflammatory support",
      "Enhances natural defenses",
      "Supports respiratory health",
    ],
    schedule: [
      {
        week: "Daily Routine",
        instructions:
          "Morning: 2 tsp Moringa in smoothie. Midday: 2 cups Himalayan Wellness Tea. Evening: Golden Milk for anti-inflammatory support.",
      },
      {
        week: "During Illness",
        instructions:
          "Increase tea to 3-4 cups daily. Continue Moringa and Golden Milk. Add extra rest and hydration. Consult healthcare provider if symptoms persist.",
      },
    ],
    expectedResults: [
      "Week 1: Increased vitality and energy",
      "Week 2: Enhanced resilience to seasonal challenges",
      "Ongoing: Fewer sick days and faster recovery",
      "Long-term: Robust immune function and overall wellness",
    ],
    gradient: "from-secondary/20 to-gold/20",
  },
]

export function getProgramById(id: string): WellnessProgram | undefined {
  return wellnessPrograms.find((p) => p.id === id)
}
