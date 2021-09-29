import "./RegisterPage.scss";
import { useCallback, useState } from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import Loader from "../../components/loader/Loader";
import { BsArrow90DegRight } from "react-icons/bs";
import supabaseClient from "../../services/supabase.service";
import { useHistory } from "react-router";
import { ICustomToastMessage } from "../../components/custom-toast/CustomToast";
import openToast from "../../services/toast.service";

const RegisterPage = () => {
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const register = async () => {
    setLoader(true);

    const { email, password, firstName, lastName, phone } = registrationData;

    const { user, error } = await supabaseClient.auth.signUp(
      {
        email,
        password,
      },
      { data: { firstName, lastName, phone } }
    );

    setLoader(false);

    if (error) {
      handleError(error);
    }

    if (user) {
      handleSuccess();
      history.push("/dashboard");
    }
  };

  function handleError(error: any) {
    const message: ICustomToastMessage = {
      icon: "⚠️",
      content: error.message,
    };

    openToast(message);
  }

  function handleSuccess() {
    const message: ICustomToastMessage = {
      icon: "✔️",
      content: "Successfully logged in",
    };

    openToast(message);
  }

  return (
    <>
      {loader ? <Loader /> : null}

      <div className="register-page-wrapper">
        <div className="bg-image"></div>
        <div className="register-form-wrapper">
          <form>
            <div className="form-field">
              <CustomInput
                showValidations={false}
                label="First name"
                name="firstName"
                type="text"
                value={registrationData.firstName}
                handleChange={handleChange}
              />

              <CustomInput
                showValidations={false}
                label="Last name"
                name="lastName"
                type="text"
                value={registrationData.lastName}
                handleChange={handleChange}
              />
            </div>

            <div className="form-field-isolated">
              <CustomInput
                showValidations={false}
                label="Email"
                name="email"
                type="email"
                value={registrationData.email}
                handleChange={handleChange}
              />
            </div>

            <div className="form-field-isolated">
              <CustomInput
                showValidations={false}
                label="Phone number"
                name="phone"
                type="text"
                value={registrationData.phone}
                handleChange={handleChange}
              />
            </div>

            <div className="form-field-isolated">
              <CustomInput
                showValidations={false}
                label="Password"
                name="password"
                type="password"
                value={registrationData.password}
                handleChange={handleChange}
              />
            </div>

            <div className="form-field">
              <div className="button-wrapper" onClick={register}>
                <p>Create your free Account</p>
                <BsArrow90DegRight />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
