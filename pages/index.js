// pages/index.js
import { useMemo, useState } from "react";

const AFFILIATE_TAG = "pierre121-20"; // your tag

// 20 placeholder items — replace `asin`, `image` and `price` with real data
const ITEMS = [
  { id: 1, title: "Echo Dot (sample)", price: "$49.99", asin: "B07FZ8S74R", category: "Featured", image: "https://images.unsplash.com/photo-1518444020076-f8d5b0b15c38?w=1200&q=80" },
  { id: 2, title: "Fire TV Stick (sample)", price: "$39.99", asin: "B08XVYZ1Y5", category: "Featured", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80" },
  { id: 3, title: "Apple AirPods (sample)", price: "$129.99", asin: "B07PXGQC1Q", category: "Electronics", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80" },
  { id: 4, title: "Kindle Paperwhite (sample)", price: "$139.99", asin: "B07CXG6C9W", category: "Electronics", image: "https://images.unsplash.com/photo-1523475496153-3b0b9b8b6b1f?w=1200&q=80" },
  { id: 5, title: "Bluetooth Speaker (sample)", price: "$59.99", asin: "B07QK2SPP7", category: "Electronics", image: "https://images.unsplash.com/photo-1518449079324-9d0b3bcd3b1d?w=1200&q=80" },
  { id: 6, title: "Smart Watch (sample)", price: "$69.99", asin: "B07Y8GZJ2Z", category: "Fitness", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&q=80" },
  { id: 7, title: "Portable Power Bank (sample)", price: "$29.99", asin: "B07D1X1N3Z", category: "Electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80" },
  { id: 8, title: "Robot Vacuum (sample)", price: "$249.99", asin: "B07PGL2ZSL", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1549388604-817d15aa0110?w=1200&q=80" },
  { id: 9, title: "Air Purifier (sample)", price: "$119.99", asin: "B07G5QWZ3S", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80" },
  { id: 10, title: "Instant Pot (sample)", price: "$89.99", asin: "B00FLYWNYQ", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80" },
  { id: 11, title: "Hair Dryer (sample)", price: "$39.99", asin: "B07G9QZYVJ", category: "Beauty & Health", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80" },
  { id: 12, title: "Electric Toothbrush (sample)", price: "$49.99", asin: "B07YFJ1T5Z", category: "Beauty & Health", image: "https://images.unsplash.com/photo-1542736667-069246bdbc76?w=1200&q=80" },
  { id: 13, title: "Gaming Keyboard (sample)", price: "$59.99", asin: "B07Q2X9QFW", category: "Electronics", image: "https://images.unsplash.com/photo-1526378721945-73d5ef1d7a7c?w=1200&q=80" },
  { id: 14, title: "Wireless Headphones (sample)", price: "$89.99", asin: "B07Y2J4Q8P", category: "Electronics", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80" },
  { id: 15, title: "Fitness Band (sample)", price: "$29.99", asin: "B07P8M1TLB", category: "Fitness", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80" },
  { id: 16, title: "Coffee Maker (sample)", price: "$79.99", asin: "B07G3R2ZVR", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80" },
  { id: 17, title: "Blender (sample)", price: "$49.99", asin: "B078K3QDF7", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1547045662-9ec1d86dd9b9?w=1200&q=80" },
  { id: 18, title: "Action Camera (sample)", price: "$94.99", asin: "B07P9X2F4D", category: "Electronics", image: "https://images.unsplash.com/photo-1519183071298-a2962be90b06?w=1200&q=80" },
  { id: 19, title: "Portable Projector (sample)", price: "$121.23", asin: "B0897B4P6C", category: "Electronics", image: "https://images.unsplash.com/photo-1531497865140-4a64b0a3b8d7?w=1200&q=80" },
  { id: 20, title: "Kids Toy (sample)", price: "$19.99", asin: "B07D7P8LQK", category: "Toys & Games", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&q=80" }
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("Featured");

  const categories = useMemo(
    () => ["Featured", "Electronics", "Home & Kitchen", "Fitness", "Beauty & Health", "Toys & Games"],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ITEMS.filter((it) => {
      const matchCat = activeCat === "Featured" ? true : it.category === activeCat;
      const matchQ = !q || it.title.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, activeCat]);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Pierre's Amazon Picks — Best Sellers (Preview)</h1>
        <div style={styles.searchRow}>
          <input
            aria-label="Search products"
            placeholder="Search items..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.search}
          />
          <button style={styles.smallBtn} onClick={() => setQuery("")}>Clear</button>
        </div>

        <div style={styles.tabs}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              style={activeCat === c ? {...styles.tab, ...styles.tabActive} : styles.tab}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <main style={styles.container}>
        <div style={styles.grid}>
          {filtered.map((p) => {
            const amazonUrl = `https://www.amazon.com/dp/${p.asin}/?tag=${AFFILIATE_TAG}`;
            return (
              <article key={p.id} style={styles.card}>
                <div style={styles.imgWrap}>
                  <img src={p.image} alt={p.title} style={styles.img} onError={(e)=>e.target.src='https://via.placeholder.com/600x400?text=No+Image'} />
                </div>
                <div style={styles.cardBody}>
                  <h3 style={styles.prodTitle}>{p.title}</h3>
                  <div style={styles.price}>{p.price}</div>
                  <div style={styles.cardBtns}>
                    <a href={amazonUrl} target="_blank" rel="noopener noreferrer" style={styles.buyBtn}>Buy Now on Amazon</a>
                    <a href={amazonUrl} target="_blank" rel="noopener noreferrer" style={styles.viewBtn}>View</a>
                  </div>
                </div>
              </article>
            );
          })}
          {filtered.length === 0 && <p style={{padding:20}}>No items found</p>}
        </div>
      </main>

      <footer style={styles.footer}>
        <small>Affiliate tag used: <strong>{AFFILIATE_TAG}</strong>. Replace placeholder ASINs/images with real products.</small>
      </footer>
    </div>
  );
}

const styles = {
  page: { fontFamily: "Inter, Arial, sans-serif", background: "#f9fafb", minHeight: "100vh", color: "#111" },
  header: { padding: "28px 20px 8px", textAlign: "center" },
  title: { margin: 0, fontSize: 22 },
  searchRow: { marginTop: 12, display: "flex", justifyContent: "center", gap: 8 },
  search: { width: "60%", maxWidth: 560, padding: "10px 12px", borderRadius: 8, border: "1px solid #ddd" },
  smallBtn: { padding: "10px 14px", borderRadius: 8, border: "1px solid #ddd", background: "#fff" },
  tabs: { marginTop: 14, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" },
  tab: { padding: "8px 14px", borderRadius: 999, border: "1px solid #e6e6e6", background: "#fff" },
  tabActive: { background: "#111827", color: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" },

  container: { padding: "18px 18px 60px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16 },
  card: { background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 14px rgba(2,6,23,0.06)", display: "flex", flexDirection: "column", minHeight: 300 },
  imgWrap: { height: 160, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" },
  img: { maxWidth: "100%", maxHeight: "100%", objectFit: "cover", width: "100%", height: "100%" },
  cardBody: { padding: 14, display: "flex", flexDirection: "column", gap: 10, flex: 1 },
  prodTitle: { fontSize: 16, margin: 0 },
  price: { color: "#059669", fontWeight: 700 },
  cardBtns: { marginTop: "auto", display: "flex", gap: 8 },
  buyBtn: { flex: 1, textAlign: "center", padding: "10px 12px", background: "#0073e6", color: "#fff", borderRadius: 8, textDecoration: "none" },
  viewBtn: { padding: "10px 12px", background: "#eef2f7", color: "#111", borderRadius: 8, textDecoration: "none", minWidth: 72, textAlign: "center" },

  footer: { textAlign: "center", padding: 20, color: "#6b7280" },
};
