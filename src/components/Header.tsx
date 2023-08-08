import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/navbar/oktopus.png";
import SearchBar from "./SearchBar";
import ButtonMenu from "./ButtonMenu";
import ColorModeSwitch from "./ColorModeSwitch";




const Header = () => {
  return (
    <>
    <Flex justifyContent='space-between'>
        <Box>
            <Image src={logo} boxSize={'60px'} borderRadius='10px' padding='5px'/>

        </Box>
        <Box>
          <SearchBar/>

        </Box>
        <Box>

          <ButtonMenu/>
        </Box>
        <Box>
          <ColorModeSwitch/>

        </Box>
    </Flex>
    
    </>
  )
}

export default Header;