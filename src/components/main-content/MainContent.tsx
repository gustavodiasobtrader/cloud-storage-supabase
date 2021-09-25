import "./MainContent.scss";
import Header from "../header/Header";
import StorageOverview from "../storage-overview/StorageOverview";
import CardsOverview from "../cards-overview/CardsOverview";
import { useCallback, useState } from "react";

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFile = useCallback((e: any) => {
    // const file = e.target.files[0];
    // const mb = (file.size / 1024 / 1024).toFixed(2);
    // const type = file.type.split("/")[1];
    // const name = file.name;
  }, []);

  return (
    <>
      <div className="main-content-wrapper">
        <Header />
        <StorageOverview handleFile={handleFile} />
        <CardsOverview />
      </div>
    </>
  );
};

export default MainContent;
