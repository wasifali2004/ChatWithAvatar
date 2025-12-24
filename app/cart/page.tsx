"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart();
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const subtotal = total;
  const shipping = subtotal >= 25 ? 0 : 5;
  const discount = appliedDiscount;
  const finalTotal = subtotal + shipping - discount;

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === "WELCOME10") {
      setAppliedDiscount(subtotal * 0.1);
    }
  };

  // Get recommended products (first 3 products not in cart)
  const recommendedProducts = products
    .filter((p) => !items.some((item) => item.code === p.code))
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-8">
            Shopping <span className="text-primary">Cart</span>
          </h1>

          {items.length === 0 ? (
            <Card className="text-center py-20">
              <CardContent>
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="font-sans text-2xl font-semibold text-foreground mb-2">
                  Your cart is empty
                </h2>
                <p className="text-muted-foreground mb-6">
                  Add some products to get started
                </p>
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item.code}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <Link href={`/product/${item.code}`}>
                            <h3 className="font-semibold text-foreground hover:text-primary transition-colors mb-1">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mb-3">
                            {item.code}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() =>
                                  updateQuantity(item.code, item.quantity - 1)
                                }
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-12 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() =>
                                  updateQuantity(item.code, item.quantity + 1)
                                }
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>

                            <div className="flex items-center gap-4">
                              <p className="text-lg font-bold text-foreground">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.code)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-32">
                  <CardContent className="p-6">
                    <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
                      Order Summary
                    </h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-foreground/80">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-foreground/80">
                        <span>Shipping</span>
                        <span>
                          {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-primary">
                          <span>Discount</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                    </div>

                    {subtotal < 25 && (
                      <div className="mb-6 p-3 bg-gold/10 border border-gold/20 rounded-lg text-sm">
                        <p className="text-foreground">
                          Add{" "}
                          <span className="font-semibold">
                            ${(25 - subtotal).toFixed(2)}
                          </span>{" "}
                          more for free shipping!
                        </p>
                      </div>
                    )}

                    <Separator className="my-6" />

                    <div className="flex justify-between text-lg font-bold text-foreground mb-6">
                      <span>Total</span>
                      <span>${finalTotal.toFixed(2)}</span>
                    </div>

                    {/* Discount Code */}
                    <div className="mb-6">
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Discount code"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <Button variant="outline" onClick={handleApplyDiscount}>
                          Apply
                        </Button>
                      </div>
                      {appliedDiscount > 0 && (
                        <Badge className="mt-2 bg-primary/10 text-primary">
                          Discount applied!
                        </Badge>
                      )}
                    </div>

                    <Link href="/checkout">
                      <Button
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Proceed to Checkout
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>

                    <Link href="/shop">
                      <Button variant="ghost" className="w-full mt-3">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Recommended Products */}
          {items.length > 0 && recommendedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="font-sans text-3xl font-bold text-foreground mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedProducts.map((product) => {
                  const { ProductCard } = require("@/components/product-card");
                  return <ProductCard key={product.code} product={product} />;
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
