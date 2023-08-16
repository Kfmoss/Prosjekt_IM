import { List, ListItem,VStack, Box, Heading} from "@chakra-ui/react"
import {Icon} from "@chakra-ui/react"
import { MdSettings, MdDeveloperMode} from 'react-icons/md'
import {BsFillCameraReelsFill} from 'react-icons/bs'


const Tema = () => {

    const options=['Utvikling', 'Nettverk', 'MobilProgrammering', 'Hacking', 'DataBaser'];
    const media =['Fotoredigering', 'Videoredigering', 'VideoProduksjon','Lyd' ];
    const info =['Hva er YFF?', 'Om vurdering', 'Om IM', 'Informasjon om Fagbrev']

    // alert('Valg in progress')

  return (
    <>
    <VStack alignItems={'right'}>

      <Box paddingBottom={2} >

      <Heading fontSize="2xl" color='white' fontWeight='600'> IT-Prosjekter </Heading>
      <List>
        {/* {options.map(item => <ListItem onClick={()=>alert('Please check this out')} key={item}>{item}</ListItem>)} */}
        {options.map(item => <ListItem onClick={()=> alert('Valg in progress')} key={item}> <Icon as={MdDeveloperMode} color='white' marginRight={1}/><a href="#">{item}</a>  </ListItem>)}

      </List>
      </Box>

      <Box paddingBottom={2}>

        
        <Heading fontSize="2xl" color='white' fontWeight='600'> MedieProduksjon </Heading>
      <List>
        {/* {options.map(item => <ListItem onClick={()=>alert('Please check this out')} key={item}>{item}</ListItem>)} */}
        {media.map(item => <ListItem onClick={()=>alert('Valg in progress')} key={item}> <Icon as={BsFillCameraReelsFill} color='red' marginRight={1}/><a href="#">{item}</a></ListItem>)}

      </List>
    

      </Box>

      <Box>

      
      <Heading fontSize="2xl" color='white' fontWeight='600'>YFF </Heading>

      
      <List>
        {/* {options.map(item => <ListItem onClick={()=>alert('Please check this out')} key={item}>{item}</ListItem>)} */}
        {info.map(item => <ListItem onClick={()=>alert('Valg in progress')} key={item}> <Icon as={MdSettings} marginRight={1} /><a href="#">{item}</a></ListItem>)}

      </List>

      </Box>
  
    
    </VStack>
   
    

    </>
  )
}

export default Tema