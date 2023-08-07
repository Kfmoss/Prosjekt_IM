import { Box, Button, Flex, Input } from "@chakra-ui/react"


const SearchBar = () => {

    
  return (
    <>
    <Flex h='45px' padding={2}>
        <Box>
            <Input borderColor='white' w='550px' placeholder="INSERT A WORD!"/>
        </Box>
        <Box>
            <Button color={"white"} backgroundColor='gray.400'> GO!</Button>
        </Box>
        <Box>
            
        </Box>
    </Flex>
    
    </>
  )
}

export default SearchBar