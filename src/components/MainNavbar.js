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
    <Navbar maxWidth="full" isBordered className="print:hidden">
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-3xl">Portfolio</p>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex space-x-6 sm:space-x-16 xl:space-x-16 "
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/cv" aria-current="page">
            CV
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#myportfolio">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            size="lg"
            as={Link}
            color="primary"
            variant="solid"
            className="font-semibold"
            href="mailto:kotchaniphailin@gmail.com?subject=Contact from Portfolio"
            target="_blank"
            rel="noopener"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MainNavbar;
