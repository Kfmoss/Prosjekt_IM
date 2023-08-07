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
>
  <GridItem pl='2' bg='gray.300' area={'header'}>
    <Header/>
  </GridItem>

  <Show above="sm">
    
  <GridItem pl='2' bg='pink.300' area={'nav'}>Nav</GridItem>
  </Show>

  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>

    



      
    </>
  )
}

export default App
