import "./Navbar.scss";
import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineTag,
  AiOutlineUpload,
} from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper desktop">
        <div className="navbar">
          <div className="items-wrapper">
            <div className="icon active">
              <AiOutlineHome />
            </div>
            <div className="icon">
              <AiOutlineUpload />
            </div>
            <div className="icon">
              <AiOutlineTag />
            </div>
            <div className="icon">
              <AiOutlineBell />
            </div>
            <div className="icon">
              <AiOutlineQuestionCircle />
            </div>
            <div className="icon">
              <FiSettings />
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-mobile">
        <div className="icon">
          <HiMenuAlt2 />
        </div>
      </div>
    </>
  );
};

export default Navbar;
