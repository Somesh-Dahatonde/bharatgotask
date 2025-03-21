import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Trash2, ShoppingBag, ArrowRight, IndianRupee } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart before checking out.",
        type: "background",
      });
      return;
    }

    setIsCheckingOut(true);

    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      navigate("/checkout/success");
    }, 1500);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-lg font-medium">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button
            asChild
            className="px-4 py-2 bg-indigo-600 text-white rounded-md mt-8 hover:bg-indigo-700"
          >
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-medium mb-4">Shopping Cart</h2>

                <div className="divide-y">
                  {cart.map((item) => (
                    <div key={item.id} className="py-4 flex items-center gap-4">
                      <div className="w-20 h-20 relative rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={
                            item.images[0] ||
                            "/placeholder.svg?height=80&width=80"
                          }
                          alt={item.title}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.category.name}
                        </p>
                        <p className="text-sm font-medium flex flex-row items-center">
                          <IndianRupee size={14} />
                          {item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-20">
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                Number.parseInt(e.target.value)
                              )
                            }
                            className="h-8"
                          />
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="flex flex-row items-center">
                      {" "}
                      <IndianRupee className="w-4 h-4" />
                      {subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="flex flex-row items-center">
                      {" "}
                      <IndianRupee className="w-4 h-4" />
                      {shipping.toFixed(2)}
                    </span>
                  </div>

                  <div className="border-t pt-4 flex justify-between font-medium">
                    <span>Total</span>
                    <span className="flex flex-row items-center">
                      {" "}
                      <IndianRupee className="w-4 h-4" />
                      {total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center w-full mt-6 hover:bg-indigo-700"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Processing..." : "Checkout"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4" asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
