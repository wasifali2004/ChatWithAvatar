"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description:
          "Welcome to our wellness community. Check your inbox for a special welcome offer.",
      });
      setEmail("");
    }
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm border border-border">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
          <Leaf className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
          Join Our Wellness Community
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Get exclusive wellness tips, Ayurvedic wisdom, and special offers
          delivered to your inbox
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button
            type="submit"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          Join 50,000+ subscribers. Unsubscribe anytime. We respect your
          privacy.
        </p>
      </div>
    </section>
  );
}
