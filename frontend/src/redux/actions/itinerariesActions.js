import axios from 'axios';

const itinerariesActions = {
  getItinerariesByCity: (id) => {
    return async(dispatch, getState) => {
      let response = await axios.get(`http://localhost:4000/api/itineraries/cities/${id}`)
      if(!response.data.success){
        throw new Error('Error connecting database')
      }
      dispatch({type:'GET_ITINERARIES_BY_CITY', payload: response.data.response})
    }
  }
}

export default itinerariesActions