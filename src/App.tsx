import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Grid templateAreas={{
      lg: `"nav nav" "aside main"`,
      base: `"nav" "main"`
    }}>
      <GridItem area="nav" >
        <Navbar />
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  )
}

export default App
