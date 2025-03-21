// This file contains functions to interact with the Platzi Fake API
// API URL: https://api.escuelajs.co/api/v1

export interface Category {
  id: number
  name: string
  image: string
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
}

const API_URL = "https://api.escuelajs.co/api/v1"

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`)

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    const products = await response.json()
    return products
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

// Get featured products (limited to 8)
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products?offset=0&limit=8`)

    if (!response.ok) {
      throw new Error("Failed to fetch featured products")
    }

    const products = await response.json()
    return products
  } catch (error) {
    console.error("Error fetching featured products:", error)
    return []
  }
}

// Get product by ID
export async function getProductById(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/products/${id}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID: ${id}`)
    }

    const product = await response.json()
    return product
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error)
    return null
  }
}

// Get all categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_URL}/categories`)

    if (!response.ok) {
      throw new Error("Failed to fetch categories")
    }

    const categories = await response.json()
    return categories
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

// Get products by category ID
export async function getProductsByCategory(categoryId: number): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/categories/${categoryId}/products`)

    if (!response.ok) {
      throw new Error(`Failed to fetch products for category ID: ${categoryId}`)
    }

    const products = await response.json()
    return products
  } catch (error) {
    console.error(`Error fetching products for category ID ${categoryId}:`, error)
    return []
  }
}

// Get related products (products in the same category, excluding the current product)
export async function getRelatedProducts(categoryId: number, currentProductId: number): Promise<Product[]> {
  try {
    const products = await getProductsByCategory(categoryId)
    return products.filter((product) => product.id !== currentProductId).slice(0, 4)
  } catch (error) {
    console.error("Error fetching related products:", error)
    return []
  }
}

// Search products
export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products/?title=${query}`)

    if (!response.ok) {
      throw new Error(`Failed to search products with query: ${query}`)
    }

    const products = await response.json()
    return products
  } catch (error) {
    console.error(`Error searching products with query ${query}:`, error)
    return []
  }
}

