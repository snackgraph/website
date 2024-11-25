"use client";

import Subscription from "./Subscription";
// TYPES
import { subscriptions } from "./subscriptions";

function Pricing() {
  return (
    <div className="h-dvh grid place-content-center px-3 mt-10">
      <div className="grid place-content-center h-dvh animation-op">
        <h1
          id="title"
          className="text-3xl md:text-6xl font-extrabold text-center max-w-screen-md m-auto py-5 text-[var(--color-title)]"
        >
          Prices designed for you
        </h1>
        <p
          id="description"
          className="lg:text-xl text-center max-w-screen-md m-auto text-[var(--color-description)]"
        >
          Start today, no credit card required.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          {subscriptions.map((sub) => {
            return <Subscription key={sub.id} sub={sub} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
