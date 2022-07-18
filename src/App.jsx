import { CurrentBanner } from "./components/CurrentBanner";
import { EpisodesList } from "./components/EpisodesList";
import { SerieContextProvider } from "./contexts/SerieContext";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <SerieContextProvider>
      <GlobalStyles />
      <CurrentBanner />
      <EpisodesList />
    </SerieContextProvider>
  );
}

export default App;
