import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
const LocationInfoComponent = () => {
  const location = useSelector((state) => state.location.location);
  console.log(location);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {location && (
        <div className="locatioCard">
          <h2>Location Information</h2>
          <p>Country: {location?.country}</p>
          <p>State: {location.places[0].state}</p>
          <p>Place Name: {location.places[0]["place name"]}</p>
        </div>
      )}
    </div>
  );
};

export default LocationInfoComponent;
