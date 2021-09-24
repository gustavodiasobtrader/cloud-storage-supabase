import "./Navbar.scss";
import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineTag,
  AiOutlineUpload,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
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
    </>
  );
};

export default Navbar;
