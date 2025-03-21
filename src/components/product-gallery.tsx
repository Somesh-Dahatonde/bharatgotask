import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Use placeholder if no images are provided
  const displayImages =
    images.length > 0 ? images : ["/placeholder.svg?height=600&width=600"];

  return (
    <div className="space-y-4">
      <div className="aspect-square relative rounded-lg overflow-hidden border">
        <img
          src={displayImages[selectedImage] || "/placeholder.svg"}
          alt="Product"
          className="object-cover w-full h-full"
        />
      </div>

      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-auto pb-2">
          {displayImages.map((image, index) => (
            <button
              key={index}
              className={`relative w-20 h-20 rounded-md overflow-hidden border ${
                selectedImage === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
