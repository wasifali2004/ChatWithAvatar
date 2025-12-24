"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, HelpCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "Product Quality",
    questions: [
      {
        q: "Are your products really 100% organic?",
        a: "Yes! All our products are certified USDA Organic and India Organic. We source directly from certified organic farms and maintain strict quality control throughout the supply chain. Each batch is tested by independent third-party labs to verify purity and organic status.",
      },
      {
        q: "How do you ensure product potency and purity?",
        a: "Every batch undergoes rigorous third-party testing for potency, purity, heavy metals, pesticides, and microbial contamination. We provide certificates of analysis upon request and maintain full traceability from farm to bottle.",
      },
      {
        q: "What makes your products different from others?",
        a: "We combine traditional Ayurvedic wisdom with modern quality standards. Our direct relationships with organic farmers, commitment to sustainable practices, and transparent testing protocols set us apart. We never use fillers, artificial ingredients, or compromise on quality.",
      },
    ],
  },
  {
    category: "Usage Questions",
    questions: [
      {
        q: "How long does it take to see results?",
        a: "Results vary by individual and product. Most customers notice initial benefits within 2-4 weeks of consistent use. For optimal results, we recommend following our wellness programs for the full duration (30-60 days) as traditional herbs work best with consistent, long-term use.",
      },
      {
        q: "Can I take multiple products together?",
        a: "Yes, most of our products are designed to work synergistically. Our wellness programs combine multiple products for enhanced benefits. However, we recommend starting with one product at a time and consulting with a healthcare provider if you have specific health concerns or take medications.",
      },
      {
        q: "What's the best time to take supplements?",
        a: "Timing depends on the product. Ashwagandha and calming products are best taken in the evening, while energy-boosting products like Moringa work well in the morning. Digestive supplements like Triphala are most effective when taken before bed. Check individual product labels for specific recommendations.",
      },
    ],
  },
  {
    category: "Safety Concerns",
    questions: [
      {
        q: "Are there any side effects?",
        a: "Our products are generally well-tolerated when used as directed. Some individuals may experience mild digestive changes initially. Each product page includes detailed contraindications and safety information. Always start with the lowest recommended dose and consult a healthcare provider if you have concerns.",
      },
      {
        q: "Can I take these products if I'm on medication?",
        a: "Some herbs may interact with medications. We provide detailed contraindication information on each product page. Always consult your healthcare provider before starting any new supplement, especially if you take prescription medications, are pregnant, nursing, or have a medical condition.",
      },
      {
        q: "Are your products safe for pregnant or nursing women?",
        a: "We do not recommend most herbal supplements during pregnancy or nursing without explicit approval from your healthcare provider. Some products are specifically contraindicated during pregnancy. Please consult with your doctor before use.",
      },
    ],
  },
  {
    category: "Orders & Delivery",
    questions: [
      {
        q: "What are your shipping options?",
        a: "We offer Standard (4-6 days, FREE over $25), Express (2-3 days, $15), and International shipping (10-15 days, $25). Orders are processed within 1-2 business days. You'll receive tracking information via email once your order ships.",
      },
      {
        q: "What is your return policy?",
        a: "We offer a 30-day money-back guarantee. If you're not completely satisfied, return unopened products within 30 days for a full refund. Opened products can be returned if there's a quality issue. See our Shipping & Returns page for complete details.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to most countries worldwide. International shipping takes 10-15 business days. Please note that international customers are responsible for any customs duties or taxes. Some products may be restricted in certain countries.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our products and services
            </p>
          </div>

          {/* Search */}
          <div className="mb-12">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-8">
            {filteredFaqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="font-sans text-2xl font-bold text-foreground mb-4">
                  {category.category}
                </h2>
                <Card className="border-border">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, qIdx) => (
                        <AccordionItem
                          key={qIdx}
                          value={`item-${idx}-${qIdx}`}
                          className="border-b last:border-0 px-6"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            <span className="font-semibold text-foreground pr-4">
                              {item.q}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-foreground/80 leading-relaxed pb-4">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  No questions found matching your search
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Still Have Questions */}
          <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-border">
            <CardContent className="p-8 text-center">
              <h3 className="font-sans text-2xl font-bold text-foreground mb-3">
                Still Have Questions?
              </h3>
              <p className="text-foreground/80 mb-6">
                Our wellness support team is here to help you find the right
                products for your needs
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Contact Support
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
