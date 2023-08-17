import { Grid, GridItem, Show } from "@chakra-ui/react"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"




function App() {
  

  return (
    <>

<Grid
  templateAreas={{lg:`"nav header"
                      "nav main"
                      "nav footer"`, 
                  sm: `"header header"
                        "nav main"
                        "nav footer"`}}
  gridTemplateRows={'110px 1fr 160px'} //110px
  gridTemplateColumns={'280px 1fr'} //250px
  // h='200px'
  gap='1'
 
  padding='5px'
  // bg={"white"}
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
  <GridItem pl='2' bg='#718096'  area={'footer'}>
    <Footer></Footer>
  
  </GridItem>
</Grid>

    



      
    </>
  )
}

export default App
