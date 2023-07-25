import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a Super Hero");
  }
  return <div>{heroName}</div>;
}

export default Hero;
