import { useState } from "react";

const awards = [
  {
    id: 1,
    emoji: "🏆",
    color: "#3b5bdb",
    badge: "TOP\nMOBILE APP\nDEVELOPMENT\nCOMPANY INDIA",
    source: "goodfirms.co",
    title: "Featured on GoodFirms as a Top Mobile App Development Company in India",
  },
  {
    id: 2,
    emoji: "🔵",
    color: "#1971c2",
    badge: "ISO\n27001:2013",
    source: "",
    title: "ISO 27001:2013 Certification",
  },
  {
    id: 3,
    emoji: "🛡️",
    color: "#3b5bdb",
    badge: "SOFTWARE\nDEVELOPMENT\nCOMPANIES\n2022",
    source: "",
    title: "Ranked among the Top Software Development Companies",
  },
  {
    id: 4,
    emoji: "⬡",
    color: "#495057",
    badge: "TOP\nC++ DEVELOPERS\nClutch\nJAIPUR 2022",
    source: "clutch.co",
    title: "Awarded as top C++ Developer in Jaipur by Clutch",
  },
  {
    id: 5,
    emoji: "⭐",
    color: "#c0392b",
    badge: "techreviewer.co\nTOP\nSoftware\nDevelopers\n2022",
    source: "techreviewer.co",
    title: "Ranked Among Top Software Developers",
  },
  {
    id: 6,
    emoji: "🥇",
    color: "#f59f00",
    badge: "RAJASTHAN\nACHIEVERS\nAWARD",
    source: "",
    title: "Honoured with the Rajasthan Achievers Award",
  },
];

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; }

  /* ── HERO ── */
  .aw-hero {
    position: relative; min-height: 380px;
    background: #0d0d0d;
    display: flex; align-items: center;
    overflow: hidden;
  }
  .aw-hero-glow {
    position: absolute; right: 0; top: 0; bottom: 0; width: 60%;
    background: radial-gradient(ellipse at 80% 50%, rgba(180,130,40,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .aw-hero-arcs {
    position: absolute; right: -60px; top: 50%; transform: translateY(-50%);
    width: 520px; height: 520px; pointer-events: none;
  }
  .aw-hero-stars {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      radial-gradient(circle, rgba(255,220,100,0.9) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px);
    background-size: 140px 140px, 200px 200px;
    background-position: 20px 30px, 90px 80px;
    opacity: 0.35;
  }
  .aw-hero-content {
    position: relative; z-index: 2;
    padding: 60px 80px; max-width: 680px;
  }
  .aw-hero h1 {
    color: #fff; font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 800; margin-bottom: 22px; line-height: 1.2;
  }
  .aw-hero p {
    color: rgba(255,255,255,0.78); line-height: 1.85;
    font-size: clamp(0.9rem, 1.8vw, 1rem); margin-bottom: 32px;
  }
  .aw-hero-btn {
    display: inline-block; border: 1.5px solid #fff;
    color: #fff; padding: 11px 30px; font-weight: 600;
    text-decoration: none; letter-spacing: 1.5px; font-size: 0.9rem;
    transition: background 0.3s, color 0.3s;
  }
  .aw-hero-btn:hover { background: #3677A2; border-color: #3677A2; color: #fff; }

  /* ── BREADCRUMB ── */
  .aw-breadcrumb { padding: 18px 80px; font-size: 0.9rem; color: #888; }
  .aw-breadcrumb a { color: #3677A2; text-decoration: none; }
  .aw-breadcrumb span { margin: 0 8px; }

  /* ── PORTFOLIO HEADER ── */
  .aw-portfolio-head { text-align: center; padding: 10px 40px 40px; }
  .aw-portfolio-head h2 {
    font-size: clamp(1.2rem, 3vw, 1.7rem); font-weight: 700;
    color: #1a1a2e; line-height: 1.45; max-width: 820px; margin: 0 auto 18px;
  }
  .aw-portfolio-head h2 span { color: #3677A2; }
  .aw-portfolio-head hr { border: none; border-top: 1.5px solid #e0e0e0; max-width: 900px; margin: 0 auto; }

  /* ── AWARDS GRID ── */
  .aw-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 40px 80px 60px;
    max-width: 1300px; margin: 0 auto;
  }
  .aw-card {
    background: #fff; border: 1.5px solid #e8e8e8;
    border-radius: 14px; padding: 36px 24px 28px;
    display: flex; flex-direction: column; align-items: center;
    text-align: center; gap: 18px;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    cursor: default;
  }
  .aw-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 36px rgba(0,0,0,0.10);
    border-color: #3677A2;
  }
  .aw-badge {
    width: 140px; height: 140px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 3.2rem; position: relative;
    background: #f0f4ff;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }
  .aw-badge-ring {
    position: absolute; inset: -6px; border-radius: 50%;
    border: 2.5px dashed rgba(59,91,219,0.25);
  }
  .aw-card-title {
    font-weight: 700; color: #1a1a2e; font-size: 0.97rem;
    line-height: 1.5;
  }

  /* ── CONTACT SECTION ── */
  .aw-contact {
    background: #f0f2f5; padding: 70px 80px;
    display: flex; align-items: center; gap: 60px;
  }
  .aw-contact-illustration {
    flex: 1; min-width: 0; display: flex;
    align-items: center; justify-content: center; position: relative;
  }
  .aw-person-wrap {
    width: 280px; height: 320px; position: relative;
  }
  .aw-person-bg {
    position: absolute; inset: 0; border-radius: 50%;
    background: radial-gradient(circle, rgba(200,210,255,0.4) 0%, transparent 70%);
  }
  .aw-person-emoji {
    font-size: 10rem; line-height: 1;
    filter: drop-shadow(0 16px 32px rgba(0,0,0,0.15));
    position: relative; z-index: 1;
  }
  .aw-curve1, .aw-curve2 {
    position: absolute; border: 2px solid #aab;
    border-top: none; border-left: none;
    border-radius: 0 0 50px 0;
    pointer-events: none;
  }
  .aw-curve1 { width: 60px; height: 80px; top: 10px; right: 40px; }
  .aw-curve2 { width: 80px; height: 50px; bottom: 20px; left: 20px;
    transform: rotate(180deg); }
  .aw-dot { position: absolute; top: 8px; right: 38px;
    width: 8px; height: 8px; border-radius: 50%; background: #3b82f6; }

  .aw-contact-form { flex: 1; min-width: 0; }
  .aw-contact-form h2 {
    font-size: clamp(1.2rem, 2.5vw, 1.6rem); font-weight: 700;
    color: #1a1a2e; margin-bottom: 28px; line-height: 1.4;
  }
  .aw-form-group { margin-bottom: 16px; }
  .aw-form-label { display: block; font-size: 0.88rem; color: #555; margin-bottom: 6px; }
  .aw-form-input {
    width: 100%; padding: 13px 16px; border: 1.5px solid #d0d5dd;
    border-radius: 8px; font-size: 0.95rem; outline: none;
    transition: border-color 0.2s; background: #fff; color: #333;
  }
  .aw-form-input:focus { border-color: #3b82f6; }
  .aw-phone-wrap { display: flex; gap: 0; }
  .aw-phone-prefix {
    padding: 13px 14px; border: 1.5px solid #d0d5dd; border-right: none;
    border-radius: 8px 0 0 8px; background: #fff;
    font-size: 0.95rem; white-space: nowrap; color: #333;
  }
  .aw-phone-input {
    flex: 1; padding: 13px 16px; border: 1.5px solid #d0d5dd;
    border-left: none; border-radius: 0 8px 8px 0;
    font-size: 0.95rem; outline: none; background: #fff; color: #333;
  }
  .aw-phone-input:focus { border-color: #3b82f6; }
  .aw-textarea {
    width: 100%; padding: 13px 16px; border: 1.5px solid #d0d5dd;
    border-radius: 8px; font-size: 0.95rem; outline: none;
    resize: vertical; min-height: 110px; font-family: inherit;
    background: #fff; color: #333; transition: border-color 0.2s;
  }
  .aw-textarea:focus { border-color: #3b82f6; }
  .aw-submit {
    width: 100%; padding: 14px;
    background: #2563eb; color: #fff;
    border: none; border-radius: 8px;
    font-weight: 700; font-size: 1.05rem;
    cursor: pointer; letter-spacing: 0.5px;
    transition: background 0.2s;
  }
  .aw-submit:hover { background: #1d4ed8; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .aw-hero-content { padding: 50px 40px; }
    .aw-breadcrumb   { padding: 16px 40px; }
    .aw-grid         { padding: 30px 40px 50px; gap: 18px; }
    .aw-contact      { padding: 50px 40px; gap: 40px; }
  }
  @media (max-width: 768px) {
    .aw-hero-arcs    { width: 300px; height: 300px; right: -40px; }
    .aw-hero-content { padding: 40px 24px; }
    .aw-breadcrumb   { padding: 14px 24px; }
    .aw-portfolio-head { padding: 10px 24px 30px; }
    .aw-grid { grid-template-columns: repeat(2, 1fr); padding: 20px 24px 40px; }
    .aw-contact { flex-direction: column; padding: 40px 24px; gap: 30px; }
    .aw-contact-illustration { width: 100%; }
    .aw-person-emoji { font-size: 7rem; }
  }
  @media (max-width: 480px) {
    .aw-grid { grid-template-columns: 1fr 1fr; gap: 14px; padding: 16px 14px 30px; }
    .aw-badge { width: 100px; height: 100px; font-size: 2.4rem; }
    .aw-card { padding: 24px 14px 20px; gap: 12px; }
    .aw-card-title { font-size: 0.85rem; }
    .aw-contact { padding: 30px 14px; }
  }
`;


function HeroArcs() {
  const arcs = [
    { r: 200, stroke: "rgba(180,130,40,0.55)", sw: 28 },
    { r: 240, stroke: "rgba(160,110,30,0.40)", sw: 22 },
    { r: 280, stroke: "rgba(140, 90,20,0.28)", sw: 16 },
    { r: 320, stroke: "rgba(120, 70,10,0.18)", sw: 12 },
    { r: 360, stroke: "rgba(100, 50, 5,0.12)", sw:  8 },
  ];
  return (
    <svg className="aw-hero-arcs" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      {arcs.map((a, i) => (
        <path
          key={i}
          d={`M ${260 - a.r} 260 A ${a.r} ${a.r} 0 0 1 260 ${260 - a.r}`}
          stroke={a.stroke} strokeWidth={a.sw} strokeLinecap="round" fill="none"
        />
      ))}
    </svg>
  );
}

export default function Awards() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className="aw-hero">
        <div className="aw-hero-stars" />
        <div className="aw-hero-glow" />
        <HeroArcs />
        <div className="aw-hero-content">
          <h1>Awards &amp; Recognitions</h1>
          <p>
            We, at Qmax, constantly work to serve our clients with cutting-edge digital solutions.
            Our teams aspire to empower businesses with revolutionary products to transform our client's
            vision into industry-leading digital experiences. Over 500+ global clients have shown their
            trust in us, encouraging us to thrive with even more success in forthcoming years. We bagged
            the award as the best software development company for our services by the reputed corporate
            awards and certifications.
          </p>
          <a href="#contact" className="aw-hero-btn">Contact Us</a>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="aw-breadcrumb">
        <a href="#">Home</a>
        <span>|</span>
        <a href="#">Portfolio</a>
      </div>

      {/* ── PORTFOLIO HEADING ── */}
      <div className="aw-portfolio-head">
        <h2>
          Our Commitment to Excellence, Innovation, and Delivering Top-Notch Solutions to Clients{" "}
          <span>Quality and Innovation.</span>
        </h2>
        <hr />
      </div>

      {/* ── AWARDS GRID ── */}
      <div className="aw-grid">
        {awards.map((a) => (
          <div className="aw-card" key={a.id}>
            <div className="aw-badge" style={{ background: `${a.color}18` }}>
              <div className="aw-badge-ring" style={{ borderColor: `${a.color}40` }} />
              <span style={{ fontSize: "3.2rem" }}>{a.emoji}</span>
            </div>
            <div className="aw-card-title">{a.title}</div>
          </div>
        ))}
      </div>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="aw-contact">
        <div className="aw-contact-illustration">
          <div className="aw-person-wrap">
            <div className="aw-person-bg" />
            <div className="aw-dot" />
            <div style={{ fontSize:"9rem", lineHeight:1, position:"relative", zIndex:1 }}>🧑‍💻</div>
            <div className="aw-curve1" />
            <div className="aw-curve2" />
          </div>
        </div>

        <div className="aw-contact-form">
          <h2>One Step Forward to Getting Started!</h2>

          <div className="aw-form-group">
            <label className="aw-form-label">Full Name</label>
            <input className="aw-form-input" placeholder="Your Full Name"
              value={form.name} onChange={set("name")} />
          </div>

          <div className="aw-form-group">
            <label className="aw-form-label">Email Id</label>
            <input className="aw-form-input" type="email" placeholder="Your Email"
              value={form.email} onChange={set("email")} />
          </div>

          <div className="aw-form-group">
            <label className="aw-form-label">Contact Number</label>
            <div className="aw-phone-wrap">
              <div className="aw-phone-prefix">🇮🇳 +91</div>
              <input className="aw-phone-input" type="tel" placeholder="Your Contact Number"
                value={form.phone} onChange={set("phone")} />
            </div>
          </div>

          <div className="aw-form-group">
            <label className="aw-form-label">Message</label>
            <textarea className="aw-textarea" placeholder="Message"
              value={form.message} onChange={set("message")} />
          </div>

          <button className="aw-submit">Submit</button>
        </div>
      </section>
    </>
  );
}