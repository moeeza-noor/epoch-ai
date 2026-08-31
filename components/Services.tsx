import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="section section--services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow eyebrow--pink">What we do</p>
          <h2 id="services-title">Four disciplines, one standard.</h2>
        </div>
        <div className="service-grid">
          {services.map((s) => (
            <article className="service" key={s.title}>
              <span className="service-glyph" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
