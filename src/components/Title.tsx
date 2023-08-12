import { Box, Flex, Text, Image } from "@chakra-ui/react";
import logo from "../assets/navbar/oktopus.png";

const Title = () => {
  return (
    <>

    <Flex justifyContent='space-between'>
        <Box>
        
            <Image src={logo} boxSize={'60px'} borderRadius='10px' padding='5px'/>
        </Box>
        <Box>

            <Text fontSize='35px'>

                Informasjonsteknologi 
                <br/>
                og Medieproduksjon IM
                

            </Text>

        </Box>

    </Flex>


    </>
  )
}

export default Title