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
import { useState } from "react";

const Navbar = () => {
  const [mobileOptionsShow, setMobileOptionsShow] = useState(false);

  const changeOptionsShow = () => {
    setMobileOptionsShow(!mobileOptionsShow);
  };

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
        <div className="icon" onClick={changeOptionsShow}>
          <HiMenuAlt2 />
        </div>

        <div className={`options ${mobileOptionsShow ? "show" : "hidden"}`}>
          <div className="icon-mobile">
            <AiOutlineHome />
          </div>
          <div className="icon-mobile">
            <AiOutlineUpload />
          </div>
          <div className="icon-mobile">
            <AiOutlineTag />
          </div>
          <div className="icon-mobile">
            <AiOutlineBell />
          </div>
          <div className="icon-mobile">
            <AiOutlineQuestionCircle />
          </div>
          <div className="icon-mobile">
            <FiSettings />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
