import {Image, Flex, VStack, Text, Box, List, ListItem} from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
    <Flex justifyContent='space-between'>
      <Box padding='5px'>
      <VStack>
        <List textAlign='center'>
          <ListItem fontFamily=''>Åssiden videregående skole</ListItem>
          <ListItem>Kontakt:</ListItem>
          <ListItem></ListItem>
          <ListItem>32246100</ListItem>
          <ListItem>assidenvgs@viken.no</ListItem>
          <ListItem><Image src='../src/assets/footer/logoskole1.png'/></ListItem>

          
        </List>

      </VStack>

      </Box>
    </Flex>
    </>
  )
}

export default Footer