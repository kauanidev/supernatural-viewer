import { useSerie } from "../../hooks/useSerie";
import { Episode } from "../Episode";
import { Arrow, Container } from "./styles";

export function EpisodesList() {
  const { episodes } = useSerie();

  return (
    <Container>
      {episodes.length > 0 ? (
        <>
          <Arrow>v</Arrow>
          {episodes.map((item) => {
            return <Episode key={item.id} episode={item} />;
          })}
        </>
      ) : (
        <h2>
          Bem vindo(a) fã de Supernatural! <br /> Selecione uma temporada para
          ver os detalhes
        </h2>
      )}
    </Container>
  );
}
