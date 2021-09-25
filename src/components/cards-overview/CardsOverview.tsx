import "./CardsOverview.scss";
import { BiBook, BiPhotoAlbum } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";

const CardsOverview = () => {
  return (
    <>
      <div className="overview-wrapper">
        <p className="title">Storage</p>

        <div className="cards-wrapper">
          <div className="card">
            <div className="card-content">
              <div className="title-and-icon">
                <div className="section-logo images">
                  <BiPhotoAlbum />
                </div>

                <p>Images</p>
              </div>

              <div className="usage-info">
                <p>24 GB of 50 GB used</p>
                <div className="bar-status">
                  <div className="bar-filler images"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content"></div>
          </div>
          <div className="card">
            <div className="card-content"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsOverview;
