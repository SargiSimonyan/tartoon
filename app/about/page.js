import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About TARTOON</h1>
      <p className="text-lg text-gray-700 mb-4">
        TARTOON is a modern furniture shop dedicated to blending comfort and design. We specialize in high-quality sofas,
        chairs, tables, and home décor items that transform any space into a cozy and stylish sanctuary.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our team of experienced designers and craftsmen take pride in every piece, ensuring that our customers receive
        timeless designs made with premium materials. Whether you're furnishing a new home or upgrading a single room,
        we have the perfect items for you.
      </p>
      <Image src="/about-showroom.jpg" alt="Showroom" width={800} height={500} className="rounded-lg mt-6" />
    </main>
  );
}
