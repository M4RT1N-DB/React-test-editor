import React ,{useState}from "react";

import "./sidebar.css";

export interface SidebarLeftComponentProps {
  setOpen:Function;
}

const SidebarLeftComponent: React.FC<SidebarLeftComponentProps> = ({setOpen}) => {
      const clickHandler=()=>{
        setOpen(true);
      };
  return (
    <div className="sidebar-component">
      <div className="sidebar-element text" onClick={clickHandler}>
      </div>
      <div className="sidebar-element forms">
      </div>
      <div className="sidebar-element image">
      </div>
      <div className="sidebar-element video">
      </div>
    </div>
  );
};

export default SidebarLeftComponent;
