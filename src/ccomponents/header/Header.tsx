import React from "react";
import "./header.css";

export interface HeaderComponentProps {}

const HeaderComponent: React.FC<HeaderComponentProps> = () => {
  return (
    <div className="header-component">
      <div className="logo" /> 
      <div className="btn-save">
          <button type="button">Save &amp; Preview</button>
      </div>
    </div>
  );
};

export default HeaderComponent;
