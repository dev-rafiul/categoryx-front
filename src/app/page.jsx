export default function Home() {


 const items = [
  {
    id: 1,
    name: "MacBook Pro 14”",
    category: "Laptop",
    brand: "Apple",
    description: "Powerful laptop with M3 chip, Liquid Retina XDR display, and all-day battery life.",
    price: 1999,
    currency: "USD",
    stock: 12,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1649394233584-217c46cb9612?w=400"
  },
  {
    id: 2,
    name: "Dell XPS 13",
    category: "Laptop",
    brand: "Dell",
    description: "Ultra-thin premium laptop with InfinityEdge display and Intel Core i7 processor.",
    price: 1499,
    currency: "USD",
    stock: 8,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1720556405438-d67f0f9ecd44?w=400"
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    category: "Smartphone",
    brand: "Apple",
    description: "Latest iPhone with A17 chip, titanium body, and advanced camera system.",
    price: 1199,
    currency: "USD",
    stock: 20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1740650698612-786deca48ee1?w=400"
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphone",
    brand: "Samsung",
    description: "Flagship Android phone with 200MP camera, S-Pen, and massive AMOLED display.",
    price: 1299,
    currency: "USD",
    stock: 15,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=400"
  }
];





  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 py-80">
        <div className="container text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to CatalogX
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover amazing products and services in our comprehensive catalog. 
            Find exactly what you're looking for with ease.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn btn-primary text-lg px-8 py-3">
              Get Started
            </button>
            <button className="btn btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=" bg-white dark:bg-slate-900 py-80">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose CatalogX?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Easy Search</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find products quickly with our powerful search and filtering system.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Fast & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lightning-fast performance with 99.9% uptime guarantee.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your data is protected with enterprise-grade security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-50 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Browse Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Electronics', 'Fashion', 'Home & Garden', 'Sports'].map((category) => (
              <div key={category} className="card hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      {/* <section className="py-45 bg-white dark:bg-slate-900">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Popular Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item} className="card hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded mb-4"></div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Product {item}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Amazing product description that highlights key features.
                </p>
                <button className="btn btn-primary w-full">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}


{/* Popular Products Section */}
<section className="py-20 bg-white dark:bg-slate-900">
  <div className="container">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      Popular Products
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="card hover:shadow-xl transition-shadow"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="h-48 w-full object-cover rounded mb-4"
          />

          {/* Product Info */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {item.brand} • {item.category}
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {item.name}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {item.description}
          </p>

          {/* Price & Rating */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-blue-600">
              ${item.price}
            </span>
            <span className="text-sm text-yellow-500">
              ⭐ {item.rating}
            </span>
          </div>

          <button className="btn btn-primary w-full">
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
</section>





      {/* How It Works Section */}
      <section className="py-40 bg-blue-50 dark:bg-slate-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Browse', desc: 'Explore our vast catalog of products' },
              { step: '2', title: 'Compare', desc: 'Compare features and prices easily' },
              { step: '3', title: 'Choose', desc: 'Select the perfect product for you' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-49 bg-white dark:bg-slate-900">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Sarah Johnson', text: 'CatalogX made finding the perfect product so easy!' },
              { name: 'Mike Chen', text: 'Great selection and amazing user experience.' }
            ].map((testimonial) => (
              <div key={testimonial.name} className="card">
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-900 dark:text-white">
                  - {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied users today!
          </p>
          <button className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            Start Exploring
          </button>
        </div>
      </section>
    </div>
  );
}
