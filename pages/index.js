// pages/index.js
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

/**
 * Pierre Amazon Picks — Demo storefront
 * - 200 demo items (mixed categories)
 * - Tabs: Featured + categories
 * - Search filter
 * - Lazy images
 * - Buy button includes affiliate tag: pierre121-20
 *
 * NOTE: These are demo items generated locally. Replace data with PAAPI/real data later for live prices.
 */

const AFFILIATE_TAG = "pierre121-20"; // your tag
const SITE_TITLE = "Pierre Amazon Picks for Best Use";
const ITEMS_TO_GENERATE = 200;

// seed items to vary categories and product names — we'll use these to generate 200 items
const SEED = [
  { title: "Wireless Bluetooth Headphones", category: "Electronics", price: 59.99 },
  { title: "Smart Fitness Watch", category: "Electronics", price: 79.99 },
  { title: "Portable Mini Projector", category: "Electronics", price: 139.99 },
  { title: "Cordless Vacuum Cleaner", category: "Home & Kitchen", price: 99.99 },
  { title: "Air Fryer 5L", category: "Home & Kitchen", price: 69.99 },
  { title: "Instant Pot Duo", category: "Home & Kitchen", price: 89.99 },
  { title: "Electric Toothbrush", category: "Beauty & Health", price: 29.99 },
  { title: "Waterproof Hiking Backpack", category: "Sports & Outdoors", price: 59.99 },
  { title: "Foldable Treadmill", category: "Sports & Outdoors", price: 299.99 },
  { title: "Gaming Keyboard", category: "Electronics", price: 49.99 },
  { title: "Noise Cancelling Earbuds", category: "Electronics", price: 39.99 },
  { title: "Robot Vacuum Cleaner", category: "Home & Kitchen", price: 129.99 },
  { title: "4K Action Camera", category: "Electronics", price: 99.99 },
  { title: "Ceramic Cookware Set", category: "Home & Kitchen", price: 119.99 },
  { title: "Portable Power Bank", category: "Electronics", price: 29.99 },
  { title: "Electric Kettle 1.7L", category: "Home & Kitchen", price: 34.99 },
  { title: "Foldable Yoga Mat", category: "Sports & Outdoors", price: 24.99 },
  { title: "Men's Running Shoes", category: "Fashion & Accessories", price: 69.99 },
  { title: "Women's Casual Sneakers", category: "Fashion & Accessories", price: 59.99 },
  { title: "Kids Educational Toy Set", category: "Toys & Games", price: 39.99 },
];

// categories / tabs we will show (Featured then the rest)
const CATEGORY_TABS = [
  "Featured",
  "Electronics",
  "Home & Kitchen",
  "Beauty & Health",
  "Toys & Games",
  "Fashion & Accessories",
  "Sports & Outdoors",
  "Trending",
];

function generateItems(count = ITEMS_TO_GENERATE) {
  const items = [];
  for (let i = 0; i < count; i++) {
    const seed = SEED[i % SEED.length];
    // create a pseudo ASIN (not real) but formatted like B0 + 8 digits
    const asin = "B0" + String(10000000 + i).slice(0);
    const title = `${seed.title} ${Math.floor(i / SEED.length) + 1}`;
    // price variation small
    const price = (seed.price * (0.85 + (i % 20) * 0.008)).toFixed(2);
    // categories: put some items into Trending/Featured by rule
    const category = seed.category;
    // placeholder images from via.placeholder (fast) — replace with m.media-amazon.com or PAAPI later
    const image = `https://via.placeholder.com/420x320?text=${encodeURIComponent(seed.title)}`;
    // build affiliate link with your tag (US)
    const affiliateLink = `https://www.amazon.com/dp/${asin}/?tag=${AFFILIATE_TAG}`;

    items.push({
      id: `item-${i}`,
      asin,
      title,
      category,
      price,
      currency: "USD",
      image,
      affiliateLink,
      featured: i < 12, // first 12 = featured
      trending: (i % 17) === 0,
    });
  }
  return items;
}

