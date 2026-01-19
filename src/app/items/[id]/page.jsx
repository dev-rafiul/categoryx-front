import Link from "next/link";
import { items } from "../data";

export default function ItemDetail({ params }) {
  const item = items.find(i => i.id === Number(params.id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Item Not Found</h1>
          <Link href="/items" className="text-blue-600 underline">
            Back to Items
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link href="/" className="text-blue-600">Home</Link> /{" "}
          <Link href="/items" className="text-blue-600">Items</Link> /{" "}
          <span>{item.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <img
            src={item.image}
            className="w-full rounded-lg object-cover"
          />

          <div>
            <span className="bg-blue-100 px-3 py-1 rounded text-sm">
              {item.category}
            </span>

            <h1 className="text-3xl font-bold mt-4">{item.name}</h1>
            <p className="text-gray-600 mt-2">{item.brand}</p>

            <p className="mt-4 text-gray-700">{item.description}</p>

            <div className="mt-6 flex items-center gap-6">
              <span className="text-4xl font-bold text-green-600">
                ${item.price}
              </span>
              <span className="text-gray-600">
                ⭐ {item.rating} / 5
              </span>
            </div>

            <p className="mt-2 text-gray-600">
              Stock: {item.stock}
            </p>

            <div className="mt-8 space-y-3">
              <button className="w-full bg-green-600 text-white py-3 rounded">
                Add to Cart
              </button>
              <Link
                href="/items"
                className="block text-center bg-gray-200 py-3 rounded"
              >
                Back to Items
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
