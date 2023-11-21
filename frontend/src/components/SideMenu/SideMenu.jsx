import React from "react";
import { itmLogo } from "../../assets";
import SideMenuContent from "./SideMenuContent";

const SideMenu = () => {
  return (
    <React.Fragment>
      <div className="bg-black py-2 px-4">
        <a
          href="/"
          className="flex justify-start items-center font-bold text-2xl tracking-widest text-white leading-none">
          <img
            src={itmLogo}
            alt="Inventory Tracking Master Logo"
            className="h-12 w-12 rounded-full mr-5"
          />
          ITM
        </a>
      </div>
      <div>
        <SideMenuContent />
      </div>
    </React.Fragment>
  );
};

export default SideMenu;
