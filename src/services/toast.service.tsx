import { toast } from "react-toastify";
import CustomToast, {
  ICustomToastMessage,
} from "../components/custom-toast/CustomToast";

function openToast(message: ICustomToastMessage) {
  toast(<CustomToast message={message} />, {
    position: toast.POSITION.TOP_CENTER,
    theme: "dark",
  });
}

export default openToast;
