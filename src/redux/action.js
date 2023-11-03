import axios from "axios";

export const fetchLocation = (postalCode) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_LOCATION_REQUEST" });

    try {
      const response = await axios.get(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      const location = response.data;
      dispatch({ type: "FETCH_LOCATION_SUCCESS", payload: location });
    } catch (error) {
      dispatch({
        type: "FETCH_LOCATION_FAILURE",
        payload: "Error fetching location data",
      });
    }
  };
};

export const clearLocation = () => {
  return { type: "CLEAR_LOCATION" };
};
