import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Package,
  RotateCcw,
  Shield,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
              Shipping & <span className="text-primary">Returns</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about delivery and our return policy
            </p>
          </div>

          {/* Shipping Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-6 h-6 text-primary" />
              <h2 className="font-sans text-3xl font-bold text-foreground">
                Shipping Information
              </h2>
            </div>

            <Card className="mb-6 border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Delivery Timelines & Charges
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <Package className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-foreground">
                          Standard Shipping
                        </p>
                        <Badge className="bg-gold text-gold-foreground">
                          FREE over $25
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground/80 mb-1">
                        Delivery in 4-6 business days
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Orders under $25: $5.00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <Package className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground mb-1">
                        Express Shipping
                      </p>
                      <p className="text-sm text-foreground/80 mb-1">
                        Delivery in 2-3 business days
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Flat rate: $15.00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <Package className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground mb-1">
                        International Shipping
                      </p>
                      <p className="text-sm text-foreground/80 mb-1">
                        Delivery in 10-15 business days
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Calculated at checkout (typically $25+)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Processing Time
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      All orders are processed within 1-2 business days
                      (Monday-Friday, excluding holidays). You'll receive a
                      tracking number via email once your order ships. Please
                      allow an additional 1-2 days for your tracking information
                      to update.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Returns Policy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <RotateCcw className="w-6 h-6 text-primary" />
              <h2 className="font-sans text-3xl font-bold text-foreground">
                Return Policy
              </h2>
            </div>

            <Card className="border-border mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-6">
                  <Shield className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      30-Day Money-Back Guarantee
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      We stand behind the quality of our products. If you're not
                      completely satisfied with your purchase, you can return it
                      within 30 days for a full refund or exchange.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Eligibility Criteria:
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Items must be returned within 30 days of delivery
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Products must be unopened and in original packaging
                          for full refund
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Opened products eligible for return if there's a
                          quality issue
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Items must be in resalable condition</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Return Process:
                    </h4>
                    <ol className="space-y-2 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">1.</span>
                        <span>
                          Contact our customer service at
                          support@naturesessence.com
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">2.</span>
                        <span>
                          Receive your Return Authorization (RA) number
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">3.</span>
                        <span>Pack items securely with RA number visible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">4.</span>
                        <span>
                          Ship to the address provided (customer responsible for
                          return shipping)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">5.</span>
                        <span>
                          Refund processed within 5-7 business days of receiving
                          your return
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Non-Returnable Items:
                    </h3>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span>Opened products without quality issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span>
                          Products purchased during final sale or clearance
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span>Items damaged due to misuse or accidents</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Questions About Shipping or Returns?
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our customer service team is here to help. Contact us at
                support@naturesessence.com or call{" "}
                <span className="font-semibold">+1 (555) 123-4567</span> during
                business hours.
              </p>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9am - 6pm EST | Saturday: 10am - 4pm EST
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
