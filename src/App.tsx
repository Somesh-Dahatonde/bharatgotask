import { Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { Layout } from "./components/layout";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import ProductDetailPage from "./pages/product-detail";
import CategoriesPage from "./pages/categories";
import CategoryDetailPage from "./pages/category-detail";
import CartPage from "./pages/cart";
import CheckoutSuccessPage from "./pages/checkout-success";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import SearchPage from "./pages/search";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/not-found";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:id" element={<CategoryDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout/success" element={<CheckoutSuccessPage />} />
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="auth/register" element={<RegisterPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
