import { GasTypes } from "../../utilities/types";
import { useEffect } from "react";

type Props = {
  location: string;
  fuelType: GasTypes;
  setFuelType: (value: GasTypes) => void;
  setLocation: (value: string) => void;
};

export const Form = (props: Props) => {
  const handleFuelTypeChange = (event: any) => {
    props.setFuelType(event.target.value);
  };

  const handleLocationChange = (event: any) => {
    props.setLocation(event.target.value);
  };

  useEffect(() => {
    return () => {
      props.setLocation("");
    };
  }, []);

  return (
    <form className="inputs">
      <input
        id="location-input"
        placeholder="Enter your city"
        value={props.location}
        onChange={handleLocationChange}
      />
      <select
        id="fuel-type"
        name="fuel-type"
        value={props.fuelType}
        onChange={handleFuelTypeChange}
      >
        <option value="Regular">Regular fuel prices</option>
        <option value="Midgrade">Mid-grade fuel prices</option>
        <option value="Premium">Premium fuel prices</option>
        <option value="Diesel">Diesel fuel prices</option>
      </select>
    </form>
  );
};
