import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ShoppingCart, Heart } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useCart } from "../context/CartContext";
import type { Product } from "../lib/api";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    setIsLoading(true);
    // Add product to cart with quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsLoading(false);
    toast({
      title: "Added to cart",
      description: `${quantity} ${
        quantity === 1 ? "item" : "items"
      } added to your cart.`,
      variant: "success",
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.title} has been added to your wishlist.`,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-24">
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>

        <Button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center flex-1 hover:bg-indigo-700"
          disabled={isLoading}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to cart
        </Button>

        <Button variant="outline" size="icon" onClick={handleAddToWishlist}>
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
    </div>
  );
}
