import Link from "next/link";

async function getItems() {
  const res = await fetch("https://catalogx-server-951xcf342-rafiuls-projects-46cf4bea.vercel.app/items", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();


  const categories = [
    ...new Set(items.map(item => item.category).filter(Boolean))
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse Our Items
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing products from our curated collection. Find exactly what youre looking for.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search Items
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search for items..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                id="category"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

           
            
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Item Image */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400 text-4xl">
                  <img className="w-[350px] h-[300px]" src={item.image} alt="" />
                </div>
              </div>

              {/* Item Content */}
              <div className="p-6">
                {/* Category Badge */}
                {item.category && (
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-2">
                    {item.category}
                  </span>
                )}

                {/* Item Name - Clickable */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href={`/items/${item.id}`}>
                    {item.name}
                  </Link>
                </h3>

                {/* Item Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {item.brand}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${item.price}
                  </span>
                  <Link
                    href={`/items/${item.id}`}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

       

        
        {items.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No items found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your search criteria or browse all categories.
            </p>
            <Link
              href="/add-item"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Add First Item
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}



