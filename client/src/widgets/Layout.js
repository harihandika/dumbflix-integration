import React from "react";
import NavbarAdmin from "../components/admin/NavbarAdmin";

function Layout(props) {
  return (
    <>
      <NavbarAdmin />
      {props.children}
    </>
  );
}

export default Layout;
