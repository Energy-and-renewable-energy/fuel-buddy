import logo from "../../images/logo-single.png";
import "./StationCard.scss";
import { Favorite, GasStation, GasTypes } from "../../utilities/types";
import { Link } from "react-router-dom";
import { findPriceByType } from "../../utilities/functions";
import heart from "../../images/fav.svg";
import heartFilled from "../../images/fav-filled.svg";

interface Props extends GasStation {
  fuelType: GasTypes;
  favorites: Favorite[];
  addToFav: (value: Favorite) => void;
  removeFromFav: (value: string) => void;
}

export const StationCard = ({
  favorites,
  gasPrices,
  fuelType,
  cid,
  title,
  address,
  reviewsCount,
  totalScore,
  phone,
  addToFav,
  removeFromFav,
}: Props) => {
  const gasPrice = findPriceByType(gasPrices, fuelType);

  const isFavorited = favorites.some((fav) => fav.cid === cid);

  const handleFavorite = () => {
    if (!isFavorited) {
      const newItem = {
        title: title,
        address: address,
        gasPrices: gasPrices,
        cid: cid,
        reviewsCount: reviewsCount,
        totalScore: totalScore,
      };
      addToFav(newItem);
    } else {
      removeFromFav(cid);
    }
  };

  return (
    <div className="single-station-card card">
      <div>
        <Link className="link-name" to={`/details/${cid}`}>
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
        </Link>
        <div className="review">
          <p>
            <span>⭐️ {totalScore}</span>
            <span>({reviewsCount})</span>
          </p>
          <button className="heart-button" onClick={handleFavorite}>
            <img src={isFavorited ? heartFilled : heart} />
          </button>
        </div>
        <div>
          <p>{address}</p>
          <p>☎ {phone || "Not Available"}</p>
        </div>
      </div>
      <div className="gas-prices-section">
        <p className="gas-price">
          <span>{gasPrice.gasType}</span>
          <span>{gasPrice.priceTag}</span>
        </p>
      </div>
    </div>
  );
};
