import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/product-card";
import { HeroSection } from "../components/hero-section";
import { CategorySection } from "../components/category-section";
import {
  getFeaturedProducts,
  getCategories,
  type Product,
  type Category,
} from "../lib/api";
import Loader from "../common/Loader";

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getFeaturedProducts(),
          getCategories(),
        ]);

        setFeaturedProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching home page data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container py-12 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Products
          </h2>
          <Link to="/products" className="text-primary hover:underline">
            View all products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CategorySection categories={categories} />
    </main>
  );
}
