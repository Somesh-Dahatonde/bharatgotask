import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../hooks/use-toast";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ShoppingCart, IndianRupee } from "lucide-react";
import type { Product } from "../lib/api";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);

    addToCart(product);
    setIsLoading(false);

    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
      variant: "success",
    });
  };

  return (
    <Card className="overflow-hidden group border-none">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.images[0] || "/placeholder.svg?height=400&width=400"}
            alt={product.title}
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-lg truncate">{product.title}</h3>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold flex fle-row justify-center items-center">
            <IndianRupee className="w-4 h-4" />
            {product.price.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">
            {product.category.name}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center w-full hover:bg-indigo-700"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
