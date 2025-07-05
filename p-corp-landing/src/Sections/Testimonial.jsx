// Testimonial.jsx
// Displays a section header introducing the testimonial section with label, title, and description.

import React from "react";
import SectionHeader from "../components/SectionHeader"; // Reusable section header component

const Testimonial = () => {
  return (
    <>
      {/* Section header with customized margin-top */}
      <SectionHeader
        label="TESTIMONIAL"
        title="What Our Customer Have To Says"
        description="We share common trends, strategies ideas, Opinion, short & log stories from the team behind company"
        className="mt-32.5"
      />
    </>
  );
};

export default Testimonial;
