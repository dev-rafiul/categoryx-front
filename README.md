# CatalogX - Next.js Product Catalog Application

A modern, responsive product catalog application built with Next.js 16, featuring authentication, product management, and a clean user interface.

## 🚀 Features

### Core Features
- **Landing Page**: 7 comprehensive sections showcasing the platform
- **Authentication**: Mock login system with cookie-based session management
- **Product Catalog**: Browse, search, and filter products
- **Product Details**: Detailed product information pages
- **Add Products**: Protected route for adding new items (requires login)
- **Responsive Design**: Mobile-first design with Tailwind CSS

### Technical Features
- Next.js 16 with App Router
- Server-side API with Express.js
- Cookie-based authentication
- Protected routes
- Real-time search and filtering
- Dark mode support
- Modern UI components

## 🛠️ Technologies Used

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4
- **Backend**: Express.js, Node.js
- **Authentication**: Cookie-based sessions
- **Styling**: Tailwind CSS with custom design system
- **Development**: ESLint, Concurrently

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd categoryx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development servers**
   ```bash
   # Start both Next.js and Express server
   npm run dev:full
   
   # Or start them separately:
   # Terminal 1: Start Express API server
   npm run server
   
   # Terminal 2: Start Next.js development server
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - API Server: http://localhost:5000

## 🔐 Authentication

The application uses mock authentication with hardcoded credentials:

- **Email**: admin@catalogx.com
- **Password**: 123456

## 📱 Pages & Routes

### Public Routes
- `/` - Landing page with 7 sections
- `/items` - Product catalog (publicly accessible)
- `/items/[id]` - Product details page
- `/login` - Authentication page

### Protected Routes
- `/add-item` - Add new products (requires authentication)

## 🎨 Design System

The application uses a custom design system built on Tailwind CSS with:
- Custom color palette with dark mode support
- Reusable component classes (btn, card, input, etc.)
- Responsive grid layouts
- Modern typography and spacing

## 🔧 API Endpoints

The Express server provides the following endpoints:

- `GET /items` - Fetch all items
- `GET /items/:id` - Fetch single item
- `POST /items` - Add new item
- `PUT /items/:id` - Update item
- `DELETE /items/:id` - Delete item
- `GET /health` - Health check

## 📁 Project Structure

```
src/
├── app/
│   ├── add-item/          # Add product page
│   ├── items/             # Product catalog
│   │   ├── [id]/          # Product details
│   │   ├── data.js        # Product data
│   │   └── page.jsx       # Catalog page
│   ├── login/             # Authentication
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Landing page
├── components/
│   ├── Footer.jsx         # Footer component
│   ├── Navbar.jsx         # Navigation
│   └── ProtectedRoute.jsx # Auth wrapper
└── lib/
    └── auth.js            # Auth utilities
```

## 🚀 Deployment

### Development
```bash
npm run dev:full
```

### Production
```bash
npm run build
npm start
```

## 🎯 Key Features Implemented

✅ **Landing Page**: 7 sections (Hero, Features, Categories, Products, How It Works, Testimonials, CTA)  
✅ **Authentication**: Mock login with cookie storage  
✅ **Protected Routes**: Add-item page requires authentication  
✅ **Product Catalog**: Search, filter, and sort functionality  
✅ **Product Details**: Comprehensive product information  
✅ **API Integration**: Express server for data management  
✅ **Responsive Design**: Mobile-first approach  
✅ **Dark Mode**: System preference detection  

## 🔄 Data Management

Products are stored in `src/app/items/data.js` and managed through the Express API. The API automatically reads from and writes to this file, providing persistence across server restarts.

## 🎨 Customization

The application uses CSS custom properties for theming. You can customize colors, spacing, and other design tokens in `src/app/globals.css`.

## 📝 License

This project is private and proprietary.

---

**Happy coding! 🎉**