import Link from "next/link";

async function getItem(id) {
  try {
    console.log('Fetching item with ID:', id);
    const res = await fetch(`https://catalogx-server-951xcf342-rafiuls-projects-46cf4bea.vercel.app/items/${id}`, {
      cache: "no-store",
    });
    
    console.log('Response status:', res.status);
    
    if (!res.ok) {
      console.log('Response not OK:', res.status, res.statusText);
      return null;
    }
    
    const item = await res.json();
    console.log('Fetched item:', item);
    return item;
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
}

export default async function ItemDetail({ params }) {
  const item = await getItem(params.id);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Item Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The item with ID doesnt exist or couldnt be loaded.
          </p>
          <div className="space-y-4">
            <Link
              href="/items"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
            >
              Back to Items
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Check the browser console for more details.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <Link href="/items" className="ml-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 md:ml-2">
                  Items
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-gray-500 dark:text-gray-400 md:ml-2 truncate">{item.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-500 dark:text-gray-400 text-6xl">📷</div>
              )}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            
            {/* Category Badge */}
            {item.category && (
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                {item.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {item.name}
            </h1>

            {/* Brand */}
            {item.brand && (
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Brand:</span> {item.brand}
              </p>
            )}

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>

            {/* Rating and Stock */}
            <div className="flex items-center space-x-6">
              {item.rating && (
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${star <= Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      {item.rating}/5
                    </span>
                  </div>
                </div>
              )}
              
              {item.stock !== undefined && (
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Stock:</span> {item.stock} available
                </div>
              )}
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">
              ${item.price}
            </div>

            {/* Additional Info */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">Item Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">ID:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">{item.id}</span>
                </div>
                {item.condition && (
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Condition:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400 capitalize">{item.condition}</span>
                  </div>
                )}
                {item.seller && (
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Seller:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{item.seller}</span>
                  </div>
                )}
                {item.location && (
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Location:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{item.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Add to Cart
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Contact Seller
                </button>
                <Link
                  href="/items"
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-200 text-center"
                >
                  Back to Items
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        {(item.features || item.specifications) && (
          <div className="mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="space-y-6">
                
                {/* Features */}
                {item.features && item.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specifications */}
                {item.specifications && Object.keys(item.specifications).length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(item.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{key}:</span>
                          <span className="text-gray-600 dark:text-gray-400">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
