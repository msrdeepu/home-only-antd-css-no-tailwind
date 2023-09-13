import "./nav.css";
import { Link } from "react-router-dom";

//antd-icons
import { HomeOutlined, CaretDownOutlined } from "@ant-design/icons";

const Navigation = () => {
  return (
    <nav className="nav-bar-container">
      {/* <div>logo</div> */}
      <div>
        <ul className="nav-items-container">
          <li>
            <Link className="link-item" to="/">
              <HomeOutlined /> DGBITS
              <CaretDownOutlined style={{ marginLeft: "3px" }} />
            </Link>
            <div className="sub-menu sub-menu-one">
              <ul>
                <li>
                  <Link className="drop-down-link" to="">
                    About US
                  </Link>
                </li>
                <li>
                  <Link className="drop-down-link" to="">
                    Why DGBITS?
                  </Link>
                </li>
                <li>
                  <Link className="drop-down-link" to="">
                    Our Methodology
                  </Link>
                </li>
                <li>
                  <Link className="drop-down-link" to="">
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link className="link-item" to="/">
              PRODUCTS
              <CaretDownOutlined style={{ marginLeft: "3px" }} />
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/">
              DEVELOPMENT SERVICES
              <CaretDownOutlined style={{ marginLeft: "3px" }} />
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/">
              DESIGN SERVICES
              <CaretDownOutlined style={{ marginLeft: "3px" }} />
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/">
              HOSTING
              <CaretDownOutlined style={{ marginLeft: "3px" }} />
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/">
              CAREERS
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/">
              OUR LATEST PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
