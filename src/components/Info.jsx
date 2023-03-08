import { FormControl, Container, Box } from "@chakra-ui/react";
import React from "react";

const Info = () => {
  return (
    <Container className="cart-container">
      <FormControl>
        <Box>
          <img src="/src/assets/INFO.jpg" alt="" />
        </Box>
      </FormControl>
    </Container>
  );
};

export default Info;
