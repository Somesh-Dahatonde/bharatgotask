import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, getRelatedProducts, type Product } from "../lib/api";
import { ProductGallery } from "../components/product-gallery";
import { AddToCartButton } from "../components/add-to-cart-button";
import { ProductTabs } from "../components/product-tabs";
import { RelatedProducts } from "../components/related-products";
import Loader from "../common/Loader";
import { IndianRupee } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id || isNaN(Number.parseInt(id))) {
          navigate("/not-found");
          return;
        }

        const productId = Number.parseInt(id);
        const productData = await getProductById(productId);

        if (!productData) {
          navigate("/not-found");
          return;
        }

        setProduct(productData);

        // Fetch related products
        const relatedData = await getRelatedProducts(
          productData.category.id,
          productId
        );
        setRelatedProducts(relatedData);
      } catch (error) {
        console.error("Error fetching product details:", error);
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

  if (!product) {
    return null; // This should not happen as we navigate away if product is not found
  }

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <ProductGallery images={product.images} />

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-muted-foreground">{product.category.name}</p>
          </div>

          <div>
            <span className="text-3xl font-bold">
              <IndianRupee className="inline" size={24} />
              {product.price.toFixed(2)}
            </span>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <AddToCartButton product={product} />
        </div>
      </div>

      <ProductTabs product={product} />

      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
