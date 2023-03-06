import { Button } from "@chakra-ui/react";
import React from "react";

const CartWidget = () => {
  return (
    <>
      <Button colorScheme="gray" size="md" color="#262626">
        <span className="material-symbols-outlined">shopping_cart</span>
      </Button>
    </>
  );
};

export default CartWidget;
