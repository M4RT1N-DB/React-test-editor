import React from "react";

import "./sidebar.css";

export interface SidebarLeftComponentProps {}

const SidebarLeftComponent: React.FC<SidebarLeftComponentProps> = () => {
  return (
    <div className="sidebar-component">
      <div className="sidebar-element text">
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
