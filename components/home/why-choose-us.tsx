import { Shield, Leaf, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description:
      "Certified organic ingredients sourced directly from sustainable farms",
  },
  {
    icon: Shield,
    title: "Third-Party Tested",
    description:
      "Every batch tested for purity, potency, and safety in independent labs",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Traditional Ayurvedic formulations crafted with modern scientific backing",
  },
  {
    icon: Truck,
    title: "Free Shipping $25+",
    description: "Fast, reliable delivery with eco-friendly packaging",
  },
];

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
          Why Choose <span className="text-primary">Nature's Essence</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our commitment to purity, potency, and your wellbeing sets us apart
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
