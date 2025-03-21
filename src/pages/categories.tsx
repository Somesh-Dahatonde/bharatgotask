import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, type Category } from "../lib/api";
import { Card, CardContent } from "../components/ui/card";
import Loader from "../common/Loader";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
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
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">All Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} to={`/categories/${category.id}`}>
            <Card className="overflow-hidden h-full transition-all hover:shadow-md">
              <div className="aspect-square relative">
                <img
                  src={
                    category.image || "/placeholder.svg?height=300&width=300"
                  }
                  alt={category.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-center text-lg">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
