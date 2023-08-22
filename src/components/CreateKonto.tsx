import { Box, Button, Card, CardBody, CardFooter, CardHeader, CloseButton, Flex, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
 export const [popUp, setPopUp] = useState(false);

const CreateKonto = () => {
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

        







        </>
    )
  
}

export default CreateKonto




     