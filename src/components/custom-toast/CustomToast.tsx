import "./CustomToast.scss";

interface IProps {
  message: ICustomToastMessage;
}

export interface ICustomToastMessage {
  icon: string;
  content: string;
}

const CustomToast = (props: IProps) => {
  return (
    <>
      <div className="custom-toast-wrapper">
        <div className="icon">
          <p>{props.message.icon}</p>
        </div>
        <div className="message">
          <p>{props.message.content}</p>
        </div>
      </div>
    </>
  );
};

export default CustomToast;
