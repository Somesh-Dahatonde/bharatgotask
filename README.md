## 📋 Overview

BharatGo is a modern, feature-rich e-commerce platform built with React.js. It provides a seamless shopping experience with a responsive design, intuitive user interface, and comprehensive product management capabilities. This platform is designed to showcase products from various categories, handle user authentication, manage shopping carts, and process orders efficiently.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Product Catalog**: Browse products with filtering and sorting options
- **Category Management**: Products organized by categories for easy navigation
- **User Authentication**: Secure login and registration system
- **Shopping Cart**: Add, remove, and update product quantities
- **Order Processing**: Complete checkout flow with order confirmation
- **Theme Switching**: Toggle between light and dark modes
- **Search Functionality**: Find products quickly with the search feature
- **Wishlist**: Save products for later purchase

## 🛠️ Technologies Used

- **Frontend Framework**: React.js
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom theming
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Context API
- **HTTP Client**: Native Fetch API
- **Animation**: Tailwind CSS Animate

## 📦 Installation

### Prerequisites

- Node.js (v17 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**

```shellscript
git clone https://github.com/Somesh-Dahatonde/bharatgotask
cd bharatgo
```

2. **Install dependencies**

```shellscript
npm install
```

3. **Start the development server**

```shellscript
npm start
```

The application will be available at `http://localhost:3000`.

## 🚀 Usage

### Development

```shellscript
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
REACT_APP_API_URL=https://api.escuelajs.co/api/v1
```

## 📁 Project Structure

```plaintext
bharatgo/
├── public/                  # Static files
│   ├── index.html           # HTML template
│   └── ...
├── src/                     # Source code
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Base UI components
│   │   └── ...
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions and API
│   ├── pages/               # Page components
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Application entry point
│   └── index.css            # Global styles
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── tsconfig.json            # TypeScript configuration
```

## 🔍 Key Components

### Core Components

- **Header**: Navigation and search functionality
- **Footer**: Site information and links
- **ProductCard**: Displays product information
- **ProductList**: Renders a grid of product cards
- **ProductFilters**: Filtering and sorting options
- **ShoppingCart**: Cart management interface
- **AuthForms**: Login and registration forms

### Context Providers

- **CartProvider**: Manages shopping cart state
- **AuthProvider**: Handles user authentication
- **ThemeProvider**: Controls theme preferences

## 🌐 API Integration

BharatGo integrates with the Platzi Fake Store API to fetch product data. The API endpoints are:

- `GET /products`: Fetch all products
- `GET /products/{id}`: Fetch a specific product
- `GET /categories`: Fetch all categories
- `GET /categories/{id}/products`: Fetch products by category
- `GET /products?title={query}`: Search products by title

## 🤝 Contributing

We welcome contributions to BharatGo! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## 📞 Contact

For questions or support, please contact us at:

- Email: [sddahatonde22@gmail.com](mailto:sddahatonde22@gmail.com)
- Website: [www.somehsdahatonde.me](https://www.someshdahatonde.me)

---

© 2024 BharatGo. All Rights Reserved.
