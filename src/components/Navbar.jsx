import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <div id="navbar" className="flex justify-between w-full px-8 bg-sidebar">
      <Button variant="link" color="#ffffff" mr={"500px"}>
        LEXICON
      </Button>
      <>
        <Button variant="link" color="#ffffff">
          Category
        </Button>
        <Button variant="link" color="#ffffff">
          Author
        </Button>
        <Button variant="link" color="#ffffff">
          Favorite
        </Button>
        <Button variant="link" color="#ffffff">
          My Bookshelf
        </Button>
        <Button variant="link" color="#ffffff">
          Sign In
        </Button>
      </>
    </div>
  );
};

export default Navbar;
