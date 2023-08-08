import { Grid, GridItem, Show } from "@chakra-ui/react"
import Header from "./components/Header"




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
  gridTemplateRows={'70px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  margin='5px'
  bg={"white"}
>
  <GridItem pl='2'  area={'header'}>
    <Header/>
  </GridItem>

  <Show above="sm">
    
  <GridItem pl='2' area={'nav'}>Nav</GridItem>
  </Show>

  <GridItem pl='2' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2'  area={'footer'}>
    Footer
  </GridItem>
</Grid>

    



      
    </>
  )
}

export default App
