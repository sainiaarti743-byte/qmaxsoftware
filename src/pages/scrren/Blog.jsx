import { useState } from "react";

const blogs = [
  {
    id: 1,
    tag: "software",
    author: "ezulix",
    date: "March 12, 2026",
    views: 391,
    title: "How a CRM Development Company Transforms Business Operations",
    excerpt:
      "Customer Relationship Management (CRM) is the backbone of all business processes. If the customer is happy, nothing can stop a business from flourishing. And keeping customers happy depends upon how well you treat and manage your customers. Efficient customer management requires the right CRM software and CRM system. To build the right CRM tool, you …",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 2,
    tag: "mobile",
    author: "ezulix",
    date: "February 20, 2026",
    views: 215,
    title: "Top Mobile App Development Trends to Watch in 2026",
    excerpt:
      "The mobile landscape continues to evolve rapidly. From AI-powered personalization to cross-platform frameworks, businesses need to stay ahead of the curve. In this article we explore the most impactful trends shaping mobile app development this year and how your business can leverage them …",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    id: 3,
    tag: "web",
    author: "ezulix",
    date: "January 8, 2026",
    views: 178,
    title: "Why React.js is Still the Best Choice for Web Development",
    excerpt:
      "React.js remains one of the most popular frontend frameworks in the world. Its component-based architecture, virtual DOM, and massive ecosystem make it an ideal choice for building scalable and maintainable web applications. Here is why React continues to dominate in 2026 …",
    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
  },
];

