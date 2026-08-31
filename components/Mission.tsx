import StatCounter from "./StatCounter";

export default function Mission() {
  return (
    <section id="mission" className="section section--mission" aria-labelledby="mission-title">
      <div className="wrap mission-grid">
        <div className="mission-head">
          <p className="eyebrow eyebrow--pink">Our mission</p>
          <h2 id="mission-title">Intelligence that respects the human in the loop.</h2>
        </div>
        <div className="mission-body">
          <p>
            Epoch AI builds systems that are intelligent, ethical, transparent, and impactful. From
            machine-learning models and language systems to computer vision and generative tools, we
            deliver real-world solutions powered by deep research and empathy.
          </p>
          <div className="stat-row">
            <StatCounter to={4} label="Core disciplines" />
            <StatCounter to={100} suffix="%" label="Human-in-the-loop" />
            <StatCounter to={2024} label="Founded" animate={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
