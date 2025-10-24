import Image from 'next/image';

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Echo Dot (5th Gen, 2024 release)",
      price: "$49.99",
      image: "https://m.media-amazon.com/images/I/61+V9KX2vFL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B09B8VJLRZ?tag=pierre121-20",
    },
    {
      id: 2,
      title: "Fire TV Stick 4K with Alexa Voice Remote",
      price: "$39.99",
      image: "https://m.media-amazon.com/images/I/51P9oZC0bqL._AC_SL1000_.jpg",
      link: "https://www.amazon.com/dp/B0B6LRPZKZ?tag=pierre121-20",
    },
    {
      id: 3,
      title: "Apple AirPods Pro (2nd Generation)",
      price: "$249.00",
      image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B0BDHWDR12?tag=pierre121-20",
    },
    {
      id: 4,
      title: "Kindle Paperwhite (8 GB)",
      price: "$139.99",
      image: "https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B08KTZ8249?tag=pierre121-20",
    },
    {
      id: 5,
      title: "Samsung Galaxy Buds FE",
      price: "$99.99",
      image: "https://m.media-amazon.com/images/I/61e3wU8M5ZL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/dp/B0CGLD9QF2?tag=pierre121-20",
    },
  ];

  return (
    <div className="container">
      <h1>🇺🇸 Pierre’s Amazon Picks – Best Sellers</h1>
      <div className="grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
            />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <button>Buy on Amazon</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
