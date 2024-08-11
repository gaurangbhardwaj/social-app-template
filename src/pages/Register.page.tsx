import { FunctionComponent } from "react";
import FormComponent from "../components/form/Form.component";

const RegisterPage: FunctionComponent = () => {
  return (
    <div className="container">
      <FormComponent formType="register" />
    </div>
  );
};

export default RegisterPage;
