import React from "react";
import CostomerLogo from "./Costomer-logo/Costomer-logo";
import CostomerReview from "./Costomer-review/Costomer-review";
import CustomerData from "./CostomerData/CostomerData";

export default function Costomer() {
  return (
    <div>
      <CostomerLogo logos={CustomerData} />
      <CostomerReview reviews={CustomerData} />
    </div>
  );
}
