import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
// import { Link } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();

  return (
    <nav className="primary-nav">
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/about">About</Link> */}
      {/* Or Use  */}
      {/* <Link to="about">About</Link> */}
      <NavLink style={navLinkStyles} to={"/"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to="/users">
        Users
      </NavLink>
      <NavLink style={navLinkStyles} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          login
        </NavLink>
      )}
    </nav>
  );
};
