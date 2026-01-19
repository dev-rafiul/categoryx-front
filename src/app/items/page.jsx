import Link from "next/link";
import { items } from "./data";

export default function ItemsPage() {
  const categories = [...new Set(items.map(i => i.category))];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-center mb-10">
          Browse Our Items
        </h1>

        {/* Filter */}
        <div className="bg-white p-6 rounded-lg shadow mb-8 flex gap-4">
          <input
            placeholder="Search items..."
            className="flex-1 px-4 py-2 border rounded"
          />
          <select className="px-4 py-2 border rounded">
            <option>All Categories</option>
            {categories.map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={item.image} className="h-48 w-full object-cover" />

              <div className="p-6">
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">
                  {item.category}
                </span>

                <h3 className="text-xl font-semibold mt-2">
                  <Link href={`/items/${item.id}`}>{item.name}</Link>
                </h3>

                <p className="text-gray-600">{item.brand}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-green-600">
                    ${item.price}
                  </span>
                  <Link
                    href={`/items/${item.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
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
