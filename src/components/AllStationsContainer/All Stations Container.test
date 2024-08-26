import "./AllStationsContainer.scss";
import { GasPrice, GasStation, Favorite } from "../../utilities/types";
import { StationCard } from "../StationCard/StationCard";
import { Form } from "../Form/Form";
import { useState } from "react";
import { GasTypes } from "../../utilities/types";
import { sortAndFilterStations } from "../../utilities/functions";
import { LoadingAnimation } from "../LoadingAnimation/LoadingAnimation";
import { ErrorMessage } from "../ErrorMessag/ErrorMessage";

interface Props {
  allStations: GasStation[];
  isLoading: boolean;
  error: string;
  favorites: Favorite[];
  removeFromFav: (value: string) => void;
  addToFav: (value: Favorite) => void;
}

export const AllStationsContainer = ({
  allStations,
  isLoading,
  error,
  favorites,
  removeFromFav,
  addToFav,
}: Props) => {
  const [location, setLocation] = useState<string>("");
  const [fuelType, setFuelType] = useState<GasTypes>("Regular");

  const filtered = sortAndFilterStations(allStations, location, fuelType);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorMessage message={`Something went wrong: ${error}`} />;
  }

  return (
    <div className="all-station-container container">
      <h1>Search Gas Station in CO</h1>
      <Form
        location={location}
        fuelType={fuelType}
        setFuelType={setFuelType}
        setLocation={setLocation}
      />
      {!filtered.length && (
        <ErrorMessage message="There are no stations found in the selected area. Please change location or fuel type" />
      )}
      {filtered.map((station: GasStation) => {
        return (
          <StationCard
            key={station.cid}
            {...station}
            fuelType={fuelType}
            removeFromFav={removeFromFav}
            favorites={favorites}
            addToFav={addToFav}
          />
        );
      })}
    </div>
  );
};
