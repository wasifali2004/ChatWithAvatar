"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { wellnessPrograms } from "@/lib/wellness-programs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WellnessProgramsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Curated Wellness Solutions
              </span>
            </div>
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground mb-6">
              Wellness <span className="text-primary">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive wellness solutions combining our best products for
              targeted health goals. Each program is carefully designed with
              step-by-step guidance and expected results.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {wellnessPrograms.map((program) => (
              <Card
                key={program.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border"
              >
                <CardContent className="p-0">
                  <div
                    className={`h-32 bg-gradient-to-br ${program.gradient} p-6 flex items-center`}
                  >
                    <div>
                      <h2 className="font-sans text-2xl font-bold text-foreground mb-2">
                        {program.name}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {program.description}
                    </p>

                    {/* Products Included */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-foreground mb-3">
                        Includes:
                      </h3>
                      <div className="space-y-2">
                        {program.products.map((product) => (
                          <div
                            key={product.code}
                            className="flex items-center gap-2 text-sm"
                          >
                            <TrendingUp className="w-3 h-3 text-primary shrink-0" />
                            <span className="text-foreground/80">
                              {product.name}{" "}
                              {product.quantity > 1 && `(x${product.quantity})`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2 text-sm">
                        Key Benefits:
                      </h3>
                      <ul className="space-y-1">
                        {program.benefits.slice(0, 3).map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            <span className="text-foreground/70">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <p className="text-3xl font-bold text-foreground">
                          ${program.price}
                        </p>
                        {program.savings > 0 && (
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-sm text-muted-foreground line-through">
                              ${program.originalPrice}
                            </p>
                            <Badge className="bg-gold text-gold-foreground">
                              Save ${program.savings}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>

                    <Link href={`/wellness-programs/${program.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                        View Program Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Programs */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-sans text-3xl font-bold text-foreground mb-6 text-center">
                Why Choose Our Wellness Programs?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Expertly Curated
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Each program is designed by wellness experts combining
                    synergistic products for maximum benefits
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Proven Results
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Backed by traditional Ayurvedic wisdom and modern scientific
                    research
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Step-by-Step Guidance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Detailed schedules and instructions to help you stay on
                    track and achieve your goals
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