export default function HomePage() {
  const [tab, setTab] = useState("Featured");
  const [query, setQuery] = useState("");
  const [items] = useState(() => generateItems(ITEMS_TO_GENERATE));
  const [visibleCount, setVisibleCount] = useState(30); // load more on scroll / button

  // derived lists per category and search
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = items;

    // filter by tab
    if (tab === "Featured") {
      list = list.filter((i) => i.featured);
    } else if (tab === "Trending") {
      list = list.filter((i) => i.trending);
    } else {
      list = list.filter((i) => i.category === tab);
    }

    // search filter
    if (q.length > 0) {
      list = list.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.asin.toLowerCase().includes(q)
      );
    }

    return list;
  }, [items, tab, query]);

  useEffect(() => {
    // reset visible count when switching tabs / search
    setVisibleCount(30);
  }, [tab, query]);

  // infinite scroll — load more when near bottom (mobile friendly)
  useEffect(() => {
    function onScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        setVisibleCount((c) => Math.min(c + 30, 2000));
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="store-container">
        <header className="store-header">
          <div>
            <h1>Pierre Amazon Picks for Best Use</h1>
            <div className="subtitle">Shop best-selling items — curated for you</div>
          </div>

          <div className="search-wrap">
            <input
              aria-label="Search products"
              placeholder="Search for products, e.g. 'headphones'..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </header>

        <nav className="tabs">
          {CATEGORY_TABS.map((t) => (
            <button
              key={t}
              className={`tab ${t === tab ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </nav>

        <main>
          <section className="grid">
            {filtered.slice(0, visibleCount).map((it) => (
              <article className="card" key={it.id}>
                <a href={it.affiliateLink} target="_blank" rel="noreferrer" className="img-link">
                  <img
                    src={it.image}
                    alt={it.title}
                    loading="lazy"
                    width="420"
                    height="320"
                  />
                </a>

                <div className="card-body">
                  <h3 className="title">{it.title}</h3>
                  <div className="meta">{it.currency} {it.price}</div>

                  <div className="actions">
                    <a
                      className="buy-btn"
                      href={it.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy Now on Amazon
                    </a>
                    <a
                      className="view-btn"
                      href={it.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${it.title} on Amazon`}
                    >
                      View
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {filtered.length === 0 && (
            <div className="empty">No results found.</div>
          )}

          {filtered.length > visibleCount && (
            <div className="load-more-wrap">
              <button onClick={() => setVisibleCount((c) => c + 30)} className="load-more">
                Load more
              </button>
            </div>
          )}
        </main>

        <footer className="store-footer">
          <div>Affiliate tag: <strong>{AFFILIATE_TAG}</strong> — All links include your tracking ID.</div>
          <div className="small">This demo uses placeholder product data. When you get PAAPI keys I can wire real Amazon data in.</div>
        </footer>
      </div>

      <style jsx>{`
        .store-container {
          max-width: 1200px;
          margin: 18px auto;
          padding: 0 16px 80px;
          font-family: Inter, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          color: #111827;
        }
        .store-header {
          display: flex;
          gap: 16px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .store-header h1 {
          margin: 0;
          font-size: 20px;
        }
        .subtitle { color: #6b7280; font-size: 13px; margin-top:4px; }
        .search-wrap input {
          padding: 10px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          width: 300px;
          max-width: 100%;
        }

        .tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 10px 0;
          margin-bottom: 12px;
        }
        .tab {
          border: none;
          padding: 8px 12px;
          background: #fff;
          border-radius: 999px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          cursor: pointer;
          color: #374151;
          font-size: 14px;
        }
        .tab.active { background:#111827; color:#fff; }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
        }
        .card {
          background: #fff;
          border: 1px solid #e6e6e6;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .card:hover { transform: translateY(-4px); box-shadow:0 6px 18px rgba(17,24,39,0.08); }
        .img-link img { width: 100%; height: 180px; object-fit: contain; background: #fafafa; display:block; }
        .card-body { padding: 12px; display:flex; flex-direction: column; gap:8px; flex:1; }
        .title { font-size: 14px; margin:0; min-height:40px; color:#111827; }
        .meta { color:#0b845e; font-weight:600; }
        .actions { display:flex; gap:8px; margin-top:auto; }
        .buy-btn {
          background: #0073e6;
          color: white;
          padding: 9px 10px;
          border-radius: 8px;
          text-decoration:none;
          font-weight:600;
          font-size: 14px;
        }
        .view-btn {
          background: #f3f4f6;
          color:#111827;
          padding:9px 10px;
          border-radius:8px;
          text-decoration:none;
          font-size:14px;
        }
        .load-more-wrap { text-align:center; margin-top:16px; }
        .load-more { padding:10px 18px; border-radius:8px; border:1px solid #e5e7eb; background:#fff; cursor:pointer; }
        .empty { text-align:center; padding:24px; color:#6b7280; }
        .store-footer { margin-top:20px; color:#6b7280; font-size:13px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }

        /* responsive adjustments */
        @media (max-width: 640px) {
          .store-header { flex-direction: column; align-items:flex-start; gap:8px; }
          .search-wrap input { width:100%; }
          .img-link img { height:160px; }
        }
      `}</style>
    </>
  );
}
