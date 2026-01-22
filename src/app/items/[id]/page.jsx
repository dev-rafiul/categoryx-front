"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const res = await fetch(`http://localhost:5000/items/${id}`);
        if (!res.ok) throw new Error("Item not found");
        const data = await res.json();
        setItem(data);
      } catch (err) {
        console.error(err);
        setError("Item not found or API error");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading item…
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 mb-4">{error}</p>
        <Link href="/items" className="text-blue-600 underline">
          ← Back to items
        </Link>
      </div>
    );
  }

  // return (

  //   <div className="min-h-screen py-10 mt-20">
  //     <div className="max-w-4xl mx-auto px-4">
  //       <Link href="/items" className="text-blue-600 underline">
  //         ← Back to items
  //       </Link>

  //       <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
  //         <img
  //           src={item.image}
  //           alt={item.name}
  //           className="w-full h-96 object-cover"
  //         />

  //         <div className="p-6">
  //           <h1 className="text-3xl font-bold mb-2">{item.name}</h1>

  //           <p className="text-gray-500 mb-4">
  //             {item.brand} • {item.category}
  //           </p>

  //           <p className="mb-4">{item.description}</p>

  //           <div className="grid grid-cols-2 gap-4 mb-6">
  //             <div>
  //               <strong>Price:</strong> ${item.price}
  //             </div>
  //             <div>
  //               <strong>Stock:</strong> {item.stock}
  //             </div>
  //             <div>
  //               <strong>Rating:</strong> ⭐ {item.rating}
  //             </div>
  //             <div>
  //               <strong>Currency:</strong> {item.currency}
  //             </div>
  //           </div>

            
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

return (
  <div className="min-h-screen py-16 mt-20 bg-[#F7F6F2] dark:bg-slate-900">
    <div className="max-w-6xl mx-auto px-4">
      
      <Link href="/items" className="text-blue-600 hover:underline">
        ← Back to items
      </Link>

      <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT: Image */}
          <div className="h-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Details */}
          <div className="p-8">
            <h1 className="text-3xl font-semibold mb-2 text-gray-900 dark:text-white">
              {item.name}
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {item.brand} • {item.category}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {item.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
              <div>
                <span className="text-gray-500">Price</span>
                <div className="text-xl font-semibold text-blue-600">
                  ${item.price}
                </div>
              </div>

              <div>
                <span className="text-gray-500">Rating</span>
                <div className="font-medium text-yellow-500">
                  ★ {item.rating}
                </div>
              </div>

              <div>
                <span className="text-gray-500">Stock</span>
                <div className="font-medium text-gray-900 dark:text-white">
                  {item.stock} available
                </div>
              </div>

              <div>
                <span className="text-gray-500">Currency</span>
                <div className="font-medium text-gray-900 dark:text-white">
                  {item.currency}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition">
                Add to Wishlist
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

}
