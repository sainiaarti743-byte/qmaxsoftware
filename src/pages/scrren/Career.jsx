import { useState } from "react";

const vacancies = [
  {
    id: 1,
    title: "Post Sales Executive",
    experience: "0-2 Years",
    location: "Jaipur",
  },
  {
    id: 2,
    title: "Business Development Executive",
    experience: "1-3 Years",
    location: "Jaipur",
  },
  {
    id: 3,
    title: "React.js Developer",
    experience: "1-4 Years",
    location: "Jaipur",
  },
  {
    id: 4,
    title: "Android Developer",
    experience: "0-3 Years",
    location: "Jaipur",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    experience: "1-2 Years",
    location: "Jaipur",
  },
];

const jobCategories = [
  "Sales Executive",
  "Business Development",
  "React.js Developer",
  "Android Developer",
  "UI/UX Designer",
  "Digital Marketing",
  "Node.js Developer",
];

const benefits = [
  { icon: "⏰", label: "Market-Best Package" },
  { icon: "📈", label: "Career Growth" },
  { icon: "🎯", label: "Best Place to Work" },
  { icon: "🏆", label: "Attractive Perks & Rewards" },
  { icon: "🖥️", label: "Vibrant Work Culture" },
  { icon: "🤝", label: "Training Sessions & Team Building" },
  { icon: "⚖️", label: "Work Life Balance" },
  { icon: "🗓️", label: "Leave Encashment" },
  { icon: "🎮", label: "Fun Activities" },
];

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #fff; }

  /* ── HERO ── */
  .cr-hero {
    position: relative; min-height: 380px;
    display: flex; align-items: center; overflow: hidden;
  }
  .cr-hero-bg {
    position: absolute; inset: 0;
    background-image: url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80');
    background-size: cover; background-position: center;
    filter: brightness(0.38); z-index: 0;
  }
  .cr-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(90deg, rgba(0,0,0,0.75) 35%, transparent 100%);
    z-index: 1;
  }
  .cr-hero-content {
    position: relative; z-index: 2;
    padding: 60px 80px; max-width: 620px;
  }
  .cr-hero h1 {
    color: #fff; font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 800; margin-bottom: 14px;
  }
  .cr-hero p {
    color: rgba(255,255,255,0.82); font-size: clamp(0.9rem,2vw,1.05rem);
    line-height: 1.7; margin-bottom: 30px;
  }
  .cr-hero-btn {
    display: inline-block; border: 1.5px solid #fff; color: #fff;
    padding: 11px 28px; font-weight: 600; text-decoration: none;
    letter-spacing: 1.5px; font-size: 0.88rem;
    transition: background 0.3s, border-color 0.3s;
  }
  .cr-hero-btn:hover { background: #3677A2; border-color: #3677A2; color: #fff; }

  /* ── BREADCRUMB ── */
  .cr-breadcrumb {
    padding: 16px 80px; font-size: 0.9rem; color: #888;
    border-bottom: 1.5px solid #3677A2;
  }
  .cr-breadcrumb a { color: #555; text-decoration: none; }
  .cr-breadcrumb a:hover { color: #3677A2; }
  .cr-breadcrumb .active { color: #3677A2; }
  .cr-breadcrumb span { margin: 0 8px; color: #bbb; }

  /* ── VACANCIES SECTION ── */
  .cr-vacancies { padding: 50px 80px 60px; }
  .cr-vac-title {
    text-align: center; color: #3677A2; font-weight: 800;
    font-size: clamp(1.4rem, 3vw, 1.9rem); margin-bottom: 40px; letter-spacing: 1px;
  }
  .cr-vac-layout { display: flex; gap: 40px; align-items: flex-start; }

  /* Apply Form */
  .cr-apply-wrap { width: 340px; flex-shrink: 0; }
  .cr-apply-wrap h3 { font-size: 1.3rem; font-weight: 600; color: #1a1a2e; margin-bottom: 16px; }
  .cr-apply-form {
    border: 1.5px solid #3677A2; border-radius: 12px;
    padding: 24px 20px; display: flex; flex-direction: column; gap: 12px;
  }
  .cr-input {
    width: 100%; padding: 12px 14px; border: 1px solid #ddd;
    border-radius: 8px; font-size: 0.92rem; outline: none;
    font-family: inherit; color: #333; background: #fff;
    transition: border-color 0.2s;
  }
  .cr-input:focus { border-color: #3677A2; }
  .cr-select {
    width: 100%; padding: 12px 14px; border: 1px solid #ddd;
    border-radius: 8px; font-size: 0.92rem; outline: none;
    font-family: inherit; color: #666; background: #fff; cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23999' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 14px center;
    transition: border-color 0.2s;
  }
  .cr-select:focus { border-color: #3677A2; }
  .cr-exp-row { display: flex; gap: 10px; }
  .cr-exp-row .cr-input { flex: 1; }
  .cr-textarea {
    width: 100%; padding: 12px 14px; border: 1px solid #ddd;
    border-radius: 8px; font-size: 0.92rem; outline: none;
    font-family: inherit; color: #333; resize: vertical; min-height: 100px;
    transition: border-color 0.2s;
  }
  .cr-textarea:focus { border-color: #3677A2; }
  .cr-file-label {
    display: flex; align-items: center; gap: 10px;
    border: 1px solid #ddd; border-radius: 8px; padding: 11px 14px;
    cursor: pointer; color: #888; font-size: 0.9rem;
    transition: border-color 0.2s;
  }
  .cr-file-label:hover { border-color: #3677A2; color: #3677A2; }
  .cr-apply-btn {
    background: linear-gradient(135deg,#3677A2,#f48c06);
    color: #fff; border: none; border-radius: 8px;
    padding: 13px; font-weight: 700; font-size: 1rem;
    cursor: pointer; transition: opacity 0.2s; letter-spacing: 0.5px;
  }
  .cr-apply-btn:hover { opacity: 0.88; }

  /* Accordion */
  .cr-accordion { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 0; }
  .cr-acc-item { border-bottom: 1px solid #eee; }
  .cr-acc-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 20px 0; cursor: pointer;
    font-size: clamp(1rem, 2vw, 1.15rem); font-weight: 600; color: #1a1a2e;
    user-select: none; transition: color 0.2s;
  }
  .cr-acc-header:hover { color: #3677A2; }
  .cr-acc-icon {
    font-size: 1.1rem; color: #3677A2; transition: transform 0.3s;
    flex-shrink: 0; margin-left: 12px;
  }
  .cr-acc-icon.open { transform: rotate(180deg); }
  .cr-acc-body {
    background: linear-gradient(135deg,#3677A2,#f48c06);
    border-radius: 12px; padding: 24px 28px;
    margin-bottom: 16px; color: #fff;
    animation: slideDown 0.25s ease;
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .cr-acc-body p { margin-bottom: 8px; font-size: 1rem; line-height: 1.6; }
  .cr-acc-body p:last-child { margin-bottom: 0; }

  /* ── BENEFITS SECTION ── */
  .cr-benefits { padding: 60px 80px 70px; background: #fff; }
  .cr-benefits-title {
    text-align: center; font-size: clamp(1.3rem,3vw,1.8rem);
    font-weight: 800; color: #3677A2; margin-bottom: 40px;
  }
  .cr-benefits-grid {
    display: grid; grid-template-columns: repeat(3,1fr); gap: 18px;
    max-width: 1100px; margin: 0 auto;
  }
  .cr-benefit-card {
    border: 1.5px solid #e0e0e0; border-radius: 14px;
    padding: 20px 22px; display: flex; align-items: center; gap: 16px;
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
    cursor: default;
  }
  .cr-benefit-card:hover {
    border-color: #3677A2; transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(232,93,4,0.12);
  }
  .cr-benefit-icon {
    width: 52px; height: 52px; border-radius: 12px;
    border: 1.5px solid #3677A2; display: flex; align-items: center;
    justify-content: center; font-size: 1.5rem; flex-shrink: 0;
    background: #fff8f4;
  }
  .cr-benefit-label { font-weight: 600; color: #1a1a2e; font-size: 0.97rem; line-height: 1.4; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .cr-hero-content  { padding: 50px 40px; }
    .cr-breadcrumb    { padding: 14px 40px; }
    .cr-vacancies     { padding: 40px 40px 50px; }
    .cr-benefits      { padding: 50px 40px 60px; }
    .cr-apply-wrap    { width: 300px; }
  }
  @media (max-width: 900px) {
    .cr-vac-layout { flex-direction: column; }
    .cr-apply-wrap { width: 100%; }
  }
  @media (max-width: 768px) {
    .cr-hero-content  { padding: 40px 24px; }
    .cr-breadcrumb    { padding: 12px 24px; }
    .cr-vacancies     { padding: 30px 20px 40px; }
    .cr-benefits      { padding: 40px 20px 50px; }
    .cr-benefits-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
  }
  @media (max-width: 480px) {
    .cr-benefits-grid { grid-template-columns: 1fr; }
    .cr-exp-row { flex-direction: column; gap: 12px; }
    .cr-hero h1 { font-size: 1.5rem; }
  }
`;

export default function Career() {
  const [openId, setOpenId] = useState(1);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", category: "",
    expYear: "", expMonth: "", description: "",
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <>
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className="cr-hero">
        <div className="cr-hero-bg" />
        <div className="cr-hero-overlay" />
        <div className="cr-hero-content mt-4">
          <h1>Join Our Team</h1>
          <p>An opportunity to craft a future through career-defining work</p>
          <a href="#vacancies" className="cr-hero-btn">VIEW ALL JOBS →</a>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="cr-breadcrumb">
        <a href="#">Home</a>
        <span>|</span>
        <span className="active">Career</span>
      </div>

      {/* ── CURRENT VACANCIES ── */}
      <section className="cr-vacancies" id="vacancies">
        <h2 className="cr-vac-title">CURRENT VACANCIES</h2>
        <div className="cr-vac-layout">

          {/* Apply Form */}
          <div className="cr-apply-wrap">
            <h3>Apply Now</h3>
            <div className="cr-apply-form">
              <input className="cr-input" placeholder="Enter Full Name"
                value={form.name} onChange={set("name")} />
              <input className="cr-input" type="email" placeholder="Enter Email"
                value={form.email} onChange={set("email")} />
              <input className="cr-input" type="tel" placeholder="Enter Phone Number"
                value={form.phone} onChange={set("phone")} />
              <select className="cr-select" value={form.category} onChange={set("category")}>
                <option value="">Select Job Category</option>
                {jobCategories.map(j => <option key={j} value={j}>{j}</option>)}
              </select>
              <div>
                <div style={{ fontSize:"0.88rem", color:"#555", marginBottom:6 }}>Experience</div>
                <div className="cr-exp-row">
                  <input className="cr-input" placeholder="Year"
                    value={form.expYear} onChange={set("expYear")} />
                  <input className="cr-input" placeholder="Month"
                    value={form.expMonth} onChange={set("expMonth")} />
                </div>
              </div>
              <textarea className="cr-textarea" placeholder="Enter Description"
                value={form.description} onChange={set("description")} />
              <label className="cr-file-label">
                <span>📎</span>
                <span>Upload Resume (PDF/DOC)</span>
                <input type="file" style={{ display:"none" }} accept=".pdf,.doc,.docx" />
              </label>
              <button className="cr-apply-btn">APPLY NOW</button>
            </div>
          </div>

          {/* Accordion Vacancies */}
          <div className="cr-accordion">
            {vacancies.map(v => (
              <div className="cr-acc-item" key={v.id}>
                <div className="cr-acc-header" onClick={() => toggle(v.id)}>
                  <span>{v.title}</span>
                  <span className={`cr-acc-icon${openId === v.id ? " open" : ""}`}>
                    {openId === v.id ? "∧" : "∨"}
                  </span>
                </div>
                {openId === v.id && (
                  <div className="cr-acc-body">
                    <p>Experience : {v.experience}</p>
                    <p>Location : {v.location}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="cr-benefits">
        <h2 className="cr-benefits-title">Benefits Of Working Qmax</h2>
        <div className="cr-benefits-grid">
          {benefits.map((b, i) => (
            <div className="cr-benefit-card" key={i}>
              <div className="cr-benefit-icon">{b.icon}</div>
              <span className="cr-benefit-label">{b.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}