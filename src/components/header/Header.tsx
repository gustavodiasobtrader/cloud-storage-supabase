import "./Header.scss";
import { BiSearch } from "react-icons/bi";
import avatar from "../../assets/avatar.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="input-wrapper">
          <div className="custom-input">
            <BiSearch size={20} />
            <input type="text" placeholder="Search your files" />
          </div>
        </div>

        <div className="avatar-wrapper">
          <p>Anatoly Varakov</p>
          <img src={avatar} alt="User avatar" />
        </div>
      </div>
    </>
  );
};

export default Header;
