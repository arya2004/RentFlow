import React from "react";
import logoImg from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = () => {
  const { userType } = useSelector((store) => store.auth);

  return (
    <Link to={`/${userType || ""}`} className="flex items-center space-x-2">
      <img
        src={logoImg}
        alt="Corazon Homes Logo"
        className="h-12 md:h-16 w-auto object-contain"
      />
      <div className="hidden md:block"></div>
    </Link>
  );
};

export default Logo;
