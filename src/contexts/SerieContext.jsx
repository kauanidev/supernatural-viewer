import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SerieContext = createContext({});

export function SerieContextProvider({ children }) {
  const [serieDetails, setSerieDetails] = useState({});
  const [seasonDetails, setSeasonDetails] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("select");
  const [selectedEpisode, setSelectedEpisode] = useState({});

  const initialURL =
    "https://api.allorigins.win/raw?url=https://api.themoviedb.org/3/tv/1622-supernatural";
  const params = {
    api_key: import.meta.env.VITE_API_KEY,
    language: "pt-BR",
  };

  async function getInitialSerieDetails() {
    const response = await axios.get(initialURL, { params });

    setSerieDetails(response.data);
  }

  async function getEpisodesBySeason() {
    const response = await axios.get(`${initialURL}/season/${selectedSeason}`, {
      params,
    });

    setSeasonDetails({
      title: response.data.name,
      air_date: response.data.air_date,
    });
    setEpisodes(response.data.episodes);
    setSelectedEpisode(response.data.episodes[0]);
  }

  useEffect(() => {
    getInitialSerieDetails();
  }, []);

  useEffect(() => {
    if (selectedSeason !== "select") {
      getEpisodesBySeason();
    }
  }, [selectedSeason]);

  return (
    <SerieContext.Provider
      value={{
        episodes,
        selectedSeason,
        setSelectedSeason,
        selectedEpisode,
        setSelectedEpisode,
        seasonDetails,
        serieDetails,
      }}
    >
      {children}
    </SerieContext.Provider>
  );
}
