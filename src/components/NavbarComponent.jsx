import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavbarComponent() {
  return (
    <div className="flex justify-between items-center px-[20px] py-[10px] bg-mainBlue border-b border-white"> 
      <div className="flex items-center justify-between gap-[100px]">
        <div className="flex gap-[20px] text-white text-[18px] font-sans">
          <Link to={"/"} className="hover:text-mainYellow transition-all duration-200">POčETNA</Link>
          <Link to={"/favorites"} className="hover:text-mainYellow transition-all duration-200">OMILJENI</Link>
        </div>
        <div className="flex bg-white rounded-[25px]">
          <input type="text" placeholder="Pretraži" className="rounded-[25px] px-[20px] py-[10px]"/>
          <button className="bg-mainYellow text-white px-[20px] py-[10px] rounded-[25px]">Pretraži</button>
        </div>
      </div>
      <img src={logo} alt="logo" className="w-[50px]"/>
    </div>
  );
}

export default NavbarComponent;
