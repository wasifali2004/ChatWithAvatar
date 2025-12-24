import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Award, Globe, Users, Heart, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Story
            </Badge>
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Nature's Essence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bridging ancient Ayurvedic wisdom with modern wellness needs to
              bring you the purest organic products nature has to offer.
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-12 border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-sans text-2xl font-bold text-foreground mb-3">
                    Our Mission
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    At Nature's Essence, we believe wellness should be natural,
                    accessible, and effective. Our mission is to provide premium
                    organic wellness products that honor traditional Ayurvedic
                    practices while meeting the highest standards of modern
                    quality and safety. We source directly from organic farms,
                    ensuring every product maintains its natural potency and
                    purity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Story */}
          <div className="mb-16">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Nature's Essence was founded in 2018 by a team of wellness
                enthusiasts and Ayurvedic practitioners who saw a need for truly
                authentic, high-quality organic supplements in the modern
                wellness market. What started as a small operation sourcing
                Ashwagandha from family farms in India has grown into a trusted
                brand serving over 50,000 customers worldwide.
              </p>
              <p>
                Our journey began in the foothills of the Himalayas, where we
                discovered the incredible power of traditional herbs and
                botanicals. Working directly with organic farmers who have been
                cultivating these plants for generations, we built relationships
                based on trust, quality, and sustainability.
              </p>
              <p>
                Today, every product we offer reflects our commitment to purity,
                potency, and transparency. We third-party test every batch,
                maintain organic certifications, and never compromise on quality
                for profit.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: "Quality First",
                  description:
                    "Third-party tested, certified organic, and formulated with the highest grade ingredients available.",
                },
                {
                  icon: Globe,
                  title: "Sustainability",
                  description:
                    "Eco-friendly packaging, direct farm relationships, and practices that protect our planet for future generations.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description:
                    "Building a community of wellness seekers, supporting education, and giving back to the farmers who make it possible.",
                },
                {
                  icon: Heart,
                  title: "Transparency",
                  description:
                    "Clear labeling, honest communication, and full disclosure of sourcing, testing, and ingredients.",
                },
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={idx}
                    className="border-border hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-sans text-2xl font-bold text-foreground mb-3">
                  Certifications & Quality
                </h2>
                <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  Our commitment to quality is backed by rigorous certifications
                  and testing protocols
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    USDA Organic
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Certified organic by USDA standards
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Third-Party Tested
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Every batch tested in independent labs
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    India Organic
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Certified by India Organic standards
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
