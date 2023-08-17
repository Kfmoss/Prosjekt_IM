import { Box, Flex, HStack, Text, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ColorModeSwitch from "./ColorModeSwitch";
import Tid from "./filter/Tid";
import ArbeidsType from "./filter/ArbeidsType";





const Header = () => {
  return (
    <>
    <HStack justifyContent={'center'}>
    <Text textAlign='center' color='Tomato' fontWeight='600' fontSize='4xl' fontFamily='sans-serif'>KodeStorm</Text>
    <Image src="/home/edg/Desktop/Aasiden_IM/prosjekt1/src/assets/braces.svg"/>

    </HStack>
    <Flex justifyContent='space-between'>
        <Box>
          <SearchBar/>

        </Box>
     
        <Box>
         

          <ColorModeSwitch/>
        </Box>

    </Flex>
    <Box padding={3}>
      <Tid/>
      <ArbeidsType/>
    </Box>
    
    </>
  )
}

export default Header;