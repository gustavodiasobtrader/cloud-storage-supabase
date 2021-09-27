import Navbar from "../../components/navbar/Navbar";
import MainContent from "../../components/main-content/MainContent";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <Navbar />
        <MainContent />
      </div>
    </>
  );
};

export default Dashboard;
