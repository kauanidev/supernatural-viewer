import { useSerie } from "../../hooks/useSerie";
import { Container, Details, SeasonSelect } from "./styles";

export function CurrentBanner() {
  const {
    selectedSeason,
    setSelectedSeason,
    seasonDetails,
    selectedEpisode,
    serieDetails,
  } = useSerie();

  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  const imgUrl = !selectedEpisode.id
    ? `${baseImageUrl}${serieDetails.backdrop_path}`
    : `${baseImageUrl}${selectedEpisode.still_path}`;

  function onChangeSeason(event) {
    setSelectedSeason(event.target.value);
  }

  const formattedDate = new Date(
    selectedEpisode.air_date ?? serieDetails.first_air_date
  ).toLocaleDateString();

  const episodesList = new Array(serieDetails.number_of_seasons).fill("");

  return (
    <Container imgUrl={imgUrl}>
      <h1>Supernatural {seasonDetails.title && `- ${seasonDetails.title}`}</h1>
      <Details>
        <p>Lançamento: {formattedDate}</p>
        <SeasonSelect value={selectedSeason} onChange={onChangeSeason}>
          <option value="select" disabled>
            Selecione uma temporada
          </option>
          {episodesList.map((item, index) => {
            return (
              <option key={index} value={index + 1}>
                Temporada {index + 1}
              </option>
            );
          })}
        </SeasonSelect>
      </Details>
      <h2>{selectedEpisode.name}</h2>
      <p>{selectedEpisode.overview ?? serieDetails.overview}</p>
    </Container>
  );
}
