"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/items" className="text-blue-600 underline">
          ← Back to items
        </Link>

        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-96 object-cover"
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">
              {item.name}
            </h1>

            <p className="text-gray-500 mb-4">
              {item.brand} • {item.category}
            </p>

            <p className="mb-4">
              {item.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div><strong>Price:</strong> ${item.price}</div>
              <div><strong>Stock:</strong> {item.stock}</div>
              <div><strong>Rating:</strong> ⭐ {item.rating}</div>
              <div><strong>Currency:</strong> {item.currency}</div>
            </div>

            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
