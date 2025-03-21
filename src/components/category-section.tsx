import { Link } from "react-router-dom"
import { Card, CardContent } from "./ui/card"
import type { Category } from "../lib/api"

interface CategorySectionProps {
  categories: Category[]
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="container py-12 space-y-6 bg-background">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
        <Link to="/categories" className="text-primary hover:underline">
          View all categories
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link key={category.id} to={`/categories/${category.id}`}>
            <Card className="overflow-hidden h-full transition-all hover:shadow-md">
              <div className="aspect-square relative">
                <img
                  src={category.image || "/placeholder.svg?height=200&width=200"}
                  alt={category.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-center">{category.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