const categories = ["All", "software", "mobile", "web", "design", "digital marketing"];
const services   = ["Web Development", "Mobile App", "UI/UX Design", "Digital Marketing", "CRM Solutions"];

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #f4f6f9; }

  .bl-wrap { display: flex; gap: 28px; padding: 40px 48px; max-width: 1300px; margin: 0 auto; align-items: flex-start; }

  /* ── LEFT: Blog list ── */
  .bl-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 28px; }

  .bl-card {
    background: #fff; border-radius: 16px; overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.07);
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .bl-card:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(0,0,0,0.12); }

  .bl-thumb { position: relative; width: 100%; height: 280px; overflow: hidden; }
  .bl-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s; }
  .bl-card:hover .bl-thumb img { transform: scale(1.04); }

  .bl-thumb-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%);
    pointer-events: none;
  }
  .bl-thumb-logo {
    position: absolute; top: 16px; left: 16px;
    background: rgba(255,255,255,0.15); backdrop-filter: blur(4px);
    border: 1px solid rgba(255,255,255,0.3);
    color: #fff; font-weight: 800; font-size: 1.1rem;
    padding: 6px 14px; border-radius: 6px;
  }

  .bl-body { padding: 24px 28px 20px; }
  .bl-title {
    font-size: 1.5rem; font-weight: 700; color: #1a1a2e; margin-bottom: 10px;
    line-height: 1.35;
  }
  .bl-meta { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px; font-size: 0.85rem; }
  .bl-meta-tag { color: #e85d04; font-weight: 600; text-decoration: none; }
  .bl-meta-tag:hover { text-decoration: underline; }
  .bl-meta-sep { color: #aaa; }
  .bl-meta-author, .bl-meta-date { color: #666; }

  .bl-excerpt { color: #555; line-height: 1.75; font-size: 0.97rem; margin-bottom: 18px; }

  .bl-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
  .bl-read-more {
    color: #e85d04; font-weight: 600; text-decoration: none; font-size: 0.95rem;
    transition: gap 0.2s; display: flex; align-items: center; gap: 4px;
  }
  .bl-read-more:hover { gap: 8px; }

  .bl-views { display: flex; align-items: center; gap: 6px; color: #888; font-size: 0.88rem; }

  .bl-share { display: flex; gap: 8px; align-items: center; }
  .bl-share-icon {
    width: 32px; height: 32px; border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem; color: #fff; text-decoration: none;
    transition: opacity 0.2s;
  }
  .bl-share-icon:hover { opacity: 0.82; }
  .bl-share-fb   { background: #1877f2; }
  .bl-share-tw   { background: #1da1f2; }
  .bl-share-mail { background: #888; }

  /* ── RIGHT: Sidebar ── */
  .bl-sidebar { width: 310px; flex-shrink: 0; display: flex; flex-direction: column; gap: 20px; }

  .bl-widget { background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.07); }

  /* Search */
  .bl-search { display: flex; align-items: center; }
  .bl-search input {
    flex: 1; border: none; outline: none; padding: 14px 16px;
    font-size: 0.95rem; background: transparent; color: #333;
  }
  .bl-search input::placeholder { color: #aaa; }
  .bl-search button {
    background: #222; border: none; color: #fff;
    padding: 14px 16px; cursor: pointer; font-size: 1rem;
    transition: background 0.2s;
  }
  .bl-search button:hover { background: #e85d04; }

  /* Category */
  .bl-select {
    width: 100%; border: none; outline: none; padding: 14px 16px;
    font-size: 0.95rem; color: #333; background: #fff;
    appearance: none; cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23666' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 16px center;
  }

  /* Enquiry form widget */
  .bl-enquiry-header {
    position: relative; padding: 18px 20px; text-align: center;
    background: linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),
                url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80');
    background-size: cover; background-position: center;
    color: #fff; font-weight: 700; font-size: 1.1rem;
  }
  .bl-enquiry-body { padding: 18px 16px; display: flex; flex-direction: column; gap: 10px; }
  .bl-eq-input {
    width: 100%; padding: 11px 14px; border: 1px solid #e0e0e0;
    border-radius: 8px; font-size: 0.92rem; outline: none;
    transition: border-color 0.2s;
  }
  .bl-eq-input:focus { border-color: #e85d04; }
  .bl-eq-select {
    width: 100%; padding: 11px 14px; border: 1px solid #e0e0e0;
    border-radius: 8px; font-size: 0.92rem; outline: none; background: #fff;
    appearance: none; cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23666' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 14px center;
  }
  .bl-eq-textarea {
    width: 100%; padding: 11px 14px; border: 1px solid #e0e0e0;
    border-radius: 8px; font-size: 0.92rem; outline: none;
    resize: vertical; min-height: 110px; font-family: inherit;
    transition: border-color 0.2s;
  }
  .bl-eq-textarea:focus { border-color: #e85d04; }
  .bl-submit {
    background: linear-gradient(135deg,#e85d04,#f48c06);
    color: #fff; border: none; border-radius: 50px;
    padding: 12px 0; font-weight: 700; font-size: 1rem;
    width: 100%; cursor: pointer; letter-spacing: 1px;
    transition: opacity 0.2s;
  }
  .bl-submit:hover { opacity: 0.88; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .bl-wrap { padding: 30px 24px; gap: 20px; }
    .bl-sidebar { width: 270px; }
  }

  @media (max-width: 768px) {
    .bl-wrap { flex-direction: column; padding: 20px 14px; }
    .bl-sidebar { width: 100%; }
    .bl-thumb { height: 200px; }
    .bl-title { font-size: 1.2rem; }
    .bl-body { padding: 18px 18px 16px; }
  }

  @media (max-width: 480px) {
    .bl-wrap { padding: 14px 10px; }
    .bl-thumb { height: 170px; }
    .bl-title { font-size: 1.05rem; }
    .bl-excerpt { font-size: 0.9rem; }
  }
`;

export default function EzulixBlog() {
  const [search, setSearch]   = useState("");
  const [category, setCategory] = useState("All");
  const [form, setForm] = useState({ name:"", mobile:"", email:"", budget:"", service:"", message:"" });

  const filtered = blogs.filter(b =>
    (category === "All" || b.tag === category) &&
    (search === "" || b.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <style>{css}</style>
      <div className="bl-wrap mt-5">

        
        <main className="bl-main">
          {filtered.map(blog => (
            <article className="bl-card" key={blog.id}>
              <div className="bl-thumb">
                <img src={blog.img} alt={blog.title} />
                <div className="bl-thumb-overlay" />
                <div className="bl-thumb-logo">Eezülix®</div>
              </div>
              <div className="bl-body">
                <h2 className="bl-title">{blog.title}</h2>
                <div className="bl-meta">
                  <a href="#" className="bl-meta-tag">{blog.tag}</a>
                  <span className="bl-meta-sep">/</span>
                  <span className="bl-meta-sep">By</span>
                  <span className="bl-meta-author">{blog.author}</span>
                  <span className="bl-meta-sep">/</span>
                  <span className="bl-meta-date">{blog.date}</span>
                </div>
                <p className="bl-excerpt">{blog.excerpt}</p>
                <div className="bl-footer">
                  <a href="#" className="bl-read-more">Read More <span>»</span></a>
                  <div className="bl-views">
                    <span>📊</span>
                    <span>{blog.views} total views</span>
                  </div>
                  <div className="bl-share">
                    <a href="#" className="bl-share-icon bl-share-fb" title="Facebook">f</a>
                    <a href="#" className="bl-share-icon bl-share-tw" title="Twitter">𝕏</a>
                    <a href="#" className="bl-share-icon bl-share-mail" title="Email">✉</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign:"center", padding:"60px 0", color:"#aaa", fontSize:"1.1rem" }}>
              No blogs found.
            </div>
          )}
        </main>

        {/* ── SIDEBAR ── */}
        <aside className="bl-sidebar">

          {/* Search */}
          <div className="bl-widget">
            <div className="bl-search">
              <input
                type="text"
                placeholder="Search Blogs"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button>🔍</button>
            </div>
          </div>

        
          <div className="bl-widget">
            <select
              className="bl-select"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {categories.map(c => (
                <option key={c} value={c}>{c === "All" ? "Select Category" : c}</option>
              ))}
            </select>
          </div>

      
          <div className="bl-widget">
            <div className="bl-enquiry-header">Enquiry form</div>
            <div className="bl-enquiry-body">
              <input className="bl-eq-input" placeholder="Enter your full name"
                value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input className="bl-eq-input" placeholder="Enter mobile number" type="tel"
                value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
              <input className="bl-eq-input" placeholder="Email ID" type="email"
                value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              <input className="bl-eq-input" placeholder="Project Budget (Optional)"
                value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} />
              <select className="bl-eq-select"
                value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                <option value="">Service of Interest</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea className="bl-eq-textarea" placeholder="Tell us more about your project..."
                value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
              <button className="bl-submit">SUBMIT</button>
            </div>
          </div>

        </aside>
      </div>
    </>
  );
}