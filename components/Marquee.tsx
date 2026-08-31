import { Fragment } from "react";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  // Duplicated set so the CSS -50% loop is seamless.
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            <span className="sep">✳</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
