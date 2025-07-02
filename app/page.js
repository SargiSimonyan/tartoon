import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Tartoon Logo" width={40} height={40} />
          <span className="text-2xl font-bold">TARTOON</span>
        </div>
        <nav className="flex gap-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Designer Sofas & Modern Furniture</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Welcome to TARTOON — where comfort meets style. Discover our premium collection of modern sofas, chairs, and home accessories.
        </p>
        <Link href="/catalog" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">Browse Catalog</Link>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Featured Collection</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
            <Image src="/sofa1.webp" alt="Modern Sofa" width={400} height={300} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Luxe Sofa</h3>
              <p className="text-gray-600">Comfortable and stylish 3-seater with plush cushions.</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
            <Image src="/chair1.jpg" alt="Accent Chair" width={400} height={300} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Accent Chair</h3>
              <p className="text-gray-600">Modern design with premium upholstery and wood frame.</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
            <Image src="/table1.jpg" alt="Coffee Table" width={400} height={300} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Coffee Table</h3>
              <p className="text-gray-600">Sleek minimalistic table with solid wood legs and marble top.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-20 text-center">
        <p>&copy; 2025 TARTOON Furniture. All rights reserved.</p>
      </footer>
    </main>
  );
}
