import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"


const ButtonMenu = () => {

    const sizeText_menu = '22px';
    const sizeText_button= '25px';
    




  return (
   <>
   <Box padding={2}>

    <Menu>
      <MenuButton as={Button} fontSize={sizeText_button}
        backgroundColor='gray.300'
        px={4}
        py={2}
        transition='all 0.2s'
        borderRadius='md'
        borderWidth='1px'
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
       >
        Meny</MenuButton>
        <MenuList fontSize={sizeText_menu}>
          <MenuItem>Opprett konto</MenuItem>
          <MenuItem>Finn prosjekt</MenuItem>
          <MenuItem>Velg et tema</MenuItem>
          <MenuItem>Lær noe nytt</MenuItem>
          <MenuItem>Om IM</MenuItem>
        </MenuList>
   </Menu>

   </Box>
   </>
  )
}

export default ButtonMenu