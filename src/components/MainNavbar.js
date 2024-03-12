import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const MainNavbar = () => {
  return (
    <div>
      <Navbar maxWidth="full">
        <NavbarBrand>
          <p className="font-bold text-3xl">Portfolio</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex space-x-6 sm:space-x-16 xl:space-x-16 " justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              About me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Project
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button size="lg" as={Link} color="primary" href="/cv" variant="solid" className="font-semibold">
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
