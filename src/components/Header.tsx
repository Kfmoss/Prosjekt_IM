import { Box, Flex, Image, Text } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ColorModeSwitch from "./ColorModeSwitch";




const Header = () => {
  return (
    <>
    <Text textAlign='center' color='Tomato' fontWeight='600' fontSize='4xl' fontFamily='sans-serif'>KodeStorm</Text>
    <Flex justifyContent='space-between'>
        <Box>
          <SearchBar/>

        </Box>
     
        <Box>
         

          <ColorModeSwitch/>
        </Box>

    </Flex>
    
    </>
  )
}

export default Header;