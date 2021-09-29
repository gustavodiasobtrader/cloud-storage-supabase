import "./LoginPage.scss";
import { useCallback, useState } from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import Loader from "../../components/loader/Loader";
import { BsArrow90DegRight } from "react-icons/bs";
import { useHistory } from "react-router";
import supabaseClient from "../../services/supabase.service";
import openToast from "../../services/toast.service";
import { ICustomToastMessage } from "../../components/custom-toast/CustomToast";
import Particles from "react-particles-js";

const LoginPage = () => {
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    setRegistrationData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const login = async () => {
    setLoader(true);

    const { email, password } = registrationData;
    const { user, error } = await supabaseClient.auth.signIn({
      email,
      password,
    });

    setLoader(false);

    if (user) {
      handleSuccess();
      history.push("/dashboard");
    }

    if (error) {
      handleError(error);
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

      <div className="login-page-wrapper">
        <div className="bg-image">
          <Particles
            className="particle-canvas"
            params={{
              particles: {
                number: {
                  value: 50,
                },
                size: {
                  value: 3,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>
        <div className="login-form-wrapper">
          <form>
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
                label="Password"
                name="password"
                type="password"
                value={registrationData.password}
                handleChange={handleChange}
              />
            </div>

            <div className="form-field">
              <div className="button-wrapper" onClick={login}>
                <p>Log into your account</p>
                <BsArrow90DegRight />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
