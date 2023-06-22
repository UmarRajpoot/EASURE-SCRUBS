import React from "react";
import { Navbar } from "flowbite-react";

const NavbarComp = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Ease Use
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Button>Get started</Button> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link> */}
        <Navbar.Link href="#">Women</Navbar.Link>
        <Navbar.Link href="#">Men</Navbar.Link>
        <Navbar.Link href="#">TEAMSOrders</Navbar.Link>
        <Navbar.Link href="#">Student</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
