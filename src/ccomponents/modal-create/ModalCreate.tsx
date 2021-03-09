import React from "react";
import "./modalcreate.css";

export interface ModalCreateComponentProps {
  setOpen: Function;
}
const ModalCreateComponent: React.FC<ModalCreateComponentProps> = ({
  setOpen,
}) => {
  const clickHandler = () => {
    setOpen(false);
  };    
  

  return (
    <div className="modal-component">
      <div className="modal-content">
        <span className="close" onClick={clickHandler}>
          &times;
        </span>
        <div className="principal-content">
            <div className="info">
                 <p>Add shape</p>
            </div>
            <div className="options">
                <textarea ></textarea>
            </div>
            <div className="btns">
                <button type="button" onClick={clickHandler}>Cancel</button>
                <button type="button">Add text</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateComponent;
