// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function ItemsPage() {
//   const [items, setItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [sortBy, setSortBy] = useState("name");
//   const [loading, setLoading] = useState(true);

//   // Fetch items from API
//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/items');
//         if (response.ok) {
//           const data = await response.json();
//           setItems(data);
//           setFilteredItems(data);
//         } else {
//           // Fallback to local data if API is not available
//           const { items: localItems } = await import('./data');
//           setItems(localItems);
//           setFilteredItems(localItems);
//         }
//       } catch (error) {
//         console.error('Error fetching items:', error);
//         // Fallback to local data
//         const { items: localItems } = await import('./data');
//         setItems(localItems);
//         setFilteredItems(localItems);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

//   // Filter and search items
//   useEffect(() => {
//     let filtered = items;

//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(item =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.brand.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Filter by category
//     if (selectedCategory) {
//       filtered = filtered.filter(item => item.category === selectedCategory);
//     }

//     // Sort items
//     filtered.sort((a, b) => {
//       switch (sortBy) {
//         case 'price-low':
//           return a.price - b.price;
//         case 'price-high':
//           return b.price - a.price;
//         case 'rating':
//           return b.rating - a.rating;
//         case 'name':
//         default:
//           return a.name.localeCompare(b.name);
//       }
//     });

//     setFilteredItems(filtered);
//   }, [items, searchTerm, selectedCategory, sortBy]);

//   const categories = [...new Set(items.map(i => i.category))];

//   if (loading) {
//     return (
//       <div className="min-h-screen py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//             <span className="ml-4 text-gray-600 dark:text-gray-300">Loading items...</span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
//           Browse Our Items
//         </h1>

//         {/* Search and Filter Controls */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* Search */}
//             <div className="md:col-span-2">
//               <input
//                 type="text"
//                 placeholder="Search items..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
//               />
//             </div>

//             {/* Category Filter */}
//             <div>
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//               >
//                 <option value="">All Categories</option>
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Sort */}
//             <div>
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//               >
//                 <option value="name">Sort by Name</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="rating">Highest Rated</option>
//               </select>
//             </div>
//           </div>

//           {/* Results Count */}
//           <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
//             Showing {filteredItems.length} of {items.length} items
//             {searchTerm && (
//               <span> for "{searchTerm}"</span>
//             )}
//             {selectedCategory && (
//               <span> in {selectedCategory}</span>
//             )}
//           </div>
//         </div>

//         {/* Items Grid */}
//         {filteredItems.length === 0 ? (
//           <div className="text-center py-12">
//             <div className="text-6xl mb-4">🔍</div>
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//               No items found
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-4">
//               Try adjusting your search or filter criteria
//             </p>
//             <button
//               onClick={() => {
//                 setSearchTerm("");
//                 setSelectedCategory("");
//                 setSortBy("name");
//               }}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Clear Filters
//             </button>
//           </div>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredItems.map(item => (
//               <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                 <img 
//                   src={item.image} 
//                   alt={item.name}
//                   className="h-48 w-full object-cover" 
//                 />

//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
//                       {item.category}
//                     </span>
//                     <span className="text-sm text-yellow-500">
//                       ⭐ {item.rating}
//                     </span>
//                   </div>

//                   <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
//                     <Link 
//                       href={`/items/${item.id}`}
//                       className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                     >
//                       {item.name}
//                     </Link>
//                   </h3>

//                   <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
//                     {item.brand}
//                   </p>

//                   <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
//                     {item.description}
//                   </p>

//                   <div className="flex justify-between items-center">
//                     <span className="text-xl font-bold text-green-600 dark:text-green-400">
//                       ${item.price}
//                     </span>
//                     <Link
//                       href={`/items/${item.id}`}
//                       className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
//                     >
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch("http://localhost:5000/items");
        if (!res.ok) throw new Error("Failed to fetch items");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error(err);
        setError("Could not load items. Is the API running?");
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading items…
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Browse Items
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>

                <p className="text-sm text-gray-500 mb-2">{item.brand}</p>

                <p className="font-bold text-green-600 mb-3">${item.price}</p>

                {/* Link to dynamic details page */}
                <Link
                  href={`/items/${item.id}`}
                  className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
