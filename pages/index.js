// pages/index.js
import Head from "next/head";
import { useState } from "react";

const AFFILIATE = "pierre121-20";

const PRODUCTS = [
  {
    id: 1,
    title: "PlayStation 5 Console (Disc Version)",
    image: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0CFFN9M2K?tag=${AFFILIATE}`,
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
    title: "Sony ICF-S10MK2 Pocket AM/FM Radio",
    image: "https://m.media-amazon.com/images/I/61-heWmCTKL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B00020S7XK?tag=${AFFILIATE}`,
  },
  {
    id: 20,
    title: "Calphalon Nonstick Cookware Set (12-Piece)",
    image: "https://m.media-amazon.com/images/I/61nIgS-dfJL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0D9HYM4Y4?tag=${AFFILIATE}`,
  },
  // --- 10 NEW ITEMS BELOW ---
  {
    id: 21,
    title: "Apple Watch Series 9 [GPS, 41mm]",
    image: "https://m.media-amazon.com/images/I/71hH5ZcbrxL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0CHX1S1Y1?tag=${AFFILIATE}`,
  },
  {
    id: 22,
    title: "Dyson Supersonic Hair Dryer",
    image: "https://m.media-amazon.com/images/I/61wV+v1b0bL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B01FIG1JJI?tag=${AFFILIATE}`,
  },
  {
    id: 23,
    title: "Nintendo Switch OLED Model - White Joy-Con",
    image: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B098RKWHHZ?tag=${AFFILIATE}`,
  },
  {
    id: 24,
    title: "iRobot Roomba j7+ Self-Emptying Robot Vacuum",
    image: "https://m.media-amazon.com/images/I/61v8tRzU6-L._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B09G9FPHY4?tag=${AFFILIATE}`,
  },
  {
    id: 25,
    title: "ASUS TUF Gaming Laptop F15",
    image: "https://m.media-amazon.com/images/I/71PC3AABp6L._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0C5YYT9WV?tag=${AFFILIATE}`,
  },
  {
    id: 26,
    title: "Bose QuietComfort 45 Bluetooth Headphones",
    image: "https://m.media-amazon.com/images/I/61vv1mK7uyL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B098FKXT8L?tag=${AFFILIATE}`,
  },
  {
    id: 27,
    title: "Canon EOS Rebel T7 DSLR Camera Kit",
    image: "https://m.media-amazon.com/images/I/81NchK4PPLL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B07C2Z21X5?tag=${AFFILIATE}`,
  },
  {
    id: 28,
    title: "Instant Vortex Plus 6-in-1 Air Fryer",
    image: "https://m.media-amazon.com/images/I/81QyZWxwZLL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B07VM28XTR?tag=${AFFILIATE}`,
  },
  {
    id: 29,
    title: "KitchenAid Artisan Stand Mixer (5 Qt)",
    image: "https://m.media-amazon.com/images/I/71yb8Th1L8L._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B00005UP2P?tag=${AFFILIATE}`,
  },
  {
    id: 30,
    title: "Samsung 55-Inch Class OLED 4K Smart TV",
    image: "https://m.media-amazon.com/images/I/81psYbm7mZL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0BVPX5V2L?tag=${AFFILIATE}`,
  },
];

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(20);
  const loadMore = () => setVisibleCount((v) => v + 10);

  return (
    <>
      <Head>
        <title>Pierre's Top Picks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        <header className="header">
          <div>
            <h1>Pierre's Top Picks</h1>
            <p className="sub">Thanks for supporting me — shop top-selling items</p>
          </div>
        </header>

        <main className="content">
          <section className="grid">
            {PRODUCTS.slice(0, visibleCount).map((p) => (
              <article key={p.id} className="card">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <div className="imgWrap">
                    <img
                      src={p.image}
                      alt={p.title}
                      onError={(e) => (e.target.src = "/fallback-image.png")}
                    />
                  </div>
                </a>

                <div className="cardFooter">
                  <div className="title">{p.title}</div>
                  <div className="actions">
                    <a href={p.link} className="buy" target="_blank" rel="noopener noreferrer">
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {visibleCount < PRODUCTS.length && (
            <div className="loadMoreWrap">
              <button onClick={loadMore} className="loadMore">Load More</button>
            </div>
          )}
        </main>

        <footer className="footer">
          <div>Thanks for supporting my Amazon affiliate marketing platform.</div>
          <div className="small">
            Affiliate tag: <strong>{AFFILIATE}</strong> — links open on Amazon US.
          </div>
        </footer>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f6f7fb;
          color: #111827;
          font-family: Inter, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          padding: 18px;
        }
        .header {
          max-width: 1100px;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sub {
          color: #6b7280;
          font-size: 13px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
        }
        .card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #e6e9ef;
          display: flex;
          flex-direction: column;
          transition: transform 140ms ease, box-shadow 140ms ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(17, 24, 39, 0.08);
        }
        .imgWrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 160px;
          padding: 10px;
        }
        .imgWrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .cardFooter {
          padding: 12px;
          text-align: center;
        }
        .buy {
          background: #ffbf00;
          padding: 9px 12px;
          border-radius: 8px;
          color: #111;
          text-decoration: none;
          font-weight: 700;
          display: inline-block;
        }
        .loadMoreWrap {
          text-align: center;
          margin: 20px 0;
        }
        .loadMore {
          background: #ffbf00;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
