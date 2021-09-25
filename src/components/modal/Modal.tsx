import React from "react";
import "./Modal.scss";

interface IProps {
  closeOnOutsideClick?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

const Modal = (props: IProps) => {
  function handleOutsideClick() {
    if (props.closeOnOutsideClick) {
      props.onClose();
    }
  }

  return (
    <>
      <div className="modal-overlay" onClick={handleOutsideClick}>
        <div className="modal-content">{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
