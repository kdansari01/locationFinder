import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearLocation, fetchLocation } from "../redux/action";

const PostalCodeInputComponent = () => {
  const [postalCode, setPostalCode] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLocation(postalCode));
  };

  const handleClear = () => {
    dispatch(clearLocation());
    setPostalCode("");
  };

  return (
    <div className="mt-5">
      <div>
        <h2 className="text-light">Location Finder</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostalCodeInputComponent;
