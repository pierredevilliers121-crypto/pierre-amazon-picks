// pages/index.js
import Head from "next/head";

const AFFILIATE = "pierre121-20";

const PRODUCTS = [
  // 20 verified/popular Amazon US product pages (affiliate tag appended)
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Generation)",
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B0BDHWDR12/?tag=${AFFILIATE}`,
  },
  {
    id: 2,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    image: "https://m.media-amazon.com/images/I/81C-sA2Z-AL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B08PQ2KWHS/?tag=${AFFILIATE}`,
  },
  {
    id: 3,
    title: "Kindle Paperwhite (Latest)",
    image: "https://m.media-amazon.com/images/I/61M1g3ZV88L._AC_SL1000_.jpg",
    link: `https://www.amazon.com/dp/B08KTZ8249/?tag=${AFFILIATE}`,
  },
  {
    id: 4,
    title: "Lodge Cast Iron Skillet - 10.25 Inch",
    image: "https://m.media-amazon.com/images/I/81tQ6Uqc8nL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B00006JSUA/?tag=${AFFILIATE}`,
  },
  {
    id: 5,
    title: "Hydro Flask Wide Mouth Bottle (32 oz)",
    image: "https://m.media-amazon.com/images/I/71s8U9VzLTL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B07QKD8BW9/?tag=${AFFILIATE}`,
  },
  {
    id: 6,
    title: "Fire TV Stick 4K with Alexa Voice Remote",
    image: "https://m.media-amazon.com/images/I/61KZpBzKIPL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B08XVYZ1Y5/?tag=${AFFILIATE}`,
  },
  {
    id: 7,
    title: "CeraVe Moisturizing Cream (16 oz)",
    image: "https://m.media-amazon.com/images/I/61Jrfn3C0uL._SL1500_.jpg",
    link: `https://www.amazon.com/dp/B00TTD9BRC/?tag=${AFFILIATE}`,
  },
  {
    id: 8,
    title: "Anker PowerCore 10000 Portable Charger",
    image: "https://m.media-amazon.com/images/I/61CqYq+xwNL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B0194WDVHI/?tag=${AFFILIATE}`,
  },
  {
    id: 9,
    title: "JBL Flip 6 Portable Bluetooth Speaker",
    image: "https://m.media-amazon.com/images/I/71vVdkRrYkL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B097F9SFG4/?tag=${AFFILIATE}`,
  },
  {
    id: 10,
    title: "Echo Dot (5th Gen) Smart Speaker with Alexa",
    image: "https://m.media-amazon.com/images/I/61XO4bORHUL._AC_SL1000_.jpg",
    link: `https://www.amazon.com/dp/B09B8V1LZ3/?tag=${AFFILIATE}`,
  },

  {
    id: 11,
    title: "Apple 20W USB-C Power Adapter",
    image: "https://m.media-amazon.com/images/I/71q1s8rG7PL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B08R5PYGTP/?tag=${AFFILIATE}`,
  },
  {
    id: 12,
    title: "Samsung EVO Select 128GB microSDXC",
    image: "https://m.media-amazon.com/images/I/71w6VYx+q9L._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B0887GP791/?tag=${AFFILIATE}`,
  },
  {
    id: 13,
    title: "Keurig K-Classic Coffee Maker",
    image: "https://m.media-amazon.com/images/I/71Q2g3X7VxL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B018UQ5AMS/?tag=${AFFILIATE}`,
  },
  {
    id: 14,
    title: "Ninja Air Fryer (4 Qt)",
    image: "https://m.media-amazon.com/images/I/61W3oQ0Jv0L._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B07FDJMC9Q/?tag=${AFFILIATE}`,
  },
  {
    id: 15,
    title: "Sony WH-CH510 Wireless On-Ear Headphones",
    image: "https://m.media-amazon.com/images/I/71k6R1rL6mL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B07T81554H/?tag=${AFFILIATE}`,
  },
  {
    id: 16,
    title: "Fitbit Inspire 2 Health & Fitness Tracker",
    image: "https://m.media-amazon.com/images/I/61V6R8xQWPL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B08DFGWDZR/?tag=${AFFILIATE}`,
  },
  {
    id: 17,
    title: "Oxo Good Grips 3-in-1 Avocado Slicer",
    image: "https://m.media-amazon.com/images/I/61rFvQ71mPL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B007X5R5GI/?tag=${AFFILIATE}`,
  },
  {
    id: 18,
    title: "Victorinox Swiss Army Classic SD Pocket Knife",
    image: "https://m.media-amazon.com/images/I/61w0h2jd1qL._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B00020S7XK/?tag=${AFFILIATE}`,
  },
  {
    id: 19,
    title: "Calphalon Nonstick Cookware Set (10-Piece)",
    image: "https://m.media-amazon.com/images/I/71h2q1j0b4L._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B07W8KNK9Y/?tag=${AFFILIATE}`,
  },
  {
    id: 20,
    title: "LEGO Star Wars: The Mandalorian The Razor Crest",
    image: "https://m.media-amazon.com/images/I/81qz2vv+q3L._AC_SL1500_.jpg",
    link: `https://www.amazon.com/dp/B08J4Z5L9X/?tag=${AFFILIATE}`,
  },
];

export default function Home() {
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
            {PRODUCTS.map((p) => (
              <article key={p.id} className="card">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <div className="imgWrap">
                    <img
                      src={p.image}
                      alt={p.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/fallback-image.png";
                      }}
                    />
                  </div>
                </a>

                <div className="cardFooter">
                  <div className="title">{p.title}</div>

                  <div className="actions">
                    <a
                      href={p.link}
                      className="buy"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buy ${p.title} on Amazon`}
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>

        <footer className="footer">
          <div>
            Thanks for supporting my Amazon affiliate marketing platform.
          </div>
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
        .header h1 {
          margin: 0;
          font-size: 22px;
        }
        .sub {
          margin: 6px 0 0;
          color: #6b7280;
          font-size: 13px;
        }
        .content {
          max-width: 1100px;
          margin: 0 auto;
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
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 180px;
          padding: 12px;
        }
        .imgWrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }
        .cardFooter {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }
        .title {
          font-size: 14px;
          text-align: center;
          color: #111827;
          min-height: 36px;
          overflow: hidden;
        }
        .actions { width: 100%; display:flex; justify-content:center; }
        .buy {
          display:inline-block;
          text-align:center;
          padding: 9px 12px;
          border-radius: 8px;
          background: #ffbf00;
          color: #111;
          font-weight: 700;
          text-decoration: none;
          width: 100%;
          max-width: 220px;
        }
        .footer {
          max-width: 1100px;
          margin: 26px auto 40px;
          text-align: center;
          color: #6b7280;
          font-size: 13px;
        }
        .small { margin-top:6px; color:#9ca3af; font-size:12px; }

        @media (max-width: 640px) {
          .imgWrap { height: 150px; }
          .header { flex-direction: column; gap:8px; align-items:flex-start; }
        }
      `}</style>
    </>
  );
}
