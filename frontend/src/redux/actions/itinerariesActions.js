import axios from "axios";

const itinerariesActions = {
  getItinerariesByCity: (id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        `https://mytinerary-castillo.herokuapp.com/api/itineraries/cities/${id}`
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
          `https://mytinerary-castillo.herokuapp.com/api/itinerary/like/${id}`,
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
  addComment: (id, comment, token) => {
    return async () => {
      try{
        let response = await axios.put(`https://mytinerary-castillo.herokuapp.com/api/itinerary/comments/${id}`, {comment, type:"addComment"}, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        return response.data.response;
      }catch(err){
        console.log(err);
      }
    }
  },
  editComment: (id, comment, token) => {
    return async () => {
      try{
        let response = await axios.put(`https://mytinerary-castillo.herokuapp.com/api/itinerary/comments/${id}`, {comment, type:"editComment"}, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        if(response.data.success) return {success:true, res:response.data.response}
      }catch(err) {
        console.log(err);
      }
    }
  },
  deleteComment: (id, commentId, token) => {
    return async () => {
      let response;
      try{
        response = await axios.put(`https://mytinerary-castillo.herokuapp.com/api/itinerary/comments/${id}`, {commentId, type:"deleteComment"},{
          headers: {
            Authorization: "Bearer " + token
          }
        })
        if(response.data.success){
          return response.data
        }
      }catch(err) {
        console.log(err)
      }
    }
  },
  getActivitiesItinerary: (id) => {
    return async () => {
      try {
        let response = await axios.get(
          `https://mytinerary-castillo.herokuapp.com/api/activities/${id}`
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
