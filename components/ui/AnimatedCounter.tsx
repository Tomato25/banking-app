'use client'

import CountUp from "react-countup";

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp decimals={2} duration={2.5} decimal="," prefix="$" end={amount} />
    </div>
  );
}

export default AnimatedCounter;
