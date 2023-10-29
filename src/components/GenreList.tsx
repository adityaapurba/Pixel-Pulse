import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const {data} = useGenres();

  return (
    <ul>
    {data.map(genre => <>{genre}</>)}
    </ul>
  )
}

export default GenreList