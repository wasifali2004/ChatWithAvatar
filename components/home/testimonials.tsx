"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Yoga Instructor",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "The Ashwagandha has completely transformed my stress levels. I feel more balanced and energized throughout the day. The quality is exceptional!",
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "I've tried many moringa powders, but Nature's Essence is by far the best. The taste is pure and the energy boost is real. Highly recommended!",
  },
  {
    name: "Emma Rodriguez",
    role: "Nutritionist",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "As a health professional, I'm impressed by the transparency and quality. The lab testing reports give me confidence to recommend these products.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our wellness community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.image || "/placeholder.svg"}
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
