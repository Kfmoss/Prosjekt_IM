import {Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import React, { ReactNode } from 'react'
import {BsChevronDown } from "react-icons/bs"



interface Props{
  children:ReactNode;
  onSelect: ()=>void;
}

const ButtonMenu = () => {
  

    const sizeText_menu = '23px';
    const sizeText_button= '23px';

  return (
   <>
   <Box padding={2}>

    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>} fontSize={sizeText_button}
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
          <MenuItem >Opprett konto</MenuItem>
          <MenuItem>Lær noe nytt</MenuItem>

        </MenuList>
   </Menu>

   </Box>
   </>
  )
}

export default ButtonMenu