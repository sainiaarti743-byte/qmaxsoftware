import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Inauguration of New Premises",
    date: "July 2022",
    description:
      "In July 2022, the inauguration ceremony of Qmax Software's new office was a memorable business event. Founder Mr. Arvind Saini and co-founder Mr. Mahesh Sharma called the attention of team members and guests and said inspiring words about the new office opening. The gracious presence of friends, relatives, and other chief personalities congratulated the whole team with the blessings of an excellent future journey in the new office.",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "Annual Team Celebration 2023",
    date: "December 2023",
    description:
      "Qmax Software celebrated its annual team gathering with great enthusiasm. The event was filled with fun activities, team performances, and recognition ceremonies where top performers were awarded. The entire team came together to celebrate achievements and set new goals for the upcoming year.",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "Tech Conference & Media Interaction",
    date: "March 2024",
    description:
      "Qmax participated in a prominent tech conference where our founders and senior team members shared insights on digital transformation and software innovation. Media representatives from leading publications covered the event, highlighting Qmax's journey and future roadmap.",
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    ],
  },
];

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', sans-serif; background: #fff; }

  /* ── HERO ── */
  .pe-hero {
    position: relative; min-height: 360px;
    display: flex; align-items: center; overflow: hidden;
  }
  .pe-hero-bg {
    position: absolute; inset: 0;
    background-image: url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80');
    background-size: cover; background-position: center top;
    filter: brightness(0.32); z-index: 0;
  }
  .pe-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(90deg, rgba(0,0,0,0.80) 38%, transparent 100%);
    z-index: 1;
  }
  .pe-hero-content {
    position: relative; z-index: 2;
    padding: 60px 80px; max-width: 560px;
  }
  .pe-hero h1 {
    color: #fff; font-size: clamp(1.8rem,4vw,2.8rem);
    font-weight: 800; margin-bottom: 28px; line-height: 1.2;
  }
  .pe-hero-btn {
    display: inline-block; border: 1.5px solid #fff; color: #fff;
    padding: 11px 28px; font-weight: 600; text-decoration: none;
    letter-spacing: 1.5px; font-size: 0.88rem;
    transition: background 0.3s, border-color 0.3s;
  }
  .pe-hero-btn:hover { background: #e85d04; border-color: #e85d04; }

  /* ── BREADCRUMB ── */
  .pe-breadcrumb {
    padding: 16px 80px; font-size: 0.9rem; color: #888;
  }
  .pe-breadcrumb a { color: #555; text-decoration: none; }
  .pe-breadcrumb a:hover { color: #e85d04; }
  .pe-breadcrumb .active { color: #e85d04; }
  .pe-breadcrumb span { margin: 0 8px; color: #bbb; }

  /* ── EVENTS SECTION ── */
  .pe-events { padding: 20px 80px 80px; }

  /* Event Block */
  .pe-event-block { margin-bottom: 70px; }

  /* Photo Grid */
  .pe-photo-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 20px; margin-bottom: 0;
  }
  .pe-photo-wrap {
    border-radius: 16px; overflow: hidden;
    height: 320px; position: relative;
  }
  .pe-photo-wrap img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.4s;
  }
  .pe-photo-wrap:hover img { transform: scale(1.04); }

  /* Event Info Card */
  .pe-event-card-wrap {
    position: relative; margin-top: -1px;
    display: flex; justify-content: center;
  }
  .pe-event-card {
    background: #fff8f2; border-radius: 0 0 20px 20px;
    border: 1.5px solid #f0d9c8; border-top: none;
    padding: 36px 48px 36px 80px;
    max-width: 900px; width: 100%; position: relative;
    margin: 0 auto;
  }
  .pe-event-dot {
    position: absolute; top: -22px; left: 50%;
    transform: translateX(-50%);
    width: 44px; height: 44px; border-radius: 50%;
    background: #e85d04;
    border: 4px solid #fff;
    box-shadow: 0 0 0 3px #e0c4ae;
    z-index: 2;
  }
  .pe-event-title-bar {
    background: linear-gradient(135deg,#c87000,#e8a020);
    border-radius: 10px; padding: 14px 28px;
    margin-bottom: 20px; text-align: center;
  }
  .pe-event-title-bar h3 {
    color: #fff; font-size: clamp(1rem,2.5vw,1.25rem);
    font-weight: 800; letter-spacing: 0.3px;
  }
  .pe-event-desc {
    color: #4a3020; line-height: 1.85;
    font-size: clamp(0.88rem,1.6vw,0.97rem);
    text-align: justify;
  }
  .pe-event-date {
    display: inline-block; margin-top: 14px;
    background: #e85d04; color: #fff;
    padding: 4px 14px; border-radius: 20px;
    font-size: 0.82rem; font-weight: 600;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .pe-hero-content { padding: 50px 40px; }
    .pe-breadcrumb   { padding: 14px 40px; }
    .pe-events       { padding: 20px 40px 60px; }
    .pe-event-card   { padding: 32px 36px 32px 60px; }
  }
  @media (max-width: 768px) {
    .pe-hero-content { padding: 40px 24px; }
    .pe-breadcrumb   { padding: 12px 24px; }
    .pe-events       { padding: 16px 18px 50px; }
    .pe-photo-grid   { grid-template-columns: 1fr; gap: 14px; }
    .pe-photo-wrap   { height: 220px; }
    .pe-event-card   { padding: 28px 22px 24px 22px; }
    .pe-event-block  { margin-bottom: 50px; }
  }
  @media (max-width: 480px) {
    .pe-photo-wrap   { height: 180px; }
    .pe-event-card   { padding: 24px 16px 20px; }
    .pe-event-title-bar { padding: 12px 16px; }
  }
`;

export default function PressEvents() {
  return (
    <>
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className="pe-hero">
        <div className="pe-hero-bg" />
        <div className="pe-hero-overlay" />
        <div className="pe-hero-content mt-4">
          <h1>Press &amp; Events</h1>
          <a href="#events" className="pe-hero-btn">GET FREE DEMO →</a>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="pe-breadcrumb">
        <a href="#">Home</a>
        <span>|</span>
        <span className="active">Press &amp; Events</span>
      </div>

      {/* ── EVENTS ── */}
      <section className="pe-events" id="events">
        {events.map((ev) => (
          <div className="pe-event-block" key={ev.id}>

            {/* Two photos side by side */}
            <div className="pe-photo-grid">
              {ev.images.map((src, i) => (
                <div className="pe-photo-wrap" key={i}>
                  <img src={src} alt={`${ev.title} ${i + 1}`} />
                </div>
              ))}
            </div>

            {/* Info card below with orange dot */}
            <div className="pe-event-card-wrap">
              <div className="pe-event-card">
                <div className="pe-event-dot" />
                <div className="pe-event-title-bar">
                  <h3>{ev.title}</h3>
                </div>
                <p className="pe-event-desc">{ev.description}</p>
                <span className="pe-event-date">{ev.date}</span>
              </div>
            </div>

          </div>
        ))}
      </section>
    </>
  );
}