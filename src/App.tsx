import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"

function App() {
  const [seletedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <GenreList selectedGenre={seletedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
      </GridItem>
      </Show>
      <GridItem area="main" >
        <PlatformSelector />
        <GameGrid selectedGenre={seletedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
