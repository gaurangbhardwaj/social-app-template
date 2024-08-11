import { FunctionComponent, memo, useState } from "react";
import FormComponent from "../form/Form.component";
import "./Modal.style.scss";

interface ModalComponentProps {
  show: boolean;
  onHide: () => void;
  formType: "login" | "register";
}

const ModalComponent: FunctionComponent<ModalComponentProps> = ({
  show,
  onHide,
  formType,
}) => {
  const [localFormType, setFormType] = useState<"login" | "register">(formType);

  const handleFormTypeChange = (newFormType: "login" | "register") => {
    setFormType(newFormType);
  };

  if (!show) return null;
  return (
    <div className="popup-wrapper">
      <div className="modal-overlay" onClick={onHide} />
      <div className="modal-container">
        <div className="modal-body">
          <FormComponent
            formType={localFormType}
            modal
            onFormTypeChange={handleFormTypeChange}
            onClose={onHide}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ModalComponent);
