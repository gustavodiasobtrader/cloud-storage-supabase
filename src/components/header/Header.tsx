import "./Header.scss";
import { BiSearch } from "react-icons/bi";
import avatar from "../../assets/avatar.jpg";
import USER_STORE from "../../store/user.store";

const Header = () => {
  const user = USER_STORE((state) => state.user);

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
          <p>{`${user.user_metadata.firstName.toLowerCase()} ${user.user_metadata.lastName.toLowerCase()}`}</p>
          <img src={avatar} alt="User avatar" />
        </div>
      </div>
    </>
  );
};

export default Header;
