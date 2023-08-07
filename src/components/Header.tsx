import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/navbar/oktopus.png";
import SearchBar from "./SearchBar";




const Header = () => {
  return (
    <>
    <Flex justifyContent='space-between'>
        <Box>
            <Image src={logo} boxSize={'50px'} borderRadius='10px'/>

        </Box>
        <Box>
          <SearchBar/>

        </Box>
        <Box>

        </Box>
    </Flex>
    
    </>
  )
}

export default Header;