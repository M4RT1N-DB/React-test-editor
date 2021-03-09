import React ,{createRef, useState}from "react";
import "./App.css";

import HeaderComponent from "./ccomponents/header/Header";
import SidebarLeftComponent from "./ccomponents/sidebar-left/SidebarLeft";
import SidebarRightComponent from "./ccomponents/sidebar-right/SidebarRight";
import FooterComponent from "./ccomponents/footer/Footer";
import CentralCanvasComponent from "./ccomponents/central-canvas/CentralCanvas";
import ModalCreateComponent from "./ccomponents/modal-create/ModalCreate";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <div className="app-component">
      {open? <ModalCreateComponent setOpen={setOpen}  />:null}
     
      <HeaderComponent />
      <div className="wrap-central-content">
        <SidebarLeftComponent setOpen={setOpen}/>
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
