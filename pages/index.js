// pages/index.js
import Head from "next/head";

const AFFILIATE = "pierre121-20";

const PRODUCTS = [
  // 20 verified/popular Amazon US product pages (affiliate tag appended)
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Generation)",
    image: "https://m.media-amazon.com/images/I/617I3mDGmTL._AC_SX425_.jpg",
    link: `https://www.amazon.com/dp/B0BDHWDR12/?tag=${AFFILIATE}`,
  },
  {
    id: 2,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    image: "https://m.media-amazon.com/images/I/71xbdrK1vOL._AC_AIweblab1006854,T4_FMavif_SF700,700_PQ69_.jpg?aicid=detailPage-mediaBlock",
    link: `https://www.amazon.com/dp/B08PQ2KWHS/?tag=${AFFILIATE}`,
  },
  {
    id: 3,
    title: "Kindle Paperwhite (Latest)",
    image: "https://m.media-amazon.com/images/I/71FWKtSIYUL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/dp/B08KTZ8249/?tag=${AFFILIATE}`,
  },
  {
    id: 4,
    title: "Lodge Cast Iron Skillet - 10.25 Inch",
    image: "https://m.media-amazon.com/images/I/61eNv9BXyaL._AC_SX569_.jpg",
    link: `https://www.amazon.com/Lodge-Skillet-Pre-Seasoned-Ready-Stove/dp/B00006JSUA?th=1/?tag=${AFFILIATE}`,
  },
  {
    id: 5,
    title: "Hydro Flask Wide Mouth Bottle (32 oz)",
    image: "https://m.media-amazon.com/images/I/41eISRYlWdL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/Owala-FreeSip-Stainless-Boneyard-Bottle/dp/B0BFYRMHTJ/ref=sr_1_3_sspa?dib=eyJ2IjoiMSJ9.AgN3SH16vSURHMV41BIQ8sDIvP_1SSjst0TVOqf80oNYtMG_D8aC8UGOiFKsVPy8Zk-Zg_L2VsbymmvlhKTAtGKKwEEFVk-pOmoRWfDu62-815lAHHwv4gON5I69yBTM7W1mheD0dowVT-szoW7cT4d1kqPEDoxg7gXGS57dL8xcYRgXhrfp6RLjnhEC2Q5HT7k5qIRglmFpLIs08xKVb2e19xTR3tX4Ol1_UTBQhiNErBI25yy0j0Jx6KQsRLTZQ_JJer73jCWXOmxMm_A3WcbXNP1FxYm1pzFeago8k48.v8WCpVf-4TtTA0fnWDjvZlMvMdRbbqQ4ACUKG8mMvss&dib_tag=se&keywords=Hydro+Flask+Wide+Mouth+Bottle+%2832+oz%29&qid=1761474239&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1/?tag=${AFFILIATE}`,
  },
  {
    id: 6,
    title: "Fire TV Stick 4K with Alexa Voice Remote",
    image: "https://m.media-amazon.com/images/I/61TzK204IjL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/all-new-fire-tv-stick-4k-with-alexa-voice-remote/dp/B08XVYZ1Y5/?tag=${AFFILIATE}`,
  },
  {
    id: 7,
    title: "CeraVe Moisturizing Cream (16 oz)",
    image: "https://m.media-amazon.com/images/I/41Kc6H7fboL._SY300_SX300_QL70_FMwebp_.jpg",
    link:  `https://www.amazon.com/CeraVe-Moisturizing-Cream-Daily-Moisturizer/dp/B00TTD9BRC?th=1/?tag=${AFFILIATE}`,
  },
  {
    id: 8,
    title: "Anker PowerCore 10000 Portable Charger",
    image: "https://m.media-amazon.com/images/I/61LN69va5IL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/anker-powercore-ultra-small-10000mah-portable/dp/b07ddf8cnk/?tag=${AFFILIATE}`,
  },
  {
    id: 9,
    title: "JBL Flip 6 Portable Bluetooth Speaker",
    image: "https://m.media-amazon.com/images/I/71DMsp+X-pL._AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/JBL-Flip-Bluetooth-Waterproof-PartyBoost/dp/B09GJMPRYW/ref=sr_1_1?dib=eyJ2IjoiMSJ9.c1cgsI7nbvq3_67FE2PHoj_CW7w7jtMaO80bqqH-UcFziO_CBDmIE810t4eC6NzUskxnneLFQPauOvAyykF2otW_5gun6cZ1QbXMhCnm6hOL-uWEe2XM7w5KzROISoafBwzf3Zh2Vzj6rhH2fx4FnwdLkEyzFvyjmsts48btdTNT0anII1e3axLOjpu2AZYrtKAek9YZWeguX5_bY6yu9ESeZ5QjqJzUlXoz-j7u1QI.HkxutlGUv_KNr-_K1JlXUjnRcWFbWsG5Y-xHE2ZQo3o&dib_tag=se&keywords=JBL+Flip+6+Portable+Bluetooth+Speaker&qid=1761475125&sr=8-1/?tag=${AFFILIATE}`,
  },
  {
    id: 10,
    title: "Echo Dot (5th Gen) Smart Speaker with Alexa",
    image: "https://m.media-amazon.com/images/I/71yRY8YlAbL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/dp/B09B8V1LZ3/?tag=${AFFILIATE}`,
  },

  {
    id: 11,
    title: "Apple 20W USB-C Power Adapter",
    image: "https://m.media-amazon.com/images/I/61ViCg5-E-L._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/iPhone-Charger-Charging-2Pack-Block/dp/B0D78SLYB1/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.z2tWI8Rg5siR97228mRtBhxN000Aru_w3At_sNTZ612Qs8MFiFeLgeQnLb1shtKRl4YH3RhTnbakeG2LFf7PIgrH5LePrSPiiAG8eLODmCT4tN5NBMilgoSD39C-MdDfii9U-qWfLXJLLXi_1R6iCOEhGs77snDga4X1dtfSVelRojCq6HEX-jrFNtyb8gmv_YHTv9x_HGVWBtV_Ypj-YYS47CZ2x3Cc3qL7uxPEkPY.ljDg075BgXLvon7V5sbJwS0cLfF1Pc7x9gJMqu65HGI&dib_tag=se&keywords=Apple+20W+USB-C+Power+Adapter&qid=1761475401&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1/?tag=${AFFILIATE}`,
  },
  {
    id: 12,
    title: "Samsung EVO Select 128GB microSDXC",
    image: "https://m.media-amazon.com/images/I/81axmUuRHrL._AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/dp/B0887GP791/?tag=${AFFILIATE}`,
  },
  {
    id: 13,
    title: "Keurig K-Classic Coffee Maker",
    image: "https://m.media-amazon.com/images/I/61wQb8IB8UL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/dp/B018UQ5AMS/?tag=${AFFILIATE}`,
  },
  {
    id: 14,
    title: "Ninja Air Fryer (4 Qt)",
    image: "https://m.media-amazon.com/images/I/71+8uTMDRFL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/dp/B07FDJMC9Q/?tag=${AFFILIATE}`,
  },
  {
    id: 15,
    title: "Sony WH-CH510 Wireless On-Ear Headphones",
    image: "https://m.media-amazon.com/images/I/41H-Lb8rA1L._AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/dp/B07T81554H/?tag=${AFFILIATE}`,
  },
  {
    id: 16,
    title: "Fitbit Inspire 2 Health & Fitness Tracker",
    image: "https://m.media-amazon.com/images/I/51uHD-x+3-L._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/dp/B08DFGWDZR/?tag=${AFFILIATE}`,
  },
  {
    id: 17,
    title: "Oxo Good Grips 3-in-1 Avocado Slicer",
    image: "https://m.media-amazon.com/images/I/51oYsbyhMgL._AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/3-1-Avocado-Slicer-Cutter/dp/B0DSTN6X8M/ref=sr_1_2?crid=391P2LPE29WVF&dib=eyJ2IjoiMSJ9.6Lvoqie7H-NpL_nJzKNahiEBLl7ADb7Nd-jQ4lxJvlNg-ITtaqFpKVf4aiy61Dg7kKHCyYxn8ucEFE1NCNeqIZbjvek6hxrq2u03X2DUgZHfan_wteqFFnV_i7EtRS4Kt0Rc1jrKA6wVVVQklsAq43uoWcQ_2DV9NX4Lq4fzR6bX3BFsTtfuS9Gk_DOyFKe9vRUKjK6BaDOq00Qx80rukYsX9ZtAFu-kqvOSC0mnHvJkLgCKAKXBHtxURNkz-__ntSngB8ZrvohACuS35oKS1aNz7zk44aHKfZPi6gsPvfM.PTOqHAUkjLlgSOKXXdcTpRqrtmIV2QWvsyq6a8CymrI&dib_tag=se&keywords=oxo+good+grips+3-in-1+avocado+slicer&qid=1761475971&sprefix=Oxo+Good+Grips+3-in-1+Avocado+Slicer%2Caps%2C894&sr=8-2/?tag=${AFFILIATE}`,
  },
  {
    id: 18,
    title: "Victorinox Swiss Army Classic SD Pocket Knife",
    image: "https://m.media-amazon.com/images/I/61-heWmCTKL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/dp/B00020S7XK/?tag=${AFFILIATE}`,
  },
  {
    id: 19,
    title: "Calphalon Nonstick Cookware Set (12-Piece)",
    image: "https://m.media-amazon.com/images/I/61nIgS-dfJL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/Calphalon%C2%AE-Ceramic-Nonstick-12-pc-Cookware/dp/B0D9HYM4Y4/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.8hZCr1Vo04qxsAm6r3r9oruFyJaTvkkXJEnsEwW_huR8XW2AzuHfhOsWwfalJTZ3HwxluiisivyzHTRWerNYdZy5F4WoZEl2iSJIXwPPRT-XrXwkqoJRPQ2IdzL3yxJn8V27nPgsm87uOhPctqiwJQgR1Cgy3Zj-d2llLy89jfR4EfVjY2gIAje2csmgqZwPw1lIrujOAQpewcksa6YibSFnFgrm8yKqt4eifZA2EK4DvMId7b4CptbpFMkyYIhI6GqbFmdY4eime1-7VADj1wWzxbC7hLa7torhzNqRAkw.Ain7GhTXMjnrbDV0Xu6Vl4mL5ROG9TL-P789oXZCujk&dib_tag=se&keywords=Calphalon+Nonstick+Cookware+Set+%2810-Piece%29&qid=1761476270&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1/?tag=${AFFILIATE}`,
  },
  {
    id: 20,
    title: "LEGO Star Wars: The Mandalorian The Razor Crest",
    image: "https://m.media-amazon.com/images/I/81gnlmQ5NUL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: `https://www.amazon.com/LEGO-Star-Wars-Mandalorian-Building/dp/B0849GQSC7/ref=sr_1_2?dib=eyJ2IjoiMSJ9.VhHcX3Ajx0NDN9fLPjNF6oMc-BJVqdSda_rdpdGXLX_haOK82mrYeb3YxyDfoLjEen7GOYbaH0yjkeBn2aaxWhg4m0L4PDDazjwpS_osVuqNP93tIn5o4-0H3HcqS6ipJ5zPk-dTceOonQ72pTfr960nBpvzJuSvw_xqCCOpyN_P32YzKiobUf2_wDJxz9sGpV6s7XfR_iO6Dl0KhH_NCYKBvZI11oSE2J77HAkdzUACBLUAPvzQCYyv1zxNNAgoGDEOz3wdZ1edfDPoBmQVSWz2DsC9DwwKbFTiI25yre4.Ae_r6MupV_1r6x39r6PrIE3YPG1D8bdzatDmM7s87Ec&dib_tag=se&keywords=LEGO+Star+Wars%3A+The+Mandalorian+The+Razor+Crest&qid=1761476461&sr=8-2/?tag=${AFFILIATE}`,
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
