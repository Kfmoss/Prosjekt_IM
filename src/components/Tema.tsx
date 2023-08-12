import { List, ListItem, Text, VStack} from "@chakra-ui/react"





const Tema = () => {

    const options=['Utvikling', 'Nettverk', 'MobilProgrammering', 'Hacking', 'DataBaser', 'Informasjon om Fagbrev'];


  return (
    <>
    <VStack>
    <Text fontSize="2xl"> Tema </Text>
    <List>
       {/* {options.map(item => <ListItem onClick={()=>alert('Please check this out')} key={item}>{item}</ListItem>)} */}
       {options.map(item => <ListItem onClick={()=>alert('Please check this out')} key={item}>{item}</ListItem>)}

    </List>
    </VStack>

    </>
  )
}

export default Tema