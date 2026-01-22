"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { items } from "@/app/data/items";

export default function ItemDetailsPage() {
  const { id } = useParams();

  const item = items.find(
    (item) => item.id === Number(id)
  );

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 mb-4">Item not found</p>
        <Link href="/items" className="text-blue-600 underline">
          ← Back to items
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 mt-20 bg-[#F7F6F2] dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">

        <Link href="/items" className="text-blue-600 hover:underline">
          ← Back to items
        </Link>

        <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />

            <div className="p-8">
              <h1 className="text-3xl font-semibold mb-2">
                {item.name}
              </h1>

              <p className="text-sm text-gray-500 mb-4">
                {item.brand} • {item.category}
              </p>

              <p className="mb-6">{item.description}</p>

              <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
                <div>
                  <span className="text-gray-500">Price</span>
                  <div className="text-xl font-semibold text-blue-600">
                    ${item.price}
                  </div>
                </div>

                <div>
                  <span className="text-gray-500">Rating</span>
                  <div className="text-yellow-500">
                    ★ {item.rating}
                  </div>
                </div>

                <div>
                  <span className="text-gray-500">Stock</span>
                  <div>{item.stock} available</div>
                </div>

                <div>
                  <span className="text-gray-500">Currency</span>
                  <div>{item.currency}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
