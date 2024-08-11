import { FunctionComponent, memo, useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/images/close-icon.svg";

import "./Form.style.scss";

const renderData = {
  login: {
    title: "WELCOME BACK",
    description: "Log into your account",
    fields: {
      email: {
        label: "Email or Username",
        placeholder: "Enter your email or username",
      },
    },
    buttonText: "Login now",
    linkText: "Not registered yet?",
    link: "Register",
  },
  register: {
    title: "SIGN UP",
    description: "Create an account to continue",
    fields: {
      email: {
        label: "Email",
        placeholder: "Enter your email",
      },
      username: {
        label: "Username",
        placeholder: "Choose a preferred username",
      },
    },
    buttonText: "Continue",
    linkText: "Already have an account?",
    link: "Login",
  },
};

interface FormComponentProps {
  formType: "login" | "register";
  modal?: boolean;
  onFormTypeChange?: (formType: "login" | "register") => void;
  onClose?: () => void;
}

const FormComponent: FunctionComponent<FormComponentProps> = ({
  formType,
  modal,
  onFormTypeChange,
  onClose,
}) => {
  const navigate = useNavigate();
  const navigateTo = (route: string) => {
    navigate(route);
  };
  const formConfig = renderData[formType];

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLinkClick = () => {
    if (modal && onFormTypeChange) {
      onFormTypeChange(formType === "login" ? "register" : "login");
    } else {
      navigateTo(formType === "login" ? "/register" : "/");
    }
  };

  return (
    <div
      className="form-container"
      style={{ height: modal ? "fit-content" : "100vh" }}
    >
      {!modal && <img src={Logo} alt="Logo" className="icon" />}
      <div className="form-box" style={{ width: modal ? "100%" : "80%" }}>
        {modal && (
          <div style={{ alignSelf: "flex-end" }}>
            <div className="close-icon-container" onClick={onClose}>
              <img src={closeIcon} alt="close" className="close-icon" />
            </div>
          </div>
        )}
        <h6 className="welcome-back text-center">{formConfig.title}</h6>
        <h4 className="log-heading text-center">{formConfig.description}</h4>
        <form>
          {Object.entries(formConfig.fields).map(([key, value]) => (
            <div key={value.label} className="form-group">
              <label>{value.label}</label>
              <input
                type={key === "email" ? "email" : "text"}
                id={key}
                placeholder={value.placeholder}
              />
            </div>
          ))}
          <div className="form-group">
            <div className="forgot-password-container">
              <label>Password</label>
              {formType === "login" && <span>Forgot password?</span>}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1.5px solid #35373b",
                borderRadius: "4px",
                background: "none",
                color: "#ffffff",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                style={{
                  width: "100%",
                  border: "none",
                }}
                placeholder={
                  formType === "login"
                    ? "Enter your password"
                    : "Choose a strong password"
                }
              />
              <FiEye
                style={{
                  color: "#7F8084",
                  marginRight: "10px",
                  width: "20px",
                  height: "20px",
                  cursor: "pointer",
                }}
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary-form"
            onClick={() => navigateTo("/main")}
          >
            {formConfig.buttonText}
          </button>
        </form>
        <div className="register-container">
          <span
            style={{
              color: "#7F8084",
              fontSize: "14px",
            }}
          >
            {formConfig.linkText}
          </span>

          <span
            onClick={handleLinkClick}
            style={{
              color: "#c5c7ca",
              fontSize: "14px",
              marginLeft: "5px",
              cursor: "pointer",
            }}
          >
            {formConfig.link}
            <FaArrowRight
              style={{
                color: "#c5c7ca",
                fontSize: "14px",
                marginLeft: "5px",
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default memo(FormComponent);
