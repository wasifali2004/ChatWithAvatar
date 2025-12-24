"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

type CartItem = {
  code: string
  name: string
  price: number
  quantity: number
  image: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void
  removeItem: (code: string) => void
  updateQuantity: (code: string, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const { toast } = useToast()

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addItem = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.code === item.code)
      if (existing) {
        toast({
          title: "Updated cart",
          description: `${item.name} quantity updated`,
        })
        return prev.map((i) => (i.code === item.code ? { ...i, quantity: i.quantity + quantity } : i))
      }
      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart`,
      })
      return [...prev, { ...item, quantity }]
    })
  }

  const removeItem = (code: string) => {
    setItems((prev) => prev.filter((i) => i.code !== code))
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    })
  }

  const updateQuantity = (code: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(code)
      return
    }
    setItems((prev) => prev.map((i) => (i.code === code ? { ...i, quantity } : i)))
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
