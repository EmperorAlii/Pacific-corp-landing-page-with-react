import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import OurServices from "./Sections/OurServices";
import Insurances from "./Sections/Insurances";
import CustomerReview from "./Sections/CustomerReview";
import YourBenefits from "./Sections/YourBenefits";
import Features from "./Sections/Features";

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
    </>
  );
}

export default App;
