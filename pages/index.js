// pages/index.js
import Head from "next/head";
import { useState } from "react";

const AFFILIATE = "pierre121-20";

const PRODUCTS = [
  // ✅ PS5 first
  {
    id: 1,
    title: "PlayStation 5 Console (Slim Disc Edition)",
    image: "https://m.media-amazon.com/images/I/51eOztNdCkL._SL1200_.jpg",
    link: `https://www.amazon.com/dp/B0CL5LXL5S?tag=${AFFILIATE}`,
  },
  {
    id: 2,
    title: "Apple AirPods Pro (2nd Generation)",
    image: "https://m.media-amazon.com/images/I/617I3mDGmTL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0BDHWDR12?tag=${AFFILIATE}`,
  },
  {
    id: 3,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    image: "https://m.media-amazon.com/images/I/71xbdrK1vOL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B08PQ2KWHS?tag=${AFFILIATE}`,
  },
  {
    id: 4,
    title: "Kindle Paperwhite (Latest)",
    image: "https://m.media-amazon.com/images/I/71FWKtSIYUL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B08KTZ8249?tag=${AFFILIATE}`,
  },
  {
    id: 5,
    title: "Lodge Cast Iron Skillet - 10.25 Inch",
    image: "https://m.media-amazon.com/images/I/61eNv9BXyaL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B00006JSUA?tag=${AFFILIATE}`,
  },
  {
    id: 6,
    title: "Hydro Flask Wide Mouth Bottle (32 oz)",
    image: "https://m.media-amazon.com/images/I/41eISRYlWdL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B0BFYRMHTJ?tag=${AFFILIATE}`,
  },
  {
    id: 7,
    title: "Fire TV Stick 4K with Alexa Voice Remote",
    image: "https://m.media-amazon.com/images/I/61TzK204IjL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B08XVYZ1Y5?tag=${AFFILIATE}`,
  },
  {
    id: 8,
    title: "CeraVe Moisturizing Cream (16 oz)",
    image: "https://m.media-amazon.com/images/I/71nl44DpNXL._SX679_.jpg",
    link: `https://www.amazon.com/dp/B00TTD9BRC?tag=${AFFILIATE}`,
  },
  {
    id: 9,
    title: "Anker PowerCore 10000 Portable Charger",
    image: "https://m.media-amazon.com/images/I/61LN69va5IL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B07DDDF8CNK?tag=${AFFILIATE}`,
  },
  {
    id: 10,
    title: "JBL Flip 6 Portable Bluetooth Speaker",
    image: "https://m.media-amazon.com/images/I/71DMsp+X-pL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B09GJMPRYW?tag=${AFFILIATE}`,
  },
  {
    id: 11,
    title: "Echo Dot (5th Gen) Smart Speaker with Alexa",
    image: "https://m.media-amazon.com/images/I/71yRY8YlAbL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B09B8V1LZ3?tag=${AFFILIATE}`,
  },
  {
    id: 12,
    title: "Apple 20W USB-C Power Adapter",
    image: "https://m.media-amazon.com/images/I/61ViCg5-E-L._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0D78SLYB1?tag=${AFFILIATE}`,
  },
  {
    id: 13,
    title: "Samsung EVO Select 128GB microSDXC",
    image: "https://m.media-amazon.com/images/I/81axmUuRHrL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0887GP791?tag=${AFFILIATE}`,
  },
  {
    id: 14,
    title: "Keurig K-Classic Coffee Maker",
    image: "https://m.media-amazon.com/images/I/61wQb8IB8UL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B018UQ5AMS?tag=${AFFILIATE}`,
  },
  {
    id: 15,
    title: "Ninja Air Fryer (4 Qt)",
    image: "https://m.media-amazon.com/images/I/71+8uTMDRFL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B07FDJMC9Q?tag=${AFFILIATE}`,
  },
  {
    id: 16,
    title: "Sony WH-CH510 Wireless On-Ear Headphones",
    image: "https://m.media-amazon.com/images/I/41H-Lb8rA1L._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B07T81554H?tag=${AFFILIATE}`,
  },
  {
    id: 17,
    title: "Fitbit Inspire 2 Health & Fitness Tracker",
    image: "https://m.media-amazon.com/images/I/51uHD-x+3-L._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B08DFGWDZR?tag=${AFFILIATE}`,
  },
  {
    id: 18,
    title: "Oxo Good Grips 3-in-1 Avocado Slicer",
    image: "https://m.media-amazon.com/images/I/51oYsbyhMgL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0DSTN6X8M?tag=${AFFILIATE}`,
  },
  {
    id: 19,
    title: "Victorinox Swiss Army Classic SD Pocket Knife",
    image: "https://m.media-amazon.com/images/I/61-heWmCTKL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B00020S7XK?tag=${AFFILIATE}`,
  },
  {
    id: 20,
    title: "Calphalon Nonstick Cookware Set (12-Piece)",
    image: "https://m.media-amazon.com/images/I/61nIgS-dfJL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0D9HYM4Y4?tag=${AFFILIATE}`,
  },
  // ✅ New 10 Products you sent
  {
    id: 21,
    title: "iRobot Roomba 694 Robot Vacuum",
    image: "https://m.media-amazon.com/images/I/71Nqtzk7AOL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B08G4N4C4R?tag=${AFFILIATE}`,
  },
  {
    id: 22,
    title: "ASUS 27” 1080P Gaming Monitor",
    image: "https://m.media-amazon.com/images/I/71I1tZQFZhL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0876M7C3N?tag=${AFFILIATE}`,
  },
  {
    id: 23,
    title: "Logitech MX Master 3S Wireless Mouse",
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0BMV7ZQKN?tag=${AFFILIATE}`,
  },
  {
    id: 24,
    title: "HP DeskJet 4155e Wireless Color Printer",
    image: "https://m.media-amazon.com/images/I/61c6JwLNAQL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B08XYRDKDV?tag=${AFFILIATE}`,
  },
  {
    id: 25,
    title: "Samsung Galaxy Tab A9+ Tablet",
    image: "https://m.media-amazon.com/images/I/71m1sIebXiL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0CDZP7PVT?tag=${AFFILIATE}`,
  },
  {
    id: 26,
    title: "Bose QuietComfort 45 Bluetooth Headphones",
    image: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B098FKXT8L?tag=${AFFILIATE}`,
  },
  {
    id: 27,
    title: "GoPro HERO12 Black",
    image: "https://m.media-amazon.com/images/I/61bni0l+HBL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0CFQYGSTR?tag=${AFFILIATE}`,
  },
  {
    id: 28,
    title: "Roku Streaming Stick 4K",
    image: "https://m.media-amazon.com/images/I/61xz7Y3bRzL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B09BKCDXZC?tag=${AFFILIATE}`,
  },
  {
    id: 29,
    title: "KitchenAid Artisan Series 5-Quart Mixer",
    image: "https://m.media-amazon.com/images/I/61VC9x0MF4L._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B07TYQRXTK?tag=${AFFILIATE}`,
  },
  {
    id: 30,
    title: "Apple Watch SE (2nd Gen)",
    image: "https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0BDJ7CHL6?tag=${AFFILIATE}`,
  },
];

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(20);

  return (
    <>
      <Head>
        <title>Pierre's Top Picks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        <header className="header">
          <h1>Pierre's Top Picks</h1>
          <p className="sub">Thanks for supporting me — shop top-selling items</p>
        </header>

        <main className="content">
          <section className="grid">
            {PRODUCTS.slice(0, visibleCount).map((p) => (
              <article key={p.id} className="card">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <div className="imgWrap">
                    <img src={p.image} alt={p.title} />
                  </div>
                </a>
                <div className="cardFooter">
                  <div className="title">{p.title}</div>
                  <a href={p.link} className="buy" target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                  </a>
                </div>
              </article>
            ))}
          </section>

          {visibleCount < PRODUCTS.length && (
            <div className="loadMore">
              <button onClick={() => setVisibleCount(visibleCount + 10)}>Load More</button>
            </div>
          )}
        </main>

        <footer className="footer">
          <p>Thanks for supporting my Amazon affiliate marketing platform.</p>
          <p className="small">
            Affiliate tag: <strong>{AFFILIATE}</strong> — links open on Amazon US.
          </p>
        </footer>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f6f7fb;
          color: #111827;
          font-family: Inter, -apple-system, "Segoe UI", Roboto, Arial;
          padding: 18px;
        }
        .header {
          text-align: center;
          margin-bottom: 18px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
        }
        .card {
          background: #fff;
          border-radius: 10px;
          border: 1px solid #e6e9ef;
          overflow: hidden;
          transition: transform 0.15s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        .imgWrap {
          background: #fff;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .imgWrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .cardFooter {
          padding: 10px;
          text-align: center;
        }
        .buy {
          background: #ffbf00;
          color: #111;
          text-decoration: none;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 8px;
          display: inline-block;
        }
        .loadMore {
          text-align: center;
          margin: 20px 0;
        }
        .loadMore button {
          padding: 10px 18px;
          background: #111827;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
        }
        .footer {
          text-align: center;
          margin: 30px 0;
          font-size: 13px;
          color: #6b7280;
        }
      `}</style>
    </>
  );
}
