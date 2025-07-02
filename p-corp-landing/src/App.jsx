import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import OurServices from "./Sections/OurServices";
import Insurances from "./Sections/Insurances";
import CustomerReview from "./Sections/CustomerReview";
import YourBenefits from "./Sections/YourBenefits";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <OurServices />
      <Insurances />
      <CustomerReview />
      <YourBenefits />
    </>
  );
}

export default App;
