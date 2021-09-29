import "./MainContent.scss";
import Header from "../header/Header";
import StorageOverview from "../storage-overview/StorageOverview";
import CardsOverview from "../cards-overview/CardsOverview";
import FilesTable from "../files-table/FilesTable";
import { useCallback, useState } from "react";
import USER_STORE from "../../store/user.store";
import supabaseClient from "../../services/supabase.service";
import openToast from "../../services/toast.service";
import { ICustomToastMessage } from "../custom-toast/CustomToast";
import Loader from "../loader/Loader";
import fileTypeChecker from "../../utils/file-type-checker";

const MainContent = () => {
  const user = USER_STORE((state) => state.user);
  const [loader, setLoader] = useState(false);

  const handleFile = useCallback(
    async (e: any) => {
      setLoader(true);

      const file = e.target.files[0];
      // const mb = (file.size / 1024 / 1024).toFixed(2);
      const type = file.type.split("/")[1];
      const name = file.name;

      if (!fileTypeChecker(type)) {
        const message: ICustomToastMessage = {
          icon: "⚠️",
          content: "This type of file is not allowed",
        };

        openToast(message);
        setLoader(false);

        return;
      }

      const { data, error } = await supabaseClient.storage
        .from("avatars")
        .upload(`images/${name}-${user.id}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      setLoader(false);

      if (error) {
        const message: ICustomToastMessage = {
          icon: "⚠️",
          content: error.message,
        };
        openToast(message);
      }

      if (data) {
      }
    },
    [user]
  );

  return (
    <>
      {loader ? <Loader /> : null}
      <div className="main-content-wrapper">
        <Header />
        <StorageOverview handleFile={handleFile} />
        <CardsOverview />
        <FilesTable />
      </div>
    </>
  );
};

export default MainContent;
