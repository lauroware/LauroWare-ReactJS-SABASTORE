import { Heading, Center, Box, Image} from "@chakra-ui/react";
 
const Welcome = () => {
     return (
        <div className="welcome-container">
            <Center>
            <Box boxSize={"xl"}>
                <Image 
                src="src/assets/LOGO1.jpg"
                alt="welcome"
                />
            </Box>
            </Center>
                

        </div>
     )
}

export default Welcome;