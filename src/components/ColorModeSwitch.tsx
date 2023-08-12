import { Box, Flex, Switch, Text, useColorMode } from "@chakra-ui/react"
import extendTheme from "../Theme";
import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'




const ColorModeSwitch = () => {

    const{toggleColorMode, colorMode}= useColorMode();
  return (
    <Flex>
        <Box>
            <Switch colorScheme='green'  size={'lg'} isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        </Box>
        <Box paddingLeft={2}>
            <Text fontSize='24px'color='red.600'>Dark Mode</Text>
        </Box>
    </Flex>
  )
}

export default ColorModeSwitch