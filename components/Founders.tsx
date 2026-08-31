import { founders } from "@/lib/data";

export default function Founders() {
  return (
    <section id="founders" className="section section--founders" aria-labelledby="founders-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow eyebrow--pink">The team</p>
          <h2 id="founders-title">Meet the founders.</h2>
        </div>
        <div className="founder-grid">
          {founders.map((f) => (
            <article className="founder" key={f.name}>
              <span
                className={`founder-avatar${f.variant === "alt" ? " founder-avatar--alt" : ""}`}
                data-initials={f.initials}
                aria-hidden="true"
              />
              <div className="founder-meta">
                <h3>{f.name}</h3>
                <p className="founder-role">{f.role}</p>
                <p className="founder-bio">{f.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
