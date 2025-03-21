import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="container max-w-md py-16">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold">Order Successful!</h1>

        <p className="text-muted-foreground">
          Thank you for your purchase. Your order has been processed
          successfully.
        </p>

        <div className="rounded-lg border p-6 text-left space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Order Number:</span>
            <span>ORD-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Payment Method:</span>
            <span>Credit Card</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            asChild
            className="px-4 py-2 bg-indigo-600 text-white rounded-md  hover:bg-indigo-700"
          >
            <Link to="/products">Continue Shopping</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
