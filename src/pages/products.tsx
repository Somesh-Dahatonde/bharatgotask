import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/product-list";
import { ProductFilters } from "../components/product-filters";
import {
  getAllProducts,
  getCategories,
  type Product,
  type Category,
} from "../lib/api";
import Loader from "../common/Loader";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const categoryId = searchParams.get("category")
    ? Number(searchParams.get("category"))
    : undefined;
  const minPrice = searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : undefined;
  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : undefined;
  const sort = searchParams.get("sort") as string | undefined;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(),
          getCategories(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching products data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter products based on search params
    let filtered = [...products];

    if (categoryId) {
      filtered = filtered.filter(
        (product) => product.category.id === categoryId
      );
    }

    if (minPrice) {
      filtered = filtered.filter((product) => product.price >= minPrice);
    }

    if (maxPrice) {
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    // Sort products
    if (sort) {
      switch (sort) {
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "name-asc":
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "name-desc":
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [products, categoryId, minPrice, maxPrice, sort]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        <ProductFilters categories={categories} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}
