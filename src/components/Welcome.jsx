import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize={"xl"}>
          <Image src="src/assets/LOGO1.png" alt="logo de la empresa" />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;
