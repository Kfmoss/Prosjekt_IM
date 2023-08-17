import {AbsoluteCenter, Box, Button, Center, FormControl, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Stack, VStack } from "@chakra-ui/react"
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

  const popupMenu =()=>{
    return(
      <>

      <Stack backgroundColor={'gray.500'}  position={'absolute'} w={'420px'} h={'320px'}>
        
      <FormControl  >
        <FormLabel as='legend'  fontSize='30px'color={"black"} textAlign={'center'}> Skriv inn navn</FormLabel>
        <Input p={5} placeholder="Ditt navn her!" fontSize='26px' size='lg' variant={'ouline'}></Input>
        <FormLabel as='legend'  fontSize='30px'color={"black"} textAlign={'center'}>Klasse</FormLabel>
        <Input p={5} placeholder="Hvilken klasse er du på?" fontSize='26px' size='lg' variant={'ouline'}></Input>
        
        <Button  margin='auto' justifyContent={'center'} padding='10px' border='2px' colorScheme='green' gap='4' width='190px' variant='outline' onClick={()=> setPopUp(false)}> SEND</Button>


        
      </FormControl>
      </Stack>

      {/* <form >
        <label htmlFor="name"> Navn</label>
        <input placeholder='your name here' color="gray" id="name" type="text"></input>
        <button color="red" onClick={()=> setPopUp(false)}>send!</button>
      </form> */}
      
      </>
    )
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

          {popUp&&popupMenu()}
          <MenuItem>Lær noe nytt</MenuItem>

        </MenuList>
   </Menu>

   </Box>
   </>
  )
}

export default ButtonMenu