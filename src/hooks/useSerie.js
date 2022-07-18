import { useContext } from "react";
import { SerieContext } from "../contexts/SerieContext";

export function useSerie() {
  const context = useContext(SerieContext);
  return context;
}
