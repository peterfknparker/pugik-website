import React from "react";
import Button from "../utilities/button";
import MenuItem from "./Navbar-Link";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="w-full flex items-center mt-7 mb-7">
      <Logo />
      <div className="grow md:hidden flex justify-end">
        <MenuToggle />
      </div>
      <div className="grow hidden md:block">
        <nav aria-labelledby="mainmenulabel" role="navigation">
          <h2 id="mainmenulabel" className="sr-only">
            Main Menu
          </h2>
          <ul className="flex space-x-10 justify-end items-center">
            <MenuItem url="/about">O Nas</MenuItem>
            <MenuItem url="/portfolio">Usługi</MenuItem>
            <MenuItem url="/contact">Kontakt</MenuItem>

            <li>
              <Button url="http://google.com" color="secondary" style="rounded">
                Wycena bez zobowiązań
              </Button>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
