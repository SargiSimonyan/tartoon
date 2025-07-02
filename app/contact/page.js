export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Have questions or need help? Reach out to our team — we’re here to assist you.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border border-gray-300 p-3 rounded" placeholder="Your name" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border border-gray-300 p-3 rounded" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border border-gray-300 p-3 rounded" rows="5" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Send Message</button>
      </form>
    </main>
  );
}
