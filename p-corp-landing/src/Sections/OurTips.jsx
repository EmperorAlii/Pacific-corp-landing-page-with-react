// OurTips.jsx
// Displays a section header introducing the tips and insights shared by the company team.

import React from "react";
import SectionHeader from "../components/SectionHeader"; // Reusable header component

const OurTips = () => {
  return (
    <>
      {/* Section header with label, title, and description */}
      <SectionHeader
        label="OUR TIPS FOR YOU"
        title="Reinventing Your Protection"
        description="We share common trends, strategies ideas, opinion, short & log stories from the team behind company"
      />
    </>
  );
};

export default OurTips;
