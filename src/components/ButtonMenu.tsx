import {Box, Button, FormControl, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import React, { ReactNode } from 'react'
import {BsChevronDown } from "react-icons/bs"
import { useState } from "react"
import ClickAwayListener from 'react-click-away-listener';



interface Props{
  children:ReactNode;
  onSelect: ()=>void;
}




const ButtonMenu = () => {

  const [popUp, setPopUp] = useState(false);
  const onSelect =()=>{
    setPopUp(true)

  }

  

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
          <MenuItem onClick={()=>setPopUp(true)}>Opprett konto</MenuItem>

          {popUp&&(<ClickAwayListener onClickAway={() =>setPopUp(false)}>
            <Box position='relative' h='100hv'>

            <FormControl className='popUp'>
              <FormLabel>
                ditt navn:
              </FormLabel>
              <Input placeholder="your name here"></Input>
            </FormControl>

            </Box>

          </ClickAwayListener>)}
          <MenuItem>Lær noe nytt</MenuItem>

        </MenuList>
   </Menu>

   </Box>
   </>
  )
}

export default ButtonMenu