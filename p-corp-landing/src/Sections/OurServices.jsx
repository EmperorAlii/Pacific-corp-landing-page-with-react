// OurServices.jsx
// Displays a section header introducing the services offered by the company.

import React from "react";
import SectionHeader from "../components/SectionHeader"; // Reusable header component

const OurServices = () => {
  return (
    <>
      {/* Section header with label, title, and description */}
      <SectionHeader
        label="OUR SERVICES"
        title="Insurance made simple for you"
        description="We work with several leading insurance companies to secure insurance coverages tailored to meet your needs."
      />
    </>
  );
};

export default OurServices;
