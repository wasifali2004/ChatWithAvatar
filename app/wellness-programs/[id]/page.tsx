"use client";

import { use } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getProgramById } from "@/lib/wellness-programs";
import { getProductByCode } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  CheckCircle,
  ShoppingCart,
  Calendar,
  TrendingUp,
  Package,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { notFound } from "next/navigation";

export default function ProgramDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const program = getProgramById(resolvedParams.id);
  const { addItem } = useCart();

  if (!program) {
    notFound();
  }

  const handleAddProgramToCart = () => {
    program.products.forEach((programProduct) => {
      const product = getProductByCode(programProduct.code);
      if (product) {
        addItem(
          {
            code: product.code,
            name: product.name,
            price: product.price,
            image: product.images[0],
          },
          programProduct.quantity
        );
      }
    });
  };

  const programProducts = program.products
    .map((p) => getProductByCode(p.code))
    .filter((p) => p !== undefined);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div
            className={`rounded-3xl bg-gradient-to-br ${program.gradient} p-8 md:p-12 mb-12`}
          >
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                Wellness Program
              </Badge>
              <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
                {program.name}
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{program.duration}</span>
                </div>
                <Separator
                  orientation="vertical"
                  className="h-6 bg-foreground/20"
                />
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-foreground/80" />
                  <span className="text-foreground/80 font-medium">
                    {program.products.length} Products
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Products Included */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-sans text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Package className="w-6 h-6 text-primary" />
                    Products Included
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programProducts.map((product) => (
                      <Link
                        key={product.code}
                        href={`/product/${product.code}`}
                      >
                        <div className="flex gap-3 p-3 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                          <div className="relative w-16 h-16 rounded bg-muted shrink-0">
                            <Image
                              src={product.images[0] || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground text-sm mb-1 line-clamp-2">
                              {product.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tabs */}
              <Tabs defaultValue="benefits" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                </TabsList>

                <TabsContent value="benefits" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/80">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="schedule" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        Program Schedule
                      </h3>
                      <div className="space-y-4">
                        {program.schedule.map((phase, idx) => (
                          <div
                            key={idx}
                            className="border-l-4 border-primary pl-4"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-primary" />
                              <h4 className="font-semibold text-foreground">
                                {phase.week}
                              </h4>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">
                              {phase.instructions}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="results" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        Expected Results Timeline
                      </h3>
                      <div className="space-y-4">
                        {program.expectedResults.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <TrendingUp className="w-4 h-4 text-primary" />
                            </div>
                            <p className="text-foreground/80 pt-1">{result}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-32">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Program Investment
                    </p>
                    <div className="flex items-end gap-2">
                      <p className="text-4xl font-bold text-foreground">
                        ${program.price}
                      </p>
                      {program.savings > 0 && (
                        <p className="text-lg text-muted-foreground line-through mb-1">
                          ${program.originalPrice}
                        </p>
                      )}
                    </div>
                    {program.savings > 0 && (
                      <Badge className="mt-2 bg-gold text-gold-foreground">
                        Save ${program.savings}
                      </Badge>
                    )}
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-foreground/80">
                        Free shipping over $25
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-foreground/80">
                        30-day money-back guarantee
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-foreground/80">
                        Expert guidance included
                      </span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    onClick={handleAddProgramToCart}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add Program to Cart
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    All products will be added to your cart individually
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
