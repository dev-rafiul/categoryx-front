import Link from "next/link";

// 🔹 Local Items Data (NO FETCH NEEDED)
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
    image: "https://images.unsplash.com/photo-1649394233584-217c46cb9612?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9vayUyMDE0cHJvfGVufDB8fDB8fHww"
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
    image: "https://images.unsplash.com/photo-1720556405438-d67f0f9ecd44?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsbCUyMHhwcyUyMDEzfGVufDB8fDB8fHww"
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
    image: "https://images.unsplash.com/photo-1740650698612-786deca48ee1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTVwcm98ZW58MHx8MHx8fDA%3D"
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
    image: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMHMyNHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    brand: "Sony",
    description: "Industry-leading noise canceling headphones with premium sound quality.",
    price: 399,
    currency: "USD",
    stock: 25,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1550009158-baab1dbdb5cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvbnklMjB3aCUyMGhlYWRwb25lc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    category: "Smartwatch",
    brand: "Apple",
    description: "Advanced health tracking smartwatch with always-on Retina display.",
    price: 499,
    currency: "USD",
    stock: 18,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 7,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    brand: "Logitech",
    description: "Ergonomic wireless mouse with ultra-fast scrolling and silent clicks.",
    price: 129,
    currency: "USD",
    stock: 30,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1697205784398-bb453b1b16d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9naXRlY2h8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    name: "iPad Air (5th Gen)",
    category: "Tablet",
    brand: "Apple",
    description: "Lightweight tablet with M1 chip, perfect for work, study, and creativity.",
    price: 699,
    currency: "USD",
    stock: 10,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D"
  }
];

export default function ItemsPage() {
  const data = items;

  const categories = [
    ...new Set(data.map(item => item.category).filter(Boolean))
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse Our Items
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing products from our curated collection.
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="md:w-64">
              <select className="w-full px-4 py-2 border rounded-lg">
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(item => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">

              <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />

              <div className="p-6">
                <span className="inline-block text-xs bg-blue-100 px-2 py-1 rounded mb-2">
                  {item.category}
                </span>

                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/items/${item.id}`}>{item.name}</Link>
                </h3>

                <p className="text-gray-600 mb-2">{item.brand}</p>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    ${item.price}
                  </span>

                  <Link
                    href={`/items/${item.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
