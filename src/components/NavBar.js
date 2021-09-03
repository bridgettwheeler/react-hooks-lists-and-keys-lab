import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElements= links.map((link) => (
     <a key={link} href={"#" + link}>{link}</a>
  ));
    return <nav>{linksElements}</nav>
}

export default NavBar;
