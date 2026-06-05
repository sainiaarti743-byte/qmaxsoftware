import { useState, useEffect } from "react";

const stats = [
  { icon: "🚀", value: "1500+", label: "Ideas & Projects Delivered" },
  { icon: "🏆", value: "10+",   label: "Years of Industry Experience" },
  { icon: "🥇", value: "Awarded", label: "Best Development Company" },
  { icon: "👥", value: "95%",  label: "Client Retention Ratio" },
  { icon: "✅", value: "99%",  label: "Certified & Expert Tech Employees" },
];

const team = [
  { name: "Namit Gupta",    role: "General Manager",             initials: "NG" },
  { name: "Dilip Kumawat",  role: "Software Development Manager",initials: "DK" },
  { name: "Bharat Nama",    role: "Android Team Leader",         initials: "BN" },
  { name: "Rahul Panchal",  role: "Creative Head",               initials: "RP" },
];

const whyUs = [
  "Prioritizing the needs of Clients",
  "Effective Synergy",
  "Timely Delivery",
  "Robust Skill Set",
  "Distinctive Ideation",
  "Results-Oriented Work",
  "24*7 Live Support",
];

const smartValues = [
  { letter: "S", label: "Simplify",    color: "#e85d04" },
  { letter: "M", label: "Managerial",  color: "#f48c06" },
  { letter: "A", label: "Authentic",   color: "#e85d04" },
  { letter: "R", label: "Reliable",    color: "#f48c06" },
  { letter: "T", label: "Trustworthy", color: "#e85d04" },
];

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; }

  /* ── HERO ── */
  .ez-hero {
    position: relative; min-height: 320px;
    display: flex; align-items: center; overflow: hidden;
  }
  .ez-hero-bg {
    position: absolute; inset: 0;
    background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80');
    background-size: cover; background-position: center;
    filter: brightness(0.35); z-index: 0;
  }
  .ez-hero-content {
    position: relative; z-index: 1;
    padding: 60px 60px;
  }
  .ez-hero h1 {
    color: #fff; font-size: 3rem; font-weight: 800;
    transition: all 0.8s ease;
  }
  .ez-hero-btn {
    display: inline-block; margin-top: 20px;
    border: 2px solid #e85d04; color: #fff;
    padding: 10px 28px; font-weight: 600;
    text-decoration: none; letter-spacing: 1px;
    transition: background 0.3s;
  }
  .ez-hero-btn:hover { background: #e85d04; color: #fff; }

  /* ── SECTIONS ── */
  .ez-section { padding: 70px 60px; }
  .ez-section-light { background: #fff; }
  .ez-section-warm  { background: #fff6ee; }
  .ez-section-grey  { background: #f5f5f5; }

  .ez-divider {
    width: 60px; height: 3px; background: #e85d04; margin: 0 auto 16px;
  }
  .ez-section-title {
    color: #e85d04; font-weight: 800; font-size: 1.8rem;
    text-align: center; margin-bottom: 10px;
  }
  .ez-section-sub {
    color: #555; max-width: 680px; margin: 0 auto 50px;
    line-height: 1.8; text-align: center;
  }

  /* ── STATS CARD ── */
  .ez-stats-card {
    background: #e85d04; border-radius: 16px; padding: 36px 30px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
  }
  .ez-stat-item { color: #fff; display: flex; gap: 12px; align-items: flex-start; }
  .ez-stat-icon { font-size: 1.8rem; }
  .ez-stat-val  { font-weight: 800; font-size: 1.3rem; }
  .ez-stat-lbl  { font-size: 0.82rem; opacity: 0.88; }

  /* ── FOUNDERS ── */
  .ez-founders-card {
    background: #e85d04; border-radius: 20px; padding: 40px 30px;
    display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;
  }
  .ez-founder-photo {
    width: 120px; height: 150px; border-radius: 12px;
    background: rgba(255,255,255,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 3rem; margin-bottom: 12px;
  }

  /* ── MISSION / VISION ── */
  .ez-mv-card {
    border-radius: 16px; padding: 36px 30px; height: 100%;
  }
  .ez-mv-card.mission { border: 2px solid #222; }
  .ez-mv-card.vision  { border: 2px solid #e85d04; }
  .ez-mv-title {
    background: #222; color: #fff; text-align: center;
    padding: 10px 0; border-radius: 8px; margin-bottom: 24px;
    font-weight: 800; letter-spacing: 2px; font-size: 1.1rem;
  }

  /* ── SMART VALUES ── */
  .ez-smart-wrap {
    display: flex; justify-content: center;
    flex-wrap: wrap; gap: 28px; margin-top: 20px;
  }
  .ez-smart-item { display: flex; flex-direction: column; align-items: center; gap: 12px; }
  .ez-smart-diamond {
    width: 70px; height: 70px; border-radius: 12px;
    transform: rotate(45deg);
    display: flex; align-items: center; justify-content: center;
  }
  .ez-smart-letter {
    transform: rotate(-45deg); color: #fff;
    font-weight: 900; font-size: 1.6rem;
  }
  .ez-smart-label { font-weight: 700; color: #e85d04; font-size: 1rem; }

  /* ── TEAM CARD ── */
  .ez-team-card {
    border-radius: 16px; overflow: hidden; background: #fff;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s;
  }
  .ez-team-card:hover { transform: translateY(-6px); }
  .ez-team-photo {
    height: 160px; background: #e0e0e0;
    display: flex; align-items: center; justify-content: center;
    font-size: 2.4rem; color: #888; font-weight: 700;
  }
  .ez-team-info { background: #e85d04; padding: 14px 10px; color: #fff; text-align: center; }
  .ez-team-name { font-weight: 700; font-size: 1rem; }
  .ez-team-role { font-size: 0.8rem; opacity: 0.9; }

  /* ── WHY US ── */
  .ez-why-tile {
    border-radius: 14px; padding: 28px 20px;
    font-weight: 700; font-size: 1rem; color: #fff;
    text-align: center; cursor: default;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .ez-why-tile:hover {
    transform: scale(1.04);
    box-shadow: 0 8px 24px rgba(232,93,4,0.3);
  }

  /* ── CONTACT FORM ── */
  .ez-quote-img {
    border-radius: 16px; padding: 60px 40px;
    min-height: 300px; display: flex; align-items: center; justify-content: center;
    background: linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),
                url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80');
    background-size: cover; background-position: center;
    color: #fff;
  }
  .ez-quote-img blockquote {
    font-size: 1.3rem; font-style: italic; font-weight: 600;
    text-align: center; margin: 0;
  }
  .ez-form-label { color: #e85d04; font-weight: 600; margin-bottom: 6px; display: block; }
  .ez-form-input {
    width: 100%; padding: 12px 16px; border: 1px solid #ddd;
    border-radius: 8px; font-size: 1rem; outline: none;
    transition: border-color 0.2s;
  }
  .ez-form-input:focus { border-color: #e85d04; }
  .ez-submit-btn {
    background: linear-gradient(135deg,#e85d04,#f48c06);
    color: #fff; border: none; padding: 14px 60px;
    border-radius: 50px; font-weight: 700; font-size: 1.1rem;
    cursor: pointer; transition: opacity 0.2s;
  }
  .ez-submit-btn:hover { opacity: 0.88; }

  /* ────── RESPONSIVE ────── */
  @media (max-width: 991px) {
    .ez-section { padding: 50px 30px; }
    .ez-hero-content { padding: 50px 30px; }
    .ez-hero h1 { font-size: 2.2rem; }
  }

  @media (max-width: 767px) {
    .ez-section { padding: 40px 16px; }
    .ez-hero-content { padding: 40px 20px; }
    .ez-hero h1 { font-size: 1.8rem; }
    .ez-section-title { font-size: 1.4rem; }

    .ez-stats-card { grid-template-columns: 1fr 1fr; gap: 16px; padding: 24px 16px; }
    .ez-stat-val  { font-size: 1.1rem; }

    .ez-founders-card { padding: 28px 16px; }
    .ez-founder-photo { width: 100px; height: 130px; font-size: 2.4rem; }

    .ez-mv-card { padding: 24px 18px; }

    .ez-smart-diamond { width: 56px; height: 56px; }
    .ez-smart-letter  { font-size: 1.3rem; }

    .ez-team-photo { height: 120px; font-size: 1.8rem; }

    .ez-why-tile { padding: 18px 12px; font-size: 0.9rem; }

    .ez-quote-img { padding: 40px 20px; min-height: 200px; }
    .ez-quote-img blockquote { font-size: 1rem; }
    .ez-submit-btn { padding: 12px 40px; font-size: 1rem; }
  }

  @media (max-width: 480px) {
    .ez-hero h1 { font-size: 1.5rem; }
    .ez-stats-card { grid-template-columns: 1fr; }
    .ez-section-title { font-size: 1.2rem; }
    .ez-smart-wrap { gap: 16px; }
  }
`;

export default function AboutUs() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <>
      <style>{css}</style>

     
      <div>

        {/* ── HERO ── */}
        <section className="ez-hero mt-4">
          <div className="ez-hero-bg" />
          <div className="ez-hero-content">
            <h1 style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}>
              About Us
            </h1>
            <a
              href="#contact"
              className="ez-hero-btn"
              style={{ opacity: visible ? 1 : 0, transition: "all 1s ease 0.3s" }}
            >
              Our Work →
            </a>
          </div>
        </section>

        {/* ── WHAT DO WE DO ── */}
        <section className="ez-section ez-section-light">
          <div className="container-fluid">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-12 col-lg-6">
                <h2 style={{ color: "#e85d04", fontWeight: 800, fontSize: "clamp(1.4rem,4vw,2rem)", marginBottom: 16 }}>
                  WHAT DO WE DO?
                </h2>
                <p style={{ lineHeight: 1.8, color: "#444" }}>
                  In 2015, Qmax Software Pvt. Ltd. was established as a web development company in Jaipur, Rajasthan.
                  With the goal of assisting clients in expanding their enterprises, we began integrating cutting-edge
                  technology solutions. The year 2018 saw the company's official, fully authenticated, and authorized launch.
                </p>
                <p style={{ lineHeight: 1.8, color: "#444", marginTop: 14 }}>
                  We deliver services for solutions that are significantly broadened to meet all-time business and technology
                  needs of today's global environment. Qmax has planted the quality seeds of an organization that offered
                  fruitful web, mobile, and software development services.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div className="ez-stats-card">
                  {stats.map((s, i) => (
                    <div key={i} className="ez-stat-item">
                      <span className="ez-stat-icon">{s.icon}</span>
                      <div>
                        <div className="ez-stat-val">{s.value}</div>
                        <div className="ez-stat-lbl">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT FOUNDERS ── */}
        <section className="ez-section ez-section-warm">
          <div className="container-fluid">
            <div className="row g-4 g-lg-5 align-items-center">
              <div className="col-12 col-lg-5">
                <div className="ez-founders-card">
                  {[
                    { name: "Arvind Saini",  role: "Founder & CEO" },
                    { name: "Mahesh Sharma", role: "Founder & MD"  },
                  ].map((p, i) => (
                    <div key={i} style={{ textAlign: "center", color: "#fff" }}>
                      <div className="ez-founder-photo">👤</div>
                      <div style={{ fontWeight: 700, fontSize: "1rem" }}>{p.name}</div>
                      <div style={{ fontSize: "0.85rem", opacity: 0.88 }}>{p.role}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <h2 style={{ color: "#e85d04", fontWeight: 800, fontSize: "clamp(1.3rem,3.5vw,1.8rem)", marginBottom: 18 }}>
                  ABOUT US?
                </h2>
                <p style={{ lineHeight: 1.8, color: "#444" }}>
                  Mr. Arvind Saini and Mr. Mahesh Kumar Sharma — two data-driven and perceptive IT experts with a proven
                  track record of achievement, a deep affection for their team, and an unshakable hunger for triumph.
                </p>
                <p style={{ lineHeight: 1.8, color: "#444", marginTop: 14 }}>
                  Since 2018, Qmax Software Pvt. Ltd. has been growing tremendously and is now a name to reckon with
                  within the MSME segment in India's services sector. They are effective communicators with exceptional
                  relationship management skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="ez-section ez-section-light">
          <div className="container-fluid">
            <div className="row g-4">
              {[
                {
                  cls: "mission", title: "MISSION",
                  text: "Our mission is to use innovative concepts and development to help our client's businesses flourish. We comprehend our client's needs, examine them, and offer the ideal solutions. We are committed to offering clients cutting-edge, trustworthy solutions of the highest caliber. Qmax is committed to looking into new possibilities that would enhance company value, steady growth, and sustainability.",
                },
                {
                  cls: "vision", title: "VISION",
                  text: "Our actual vision is to improve upon where we are now in the market and become India's top software firm. We support our customers in attaining their business objectives because we think that their success is also our success. We assist organizations in their transition to becoming digital businesses and set them apart from market rivals.",
                },
              ].map((item) => (
                <div className="col-12 col-md-6" key={item.cls}>
                  <div className={`ez-mv-card ${item.cls}`}>
                    <div className="ez-mv-title">{item.title}</div>
                    <p style={{ lineHeight: 1.8, color: "#444" }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="ez-section ez-section-grey">
          <div className="container-fluid text-center">
            <h2 className="ez-section-title">CORE VALUES</h2>
            <div className="ez-divider" />
            <p className="ez-section-sub">
              Qmax believes in the saying, "Treat people how you would like to be treated". We follow the SMART rule
              to give value to our company's presence.
            </p>
            <div className="ez-smart-wrap">
              {smartValues.map((v) => (
                <div key={v.letter} className="ez-smart-item">
                  <div className="ez-smart-diamond" style={{ background: v.color }}>
                    <span className="ez-smart-letter">{v.letter}</span>
                  </div>
                  <span className="ez-smart-label">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEET OUR TEAM ── */}
        <section className="ez-section ez-section-light">
          <div className="container-fluid text-center">
            <h2 className="ez-section-title">MEET OUR TEAM</h2>
            <div className="ez-divider" />
            <p className="ez-section-sub">
              Our pillars of strength pledge to significantly improve your company through a strong dedication
              and distinctive approach.
            </p>
            <div className="row justify-content-center g-3 g-md-4">
              {team.map((m) => (
                <div className="col-6 col-sm-6 col-md-3" key={m.name}>
                  <div className="ez-team-card">
                    <div className="ez-team-photo">{m.initials}</div>
                    <div className="ez-team-info">
                      <div className="ez-team-name">{m.name}</div>
                      <div className="ez-team-role">{m.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="ez-section ez-section-grey">
          <div className="container-fluid text-center">
            <h2 className="ez-section-title">WHY CHOOSE US?</h2>
            <div className="ez-divider" />
            <p className="ez-section-sub">
              At Qmax Software, we ensure you choose the right course of action for your project from the outset.
              For our experts, clean code implementation is not challenging but quite interesting.
            </p>
            <div className="row justify-content-center g-3">
              {whyUs.map((w, i) => (
                <div className="col-12 col-sm-6 col-md-4" key={i}>
                  <div
                    className="ez-why-tile"
                    style={{ background: i === 5 ? "#222" : "#e85d04" }}
                  >
                    {w}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GET A QUOTATION ── */}
        <section id="contact" className="ez-section ez-section-warm">
          <div className="container-fluid">
            <div className="row g-4 g-lg-5 align-items-center">
              <div className="col-12 col-lg-5">
                <div className="ez-quote-img">
                  <blockquote>
                    "Every Great, Big thing starts with a decision that you take today"
                  </blockquote>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <h2 style={{ color: "#e85d04", fontWeight: 800, fontSize: "clamp(1.3rem,3vw,1.8rem)", textAlign: "center", marginBottom: 6 }}>
                  Get a QUOTATION
                </h2>
                <p style={{ textAlign: "center", color: "#666", marginBottom: 24 }}>
                  Don't worry your data and business ideas are safe with us.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[["Full Name","text"],["Email Id","email"]].map(([label, type]) => (
                    <div key={label}>
                      <label className="ez-form-label">{label}</label>
                      <input type={type} placeholder={`Your ${label}`} className="ez-form-input" />
                    </div>
                  ))}
                  <div>
                    <label className="ez-form-label">Contact Number</label>
                    <div style={{ display: "flex", gap: 8 }}>
                      <div style={{
                        padding: "12px 14px", border: "1px solid #ddd", borderRadius: 8,
                        fontWeight: 600, background: "#f9f9f9", whiteSpace: "nowrap",
                      }}>
                        🇮🇳 +91
                      </div>
                      <input type="tel" placeholder="Your Contact Number" className="ez-form-input" style={{ flex: 1 }} />
                    </div>
                  </div>
                  <div>
                    <label className="ez-form-label">Message</label>
                    <textarea placeholder="Message" rows={4} className="ez-form-input" style={{ resize: "vertical" }} />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <button className="ez-submit-btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}