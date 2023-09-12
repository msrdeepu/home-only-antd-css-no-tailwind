import "./more.css";
import { Button } from "antd";
//typed import
import TypedEffect from "./TypedEffect";
const MoreSection = () => {
  return (
    <div className="more-section">
      <div className="container-one">
        <div className="more-title-container">
          <h1>More About DGBITS</h1>
        </div>
      </div>
      <div className="container-two">
        <div className="typed-container">
          <TypedEffect />
          <p className="description">
            WEBSITES & MOBILE APPLICATIONS FOR YOUR BUSINESS, ORGANISATIONS AND
            INDIVIDUALS.
          </p>
          <Button type="primary" size="large">
            MORE ABOUT DGBITS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MoreSection;
