import { Grid, GridItem, Show } from "@chakra-ui/react"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import theme_s from "./Theme"




function App() {
  

  return (
    <>

<Grid
  templateAreas={{lg:`"header header"
                      "nav main"
                      "nav footer"`, 
                  sm: `"header header"
                        "nav main"
                        "nav footer"`}}
  gridTemplateRows={'110px 1fr 30px'}
  gridTemplateColumns={'250px 1fr'}
  // h='200px'
  gap='1'
 
  padding='5px'
  bg={"white"}
>
  <GridItem pl='2' fontFamily={'sans-serif'}  area={'header'}>
    <Header/>
  </GridItem>

  <Show above="sm">
    
  <GridItem pl='2'bg='blue' area={'nav'}>


  <NavBar/>
  </GridItem>
  </Show>

  <GridItem pl='2' area={'main'}>
  
  </GridItem>
  <GridItem pl='2'  area={'footer'}>
  
  </GridItem>
</Grid>

    



      
    </>
  )
}

export default App
