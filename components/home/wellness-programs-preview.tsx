"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: 1,
    name: "Stress Relief Program",
    duration: "30 Days",
    price: 50.47,
    savings: 5,
    products: ["Ashwagandha", "Himalayan Tea", "Lavender Oil"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: 2,
    name: "Energy & Vitality Boost",
    duration: "60 Days",
    price: 32.97,
    savings: 0,
    products: ["Moringa Powder", "Ashwagandha", "Golden Milk"],
    gradient: "from-gold/20 to-secondary/20",
  },
  {
    id: 3,
    name: "Digestive Health Reset",
    duration: "45 Days",
    price: 31.77,
    savings: 0,
    products: ["Triphala", "Turmeric Blend", "Himalayan Tea"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    id: 4,
    name: "Immunity Booster",
    duration: "Seasonal",
    price: 30.57,
    savings: 0,
    products: ["Tulsi Tea", "Moringa", "Turmeric"],
    gradient: "from-secondary/20 to-gold/20",
  },
];

export function WellnessProgramsPreview() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
            Curated <span className="text-primary">Wellness Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive wellness solutions combining our best products for
            targeted health goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {programs.map((program) => (
            <Card
              key={program.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border animate-breathe"
              style={{ animationDelay: `${program.id * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div
                  className={`h-2 w-16 rounded-full bg-gradient-to-r ${program.gradient} mb-4`}
                />

                <h3 className="font-sans text-xl font-semibold text-foreground mb-3">
                  {program.name}
                </h3>

                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>

                <div className="space-y-2 mb-4">
                  {program.products.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <span>{product}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex items-end gap-2 mb-3">
                    <p className="text-2xl font-bold text-foreground">
                      ${program.price}
                    </p>
                    {program.savings > 0 && (
                      <Badge className="bg-gold text-gold-foreground">
                        Save ${program.savings}
                      </Badge>
                    )}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                    View Program
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/wellness-programs">
            <Button
              size="lg"
              variant="outline"
              className="border-2 bg-transparent"
            >
              Explore All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
