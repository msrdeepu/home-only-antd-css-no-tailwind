import Header from "./Header";
import Logo from "./Logo";
//carosel
import Carosel from "./Carosel";
//slick-slider
import Slickslider from "./SlickSlider/Slickslider";
//more-about-section
import MoreSection from "./MoreSection";
//Branding-section
import Branding from "./Branding";

//antd
import { Divider } from "antd";
const Home = () => {
  return (
    <div>
      <Header />
      <Logo />
      <h4>Navigation</h4>
      <Divider />
      <Carosel />
      <Slickslider />
      <MoreSection />
      <Branding />
    </div>
  );
};

export default Home;
