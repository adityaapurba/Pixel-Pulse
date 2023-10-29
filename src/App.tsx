import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() {
  return (
    <Grid templateAreas={{
      lg: `"nav nav" "aside main"`,
      base: `"nav" "main"`
    }}
    templateColumns={{
      base: "1fr",
      lg: "250px 1fr"
    }}
    >
      <GridItem area="nav" >
        <Navbar />
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
