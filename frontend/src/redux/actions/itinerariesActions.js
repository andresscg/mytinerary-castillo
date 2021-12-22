import axios from "axios";

const itinerariesActions = {
  getItinerariesByCity: (id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        `http://localhost:4000/api/itineraries/cities/${id}`
      );
      if (!response.data.success) {
        throw new Error("Error connecting database");
      }
      dispatch({
        type: "GET_ITINERARIES_BY_CITY",
        payload: response.data.response,
      });
    };
  },
  likeItinerary: (id, token) => {
    return async () => {
      try {
        let response = await axios.put(
          `http://localhost:4000/api/itinerary/like/${id}`,
          { withCredentials: true },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    };
  },
  getActivitiesItinerary: (id) => {
    return async () => {
      try {
        let response = await axios.get(
          `http://localhost:4000/api/activities/${id}`
        );
        if (response.data.success) {
          return response.data.response[0].activities;
        }
      } catch (err) {
        console.error(err);
      }
    };
  },
};

export default itinerariesActions;
