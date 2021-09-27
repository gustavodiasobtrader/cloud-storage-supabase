import "./StorageOverview.scss";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useRef } from "react";

interface IProps {
  handleFile: (e: any) => void;
}

const StorageOverview = (props: IProps) => {
  const inputRef = useRef(null);

  function triggerFile() {
    if (inputRef) {
      const input: any = inputRef.current;

      input.click();
    }
  }

  return (
    <>
      <div className="storage-overview-wrapper">
        <div className="title">
          <p>Dashboard</p>
        </div>

        <div className="progress-bar-wrapper">
          <p>50/50 GB Used</p>
          <div className="progress-bar">
            <div className="images-bar"></div>
            <div className="docs-bar"></div>
            <div className="audio-bar"></div>
          </div>
        </div>

        <div className="upload-button" onClick={triggerFile}>
          <div className="button">
            <div className="button-content">
              <AiOutlineCloudUpload />
              <p>Upload File</p>
            </div>
            <input
              accept=".mp3, .mp4. .pdf, .jpg, .png, .doc"
              ref={inputRef}
              type="file"
              onChange={props.handleFile}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageOverview;
