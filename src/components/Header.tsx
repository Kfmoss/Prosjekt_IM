import { Box, Flex, HStack, Text, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ColorModeSwitch from "./ColorModeSwitch";
import Tid from "./filter/Tid";
import ArbeidsType from "./filter/ArbeidsType";
import BlinkCursor from "./BlinkCursor";





const Header = () => {
  return (
    <>
    <HStack justifyContent={'center'}>
     blinking cursor animation
    <img src="src/assets/informasjon/title33.png" alt="" />
    <BlinkCursor/>
    {/* <Text overflow='hidden' borderRight='.15em solid green' width='0' background='navajowhite' color='white' fontSize='1.2rem'  animation='typing 1s steps(20, end) forwards, blink .8s infinite' fontFamily='sans-serif'>...</Text> */}

    <h1></h1>

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