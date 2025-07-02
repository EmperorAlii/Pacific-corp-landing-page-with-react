import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import OurServices from "./Sections/OurServices";
import Insurances from "./Sections/Insurances";
import CustomerReview from "./Sections/CustomerReview";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <OurServices />
      <Insurances />
      <CustomerReview />
    </>
  );
}

export default App;
