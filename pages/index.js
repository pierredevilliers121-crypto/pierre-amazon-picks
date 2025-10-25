import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Generation)",
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
    price: "$249.00",
    category: "Electronics",
    link: "https://www.amazon.com/dp/B0BDHWDR12?tag=pierre121-20",
  },
  {
    id: 2,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    image: "https://m.media-amazon.com/images/I/81C-sA2Z-AL._AC_SL1500_.jpg",
    price: "$99.95",
    category: "Home & Kitchen",
    link: "https://www.amazon.com/dp/B08PQ2KWHS?tag=pierre121-20",
  },
  {
    id: 3,
    title: "Kindle Paperwhite – 6.8\" Display, Adjustable Warm Light",
    image: "https://m.media-amazon.com/images/I/61M1g3ZV88L._AC_SL1000_.jpg",
    price: "$149.99",
    category: "Electronics",
    link: "https://www.amazon.com/dp/B08KTZ8249?tag=pierre121-20",
  },
  {
    id: 4,
    title: "Lodge Cast Iron Skillet – 10.25 Inch",
    image: "https://m.media-amazon.com/images/I/81tQ6Uqc8nL._AC_SL1500_.jpg",
    price: "$29.90",
    category: "Home & Kitchen",
    link: "https://www.amazon.com/dp/B00006JSUA?tag=pierre121-20",
  },
  {
    id: 5,
    title: "Hydro Flask Wide Mouth Bottle with Flex Cap",
    image: "https://m.media-amazon.com/images/I/71s8U9VzLTL._AC_SL1500_.jpg",
    price: "$44.95",
    category: "Sports & Outdoors",
    link: "https://www.amazon.com/dp/B07QKD8BW9?tag=pierre121-20",
  },
  {
    id: 6,
    title: "Fire TV Stick 4K Streaming Device with Alexa Voice Remote",
    image: "https://m.media-amazon.com/images/I/61KZpBzKIPL._AC_SL1500_.jpg",
    price: "$49.99",
    category: "Electronics",
    link: "https://www.amazon.com/dp/B08XVYZ1Y5?tag=pierre121-20",
  },
  {
    id: 7,
    title: "CeraVe Moisturizing Cream for Face and Body",
    image: "https://m.media-amazon.com/images/I/61Jrfn3C0uL._SL1500_.jpg",
    price: "$18.99",
    category: "Beauty",
    link: "https://www.amazon.com/dp/B00TTD9BRC?tag=pierre121-20",
  },
  {
    id: 8,
    title: "Anker Portable Charger, PowerCore 10000",
    image: "https://m.media-amazon.com/images/I/61CqYq+xwNL._AC_SL1500_.jpg",
    price: "$25.99",
    category: "Electronics",
    link: "https://www.amazon.com/dp/B0194WDVHI?tag=pierre121-20",
  },
  {
    id: 9,
    title: "JBL Flip 6 Portable Bluetooth Speaker",
    image: "https://m.media-amazon.com/images/I/71vVdkRrYkL._AC_SL1500_.jpg",
    price: "$129.95",
    category: "Electronics",
    link: "https://www.amazon.com/dp/B097F9SFG4?tag=pierre121-20",
  },
  {
    id: 10,
    title: "Echo Dot (5th Gen) Smart Speaker with Alexa",
    image: "https://m.media-amazon.com/images/I/61XO4bORHUL._AC_SL1000_.jpg",
    price: "$49.99",
    category: "Electronics",
    link: "https://www.amazon.com/dp/B09B8V1LZ3?tag=pierre121-20",
  },
  // (Add up to 50 items following this exact format)
];

export default function Home() {
  const [search, setSearch] = useState("");
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Pierre Picks 🛍️</h1>
        <p className="text-gray-600">
          Thanks for supporting me ❤️ — Prices in USD
        </p>
        <input
          type="text"
          placeholder="Search for a product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-4 px-4 py-2 border rounded-lg w-80 max-w-full"
        />
      </header>

      <main className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain p-2 bg-gray-50"
            />
            <div className="p-3 text-center">
              <h2 className="text-sm font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="text-lg font-bold text-gray-700 mt-1">
                {product.price}
              </p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
