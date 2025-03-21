import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-backgroundFeature">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover Amazing Products for Every Need
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Shop our curated collection of high-quality products at
              competitive prices. From electronics to fashion, we have
              everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center"
              >
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 z-10"></div>
              <img
                src="/heroimage.webp"
                alt="Featured products showcase"
                className="object-contain w-full h-full pt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
