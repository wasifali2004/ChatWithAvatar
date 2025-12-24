"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      code: product.code,
      name: product.name,
      price: product.price,
      image: product.images[0],
    })
  }

  return (
    <Link href={`/product/${product.code}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border h-full">
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                <Badge variant="secondary">Out of Stock</Badge>
              </div>
            )}
            {product.certifications.includes("USDA Organic") && (
              <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Organic</Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            <p className="text-xs text-muted-foreground mb-1">{product.code}</p>
            <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "fill-gold text-gold" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
            </div>

            {/* Price and Action */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">
                  ${product.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">{product.currency}</span>
                </p>
              </div>
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
