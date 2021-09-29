import "./Loader.scss";
import { RiLoader3Fill } from "react-icons/ri";

const Loader = () => {
  return (
    <>
      <div className="loader-overlay">
        <div className="loader-content">
          <RiLoader3Fill />
        </div>
      </div>
    </>
  );
};

export default Loader;
