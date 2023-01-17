import "./Favorites.scss";
import { Favorite } from "../../utilities/types";
import { FavCard } from "../FavCard/FavCard";
import { ErrorMessage } from "../ErrorMessag/ErrorMessage";

interface Props {
  removeFromFav: (value: string) => void;
  favorites: Favorite[];
}

export const Favorites = (props: Props) => {
  return (
    <div className="fav-container container">
      <h1>Favorites</h1>
      {!props.favorites.length ? (
        <ErrorMessage
          message="You have no favorite gas stations yet!"
          hasBackButton
        />
      ) : (
        props.favorites.map((fav: Favorite) => {
          return (
            <FavCard
              key={fav.cid}
              {...fav}
              removeFromFav={props.removeFromFav}
            />
          );
        })
      )}
    </div>
  );
};
