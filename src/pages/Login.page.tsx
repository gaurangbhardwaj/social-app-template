import { FunctionComponent } from "react";
import FormComponent from "../components/form/Form.component";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="container">
      <FormComponent formType="login" />
    </div>
  );
};

export default LoginPage;
