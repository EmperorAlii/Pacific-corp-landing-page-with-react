// YourBenefits.jsx
// Displays a section header presenting the benefits of using the insurance advocacy services.

import React from "react";
import SectionHeader from "../components/SectionHeader"; // Reusable section header component

const YourBenefits = () => {
  return (
    <>
      {/* Section header with label, title, and description */}
      <SectionHeader
        label="YOUR BENEFITS"
        title="We’re Your Right Insurance Advocate"
        description="We work with several leading insurance companies to secure insurance coverages tailored to meet your needs."
      />
    </>
  );
};

export default YourBenefits;
