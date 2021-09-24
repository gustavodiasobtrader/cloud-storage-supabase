import { AiOutlineHome } from "react-icons/ai";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <Navbar />
        <div className="main-content"></div>
      </div>
    </>
  );
};

export default Dashboard;
