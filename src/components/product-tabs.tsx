import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import type { Product } from "../lib/api"

interface ProductTabsProps {
  product: Product
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="my-12">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="py-4">
        <div className="prose max-w-none">
          <p>{product.description}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl
            nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl
            nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="specifications" className="py-4">
        <div className="prose max-w-none">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-medium">Category</td>
                <td>{product.category.name}</td>
              </tr>
              <tr>
                <td className="font-medium">Brand</td>
                <td>Platzi Store</td>
              </tr>
              <tr>
                <td className="font-medium">Material</td>
                <td>Premium Quality</td>
              </tr>
              <tr>
                <td className="font-medium">Weight</td>
                <td>0.5 kg</td>
              </tr>
              <tr>
                <td className="font-medium">Dimensions</td>
                <td>10 x 10 x 10 cm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="py-4">
        <div className="space-y-4">
          <p className="text-muted-foreground">No reviews yet. Be the first to review this product.</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

