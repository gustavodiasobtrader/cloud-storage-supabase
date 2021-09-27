import "./FilesTable.scss";
import { FILE_MOCK } from "../../constants/files-mock";

const FilesTable = () => {
  const files = FILE_MOCK;

  return (
    <>
      <div className="files-table-wrapper">
        <div className="title">
          <p>Recent Files</p>
        </div>

        <div className="custom-table">
          <div className="header-items">
            <div className="item">
              <p>Name</p>
            </div>
            <div className="item">
              <p>Data Created</p>
            </div>
            <div className="item">
              <p>Size</p>
            </div>
            <div className="item">
              <p>Last Modified</p>
            </div>
          </div>

          {files.length
            ? files.map((file, index) => {
                return <TableRow key={index} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

const TableRow = () => {
  return (
    <>
      <div className="content-row">
        <div className="content-item">
          <div className="item-file-info">
            <div className="extension">
              <p>PNG</p>
            </div>
            <div className="name">Phone1551215121.png</div>
          </div>
        </div>
        <div className="content-item">
          <div className="item-creation-date">
            <p>April 4, 2020</p>
          </div>
        </div>
        <div className="content-item">
          <div className="item-size">
            <p>300 KB</p>
          </div>
        </div>
        <div className="content-item">
          <div className="item-creation-date">
            <p>April 4, 2020</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilesTable;
