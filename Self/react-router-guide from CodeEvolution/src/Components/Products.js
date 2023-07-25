import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  // const navigate = () => {
  //   console.log("Inside Navigate.");
  //   <>
  //     <Link to="new"></Link>
  //     <Outlet />
  //   </>;
  // };

  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
        {/* <button onClick={navigate}>New</button> */}
      </div>
      <nav>
        <Link to={"featured"}>Featured</Link>
        <Link to="new">New</Link>
        {/* <Link to="/products/new">New</Link> */}
        {/* <Link to="/new">New</Link> //Info: It won't work as it's not absolute. If you want to make it work change to products/new */}
      </nav>
      <Outlet />
    </>
  );
};
