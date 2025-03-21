import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getCategories,
  getProductsByCategory,
  type Product,
  type Category,
} from "../lib/api";
import { ProductList } from "../components/product-list";
import Loader from "../common/Loader";

export default function CategoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id || isNaN(Number.parseInt(id))) {
          navigate("/not-found");
          return;
        }

        const categoryId = Number.parseInt(id);

        // Get all categories to find the current one
        const categories = await getCategories();
        const currentCategory = categories.find((cat) => cat.id === categoryId);

        if (!currentCategory) {
          navigate("/not-found");
          return;
        }

        setCategory(currentCategory);

        // Get products for this category
        const categoryProducts = await getProductsByCategory(categoryId);
        setProducts(categoryProducts);
      } catch (error) {
        console.error("Error fetching category details:", error);
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (loading) {
    return <Loader />;
  }

  if (!category) {
    return null; // This should not happen as we navigate away if category is not found
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
      <p className="text-muted-foreground mb-6">
        Browse our collection of {category.name.toLowerCase()} products
      </p>

      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-muted-foreground mt-2">
            We're currently updating our inventory. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
}
