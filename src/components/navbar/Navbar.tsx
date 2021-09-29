import "./Navbar.scss";
import { AiOutlineBell, AiOutlineHome, AiOutlineUpload } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { VscSignOut } from "react-icons/vsc";
import { useState } from "react";
import supabaseClient from "../../services/supabase.service";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [mobileOptionsShow, setMobileOptionsShow] = useState(false);
  const history = useHistory();

  const changeOptionsShow = () => {
    setMobileOptionsShow(!mobileOptionsShow);
  };

  const signout = async () => {
    await supabaseClient.auth.signOut();

    history.push("/login");
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
              <AiOutlineBell />
            </div>
            <div className="icon">
              <FiSettings />
            </div>
            <div className="icon" onClick={signout}>
              <VscSignOut />
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
            <AiOutlineBell />
          </div>
          <div className="icon-mobile">
            <FiSettings />
          </div>
          <div className="icon-mobile">
            <VscSignOut />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
