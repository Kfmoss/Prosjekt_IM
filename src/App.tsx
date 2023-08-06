import { Grid, GridItem } from "@chakra-ui/react"




function App() {
  

  return (
    <>
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area='nav' bg='blue'>nav-info</GridItem>
      <GridItem area='aside' bg='green'> hoved seksjon</GridItem>
      <GridItem area='main' bg='yellow'>Informasjon</GridItem>
    </Grid>

      
    </>
  )
}

export default App
