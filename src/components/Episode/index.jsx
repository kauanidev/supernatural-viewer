import { useSerie } from "../../hooks/useSerie";
import { Container } from "./styles";

export function Episode({ episode }) {
  const image = `https://api.allorigins.win/raw?url=https://image.tmdb.org/t/p/original${episode.still_path}`;

  const { selectedEpisode, setSelectedEpisode } = useSerie();

  function selectEpisode() {
    setSelectedEpisode(episode);
  }

  const isSelected = selectedEpisode.id === episode.id;

  return (
    <Container imgUrl={image} isSelected={isSelected} onClick={selectEpisode}>
      <div>
        <p>Episódio {episode.episode_number}</p>
      </div>
    </Container>
  );
}
