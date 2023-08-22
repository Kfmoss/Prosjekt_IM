
import ButtonMenu from "./ButtonMenu";
import CreateKonto from "./CreateKonto";
import Tema from "./Tema";
import {Text} from '@chakra-ui/react';
import { popUp } from "./CreateKonto";


const NavBar = () => {
  return (
    <>


    
      <ButtonMenu/> 
      <Text fontSize='22px' onClick={()=> {popUp&&CreateKonto()}}>Opperett en konto!</Text>
      <Tema/>
      

    

      
    

    
    
    </>
  )
}

export default NavBar