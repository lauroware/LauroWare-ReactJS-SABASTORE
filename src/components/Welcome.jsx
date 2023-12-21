import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Center>
      <Box boxSize={{ base: "90%", md: "50%" }} textAlign="center">
        <Image
          src="https://totinas.com.ar/assets/img/logo%20(2).png"
          alt="logo de la empresa"
          mx="auto" // Centra horizontalmente la imagen
          mb={{ base: 4, md: 8 }} // Ajusta los márgenes inferiores según tus necesidades
        />
        {/* Agrega más contenido si es necesario */}
      </Box>
    </Center>
  );
};

export default Welcome;
