export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Category <span className="text-gray-500 font-bold">X</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              A modern product catalog platform to discover, compare, and
              choose with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/items" className="hover:text-white transition">Browse Items</a></li>
              <li><a href="/add-item" className="hover:text-white transition">Add Item</a></li>
              <li><a href="/login" className="hover:text-white transition">Login</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Stay Updated
            </h4>
            <p className="text-sm mb-4">
              Subscribe to receive product updates and exclusive offers.
            </p>
            <div className="flex rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 text-sm bg-slate-800 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-blue-600 px-6 text-sm font-medium text-white hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-400">
          © 2026 CatalogX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
