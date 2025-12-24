"use client";

import { Label } from "@/components/ui/label";

import { use } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getProductByCode, getRelatedProducts } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Star,
  ShoppingCart,
  Minus,
  Plus,
  AlertTriangle,
  Award,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { notFound } from "next/navigation";

export default function ProductPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const resolvedParams = use(params);
  const product = getProductByCode(resolvedParams.code);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.relatedProducts);

  const handleAddToCart = () => {
    addItem(
      {
        code: product.code,
        name: product.name,
        price: product.price,
        image: product.images[0],
      },
      quantity
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Images */}
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-muted">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.certifications.includes("USDA Organic") && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    USDA Organic
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                {product.code}
              </p>
              <h1 className="font-sans text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-gold text-gold"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-foreground mb-2">
                  ${product.price}
                  <span className="text-lg font-normal text-muted-foreground ml-2">
                    {product.currency}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {product.package}
                </p>
              </div>

              {/* Stock Status */}
              {product.inStock ? (
                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary/10 text-primary"
                >
                  In Stock
                </Badge>
              ) : (
                <Badge
                  variant="secondary"
                  className="mb-6 bg-destructive/10 text-destructive"
                >
                  Out of Stock
                </Badge>
              )}

              {/* Description */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.certifications.map((cert) => (
                  <Badge key={cert} variant="outline" className="gap-1">
                    <Award className="w-3 h-3" />
                    {cert}
                  </Badge>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <Label className="text-sm font-semibold mb-2 block">
                  Quantity
                </Label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!product.inStock}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-lg font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!product.inStock}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-4"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">
                    30-Day Guarantee
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Lab Tested</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <Tabs defaultValue="description" className="mb-20">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="contraindications">Safety</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-foreground/80 leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-foreground/80 leading-relaxed">
                    {product.usage}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {product.ingredients.map((ingredient, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-foreground">
                            {ingredient.name}
                          </span>
                          <span className="text-muted-foreground">
                            {ingredient.percentage}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${ingredient.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contraindications" className="mt-6">
              <Alert className="border-destructive/50 bg-destructive/5">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <AlertDescription>
                  <p className="font-semibold mb-3 text-destructive">
                    Important Safety Information
                  </p>
                  <ul className="space-y-2">
                    {product.contraindications.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Always consult with a qualified healthcare professional
                    before starting any new supplement regimen.
                  </p>
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-sans text-3xl font-bold text-foreground mb-8">
                Recommended Combinations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <ProductCard key={related.code} product={related} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
