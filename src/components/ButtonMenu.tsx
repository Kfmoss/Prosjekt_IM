import { Box, Button, FormControl, FormLabel, Text, Image,Input, Menu, MenuButton, MenuItem, MenuList, Stack, VStack, CloseButton, Flex, Heading } from "@chakra-ui/react"
import React, { ReactNode } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useState } from "react"




interface Props{
  children:ReactNode;
  onSelect: ()=>void;
}






const ButtonMenu = () => {

  const [popUp, setPopUp] = useState(false);

  const popupMenu =()=>{


    return(
      <>
      <Card backgroundColor={'gray.500'}  position={'absolute'} w={'420px'} h={'500px'} top='18%' left={'9%'}>
        <CardHeader>

          <Flex justifyContent={'space-between'}>
            <Box>
              <Heading>
                Registrer deg

              </Heading>

            </Box>

            <Box>

              <CloseButton aria-label="Lukk" onClick={() =>setPopUp(false)}/>

            </Box>
          </Flex>
        </CardHeader>
        <CardBody>

        {/* <VStack backgroundColor={'gray.500'}  position={'absolute'} w={'420px'} h={'320px'}> */}
        <VStack>
          <FormControl  >
            <FormLabel as='legend'  fontSize='30px'color={"black"} textAlign={'center'}>Brukernavn</FormLabel>
            <Input p={5} placeholder="Ditt navn her!" fontSize='26px' size='lg' variant={'ouline'}></Input>
            <FormLabel as='legend'  fontSize='30px'color={"black"} textAlign={'center'}>Passord</FormLabel>
            <Input p={5} type="password" placeholder="Ditt passord her!" fontSize='26px' size='lg' variant={'ouline'}></Input>
            <FormLabel as='legend'  fontSize='30px'color={"black"} textAlign={'center'}>Passord</FormLabel>
            <Input p={5} type="password" placeholder="Skriv inn passord på nytt!" fontSize='26px' size='lg' variant={'ouline'}></Input>
        
            {/* <Button  margin='auto' justifyContent={'center'} padding='10px' border='2px' colorScheme='green' gap='4' width='190px' variant='outline' onClick={()=> setPopUp(false)}> SEND</Button> */}
        </FormControl>
      </VStack>
        </CardBody>
        <CardFooter>
        <Button  margin='auto' justifyContent={'center'} padding='10px' border='2px' colorScheme='green' gap='4' width='190px' variant='solid' onClick={()=> setPopUp(false)}> SEND</Button>

        </CardFooter>
        


      















      </Card>

     
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
      <MenuButton as={Button} fontSize={sizeText_button}
        backgroundColor='gray.300'
        // px={4}
        // py={2}
        // transition='all 0.2s'
        // borderRadius='md'
        // borderWidth='1px'
        // _hover={{ bg: 'gray.400' }}
        // _expanded={{ bg: 'blue.400' }}
        // _focus={{ boxShadow: 'outline' }}
        onClick={()=>setPopUp(true)}
       >
        Opprett en konto</MenuButton>
        <MenuList fontSize={sizeText_menu}>
          {/* <MenuItem onClick={()=>setPopUp(true)}>Opprett konto</MenuItem> */}
          <MenuItem >{popUp&&popupMenu()}</MenuItem>

        </MenuList>
   </Menu>

   </Box>
   </>
  )
}

export default ButtonMenu