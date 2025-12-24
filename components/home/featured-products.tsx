"use client";

import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export function FeaturedProducts() {
  // Show first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
          Best Selling <span className="text-primary">Wellness Essentials</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Handpicked premium organic products to support your journey to natural
          wellness
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </section>
  );
}
