import { Box, Button, Flex, Input } from "@chakra-ui/react"


const SearchBar = () => {

    
  return (
    <>
    <Flex h='45px' padding={2}>
        <Box>
            <Input borderColor='blue.500' w='550px' fontSize='20px'color='blackAlpha.800' placeholder="INSERT A WORD!"/>
        </Box>
        <Box>
            <Button color='green.400' backgroundColor='blackAlpha.700' > GO!</Button>
        </Box>
        <Box>
            
        </Box>
    </Flex>
    
    </>
  )
}

export default SearchBar