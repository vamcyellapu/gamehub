import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatoform from "../hooks/usePlatoform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatoform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" my={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
