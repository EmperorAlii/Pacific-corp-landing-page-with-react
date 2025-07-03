import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import OurServices from "./Sections/OurServices";
import Insurances from "./Sections/Insurances";
import CustomerReview from "./Sections/CustomerReview";
import YourBenefits from "./Sections/YourBenefits";
import Features from "./Sections/Features";
import OurTips from "./Sections/OurTips";
import FamilySection from "./Sections/FamilySection";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <OurServices />
      <Insurances />
      <CustomerReview />
      <YourBenefits />
      <Features />
      <OurTips />
      <FamilySection />
    </>
  );
}

export default App;
