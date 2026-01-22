import Link from "next/link";

import img from "../../public/nordwood-themes-kRNZiGKtz48-unsplash.jpg";



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
    <div className="min-h-screen bg-[#E1D9BC]">
      
        <div
  className="relative py-95 bg-cover bg-center"
  style={{ backgroundImage: `url(${img.src})` }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative text-center z-10">
    <h1 className="text-5xl font-semibold mb-6 text-[#E1D9BC]">
      Welcome to Category <span className="font-bold text-[#1E2939]">X</span> 
    </h1>

    <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
     Latest gadgets and electronic devices including smartphones, laptops, accessories, and smart home technology designed to make life easier and more connected.
    </p>

    <div className="flex gap-4 justify-center">
      <Link href={"/items"} className="btn">All Items</Link>
      <Link href={"/add-item"} className="btn btn-ghost">Add-Item</Link>
    </div>
  </div>
</div>

      
      

      <section className="bg-[#F7F6F2] dark:bg-slate-900 py-32">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-gray-900 dark:text-[#E1D9BC]">
      Why Choose CatalogX?
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      
      <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-5 text-blue-600">🔍</div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          Easy Search
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Quickly find exactly what you need with advanced search and smart filtering options.
        </p>
      </div>

      
      <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-5 text-blue-600">⚡</div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          Fast & Reliable
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Optimized performance with reliable infrastructure to ensure smooth and fast access.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-5 text-blue-600">🛡️</div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          Secure Platform
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Enterprise-grade security to protect your data and ensure complete privacy.
        </p>
      </div>
    </div>
  </div>
</section>


   {/* Categories Section */}
<section className="py-28 bg-[#F7F6F2] dark:bg-slate-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900 dark:text-[#E1D9BC]">
      Browse Categories
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          name: 'Electronics',
          desc: 'Smart devices, gadgets, and accessories'
        },
        {
          name: 'Fashion',
          desc: 'Clothing, footwear, and lifestyle trends'
        },
        {
          name: 'Home & Garden',
          desc: 'Furniture, décor, and home essentials'
        },
        {
          name: 'Sports',
          desc: 'Gear and equipment for active lifestyles'
        }
      ].map((category) => (
        <div
          key={category.name}
          className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition cursor-pointer"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {category.name}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            {category.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>




<section className="py-28 bg-[#F7F6F2] dark:bg-slate-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900 dark:text-[#E1D9BC]">
      Popular Products
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
        >
          {/* Image */}
          <div className="h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
              {item.brand} • {item.category}
            </p>

            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              {item.name}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>

            {/* Price & Rating */}
            <div className="flex justify-between items-center mb-5">
              <span className="text-lg font-semibold text-blue-600">
                ${item.price}
              </span>
              <span className="text-sm text-yellow-500 font-medium">
                ★ {item.rating}
              </span>
            </div>

            <Link
              href={`/items/${item.id}`}
              className="block text-center border border-blue-600 text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




<section className="py-32 bg-[#F7F6F2] dark:bg-slate-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900 dark:text-[#E1D9BC]">
      How It Works
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      {[
        {
          step: '01',
          title: 'Browse Products',
          desc: 'Explore a curated catalog of high-quality products across multiple categories.'
        },
        {
          step: '02',
          title: 'Compare Options',
          desc: 'Evaluate features, pricing, and ratings to make informed decisions.'
        },
        {
          step: '03',
          title: 'Choose Confidently',
          desc: 'Select the product that best matches your needs and preferences.'
        }
      ].map((item) => (
        <div
          key={item.step}
          className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
        >
          <div className="text-blue-600 text-sm font-semibold mb-4 tracking-wide">
            STEP {item.step}
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            {item.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      

     <section className="py-32 bg-white dark:bg-slate-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900 dark:text-[#E1D9BC]">
      What Our Users Say
    </h2>

    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {[
        {
          name: 'Sarah Johnson',
          role: 'Product Manager',
          text: 'CatalogX simplifies product discovery and comparison. It has become an essential tool for our team.'
        },
        {
          name: 'Mike Chen',
          role: 'Tech Enthusiast',
          text: 'Clean interface, fast performance, and accurate information. Highly recommended.'
        }
      ].map((testimonial) => (
        <div
          key={testimonial.name}
          className="bg-[#F7F6F2] dark:bg-slate-800 rounded-xl p-8 shadow-sm"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            “{testimonial.text}”
          </p>

          <div className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.role}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-24 bg-[#1E3A8A] text-white">
  <div className="container mx-auto px-4 text-center max-w-3xl">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
      Ready to Get Started?
    </h2>

    <p className="text-lg mb-10 opacity-90">
      Discover, compare, and choose products with confidence using CatalogX.
    </p>

    <button className="bg-white text-[#1E3A8A] font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition">
      Start Exploring
    </button>
  </div>
</section>

    </div>
  );
}
