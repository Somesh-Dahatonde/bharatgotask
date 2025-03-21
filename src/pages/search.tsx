import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/product-list";
import { searchProducts, type Product } from "../lib/api";
import Loader from "../common/Loader";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (query) {
          const results = await searchProducts(query);
          setProducts(results);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error searching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Search Results</h1>
      <p className="text-muted-foreground mb-6">
        {products.length} results for "{query}"
      </p>

      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-muted-foreground mt-2">
            Try searching with different keywords or browse our categories.
          </p>
        </div>
      )}
    </div>
  );
}
