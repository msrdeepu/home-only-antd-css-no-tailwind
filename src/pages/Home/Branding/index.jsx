import { Col, Row } from "antd";
import "./branding.css";

//lottie-animations
import Lottie from "lottie-react";
//import slideOneAnimation from "../../../../public/assets/lottie/slide-three.json";
import slideTwoAnimation from "../../../../public/assets/lottie/slide-four.json";
import slideThreeAnimation from "../../../../public/assets/lottie/slide-five.json";
//import slideFourAnimation from "../../../../public/assets/lottie/slide-six.json";

const Branding = () => {
  return (
    <Row gutter={[8, 4]} className="brand-section-container">
      <Col xs={24} md={12}>
        <div className="item-container">
          <div className="brand-item brand-item-text">
            <div className="top-content">
              <h1>We Bring Life To Your Brand</h1>
              <h3>Graphic Design - Branding - Logo Design</h3>
            </div>
            <div className="middle-content">
              <p>
                Design is at the peak of everything we do at DGBITS. We're
                creative, thoughtful and strategic. As you begin to share your
                concept, we start to imagine the pieces come together as a
                picture. It's how we think. We bring your concept to real life.
                Whether it's a ADcampaign or a logo for a start-up website,
                DGBITS knows how to tell your story with compelling and engaging
                digital experinces with the matching creative content.
              </p>
              <p>
                DGBITS Services are more than simple graphic designers. We are
                visual communicators for your brand.
              </p>
            </div>
            <div className="bottom-content">
              <p>Know More About Branding & Identity</p>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div className="item-container">
          <div className="brand-item">
            <Lottie
              style={{ height: "400px", width: "400px" }}
              animationData={slideTwoAnimation}
              loop={true}
            />
          </div>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div className="item-container">
          <div className="brand-item">
            <Lottie
              style={{ height: "400px", width: "400px" }}
              animationData={slideThreeAnimation}
              loop={true}
            />
          </div>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div className="item-container">
          <div className="brand-item brand-item-text">
            <div className="top-content">
              <h1>WEB DESIGN & APP DEVELOPMENT</h1>
              <h3>Dynamic Websites - Business Apps - Hybrid Mobile Apps</h3>
            </div>
            <div className="middle-content">
              <p>
                Your website is a great platform to expand the reach of your
                business, establish credibility, engage your customer base, sell
                services, solutions, products and ideas or concepts, and create
                influence for a cause or event. This is a necessary part of your
                brand promotion. But you already know that's why you're here. Be
                it a small product / service portfolio website or dynamic CMS
                based website to a multi-tiered high-end business application,
                we creaft each with the same heart and focus. We listen to your
                desired outcome. we also monitor campaigns with the right mix of
                print, video and digital content-driven engagement.
              </p>
            </div>
            <div className="bottom-content">
              <p>Learn More About Website Design Services</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Branding;
