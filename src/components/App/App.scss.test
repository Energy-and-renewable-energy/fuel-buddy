import "./App.scss";
import logo from "../../images/logo-new.svg";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getGasStations } from "../../apiCalls/gasStations";
import { AllStationsContainer } from "../AllStationsContainer/AllStationsContainer";
import { Favorite, GasStation } from "../../utilities/types";
import { DetailsPage } from "../DetailsPage/DetailsPage";
import { Page404 } from "../Page404/Page404";
import { Favorites } from "../Favorites/Favorites";
import { NavLink } from "react-router-dom";
import { cleanStationsWithGasPrice } from "../../utilities/functions";

function App() {
  const [allStations, setAllStations] = useState<GasStation[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addToFav = (newItem: Favorite) => {
    setFavorites([...favorites, newItem]);
  };

  const removeFromFav = (id: string) => {
    setFavorites(favorites.filter((item) => item.cid !== id));
  };

  useEffect(() => {
    getGasStations()
      .then((data) => {
        setAllStations(cleanStationsWithGasPrice(data));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const setClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : undefined;

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Fuel Buddy Logo" />
        <nav>
          <NavLink to="/favorites" className={setClassName}>
            Favorites
          </NavLink>
          <NavLink to="/" className={setClassName}>
            All Stations
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <AllStationsContainer
              allStations={allStations}
              removeFromFav={removeFromFav}
              favorites={favorites}
              addToFav={addToFav}
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <DetailsPage
              allStations={allStations}
              favorites={favorites}
              addToFav={addToFav}
              removeFromFav={removeFromFav}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} removeFromFav={removeFromFav} />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
