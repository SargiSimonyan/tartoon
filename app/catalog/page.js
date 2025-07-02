import Image from "next/image";
import Link from "next/link";
const products = ["product1.webp", "product2.webp", "product3.webp", "product4.png", "product5.avif", "product6.avif"]
export default function Catalog() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Catalog</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item) => (
          <div key={item} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
            <Image src={`/${item}`} alt={`Product ${item}`} width={400} height={300} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
              <p className="text-gray-600">Description for product {item} goes here.</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}