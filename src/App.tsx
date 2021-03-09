import React from "react";
import "./App.css";

import HeaderComponent from "./ccomponents/header/Header";
import SidebarLeftComponent from "./ccomponents/sidebar-left/SidebarLeft";
import SidebarRightComponent from "./ccomponents/sidebar-right/SidebarRight";
import FooterComponent from "./ccomponents/footer/Footer";
import CentralCanvasComponent from "./ccomponents/central-canvas/CentralCanvas";

function App() {
  return (
    <div className="app-component">
      <HeaderComponent />
      <div className="wrap-central-content">
        <SidebarLeftComponent />
        <div className="content">
          <div className="wrap-canvas">
              <CentralCanvasComponent />
              <SidebarRightComponent />
          </div>
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
