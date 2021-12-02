import axios from 'axios';

const citiesActions = {
  getCities: () => {
    return async (dispatch, getState) => {
      let response = await axios.get('http://localhost:4000/api/cities');
      if(!response.data.success) {
        throw new Error('Error connecting database');
      }
      dispatch({type:'GET_ALL_CITIES', payload: response.data.response});
    }
  },
  filterCities: (e) => {
    return (dispatch, getState) => {
      dispatch({type:'FILTER_CITIES', payload:e});
    }
  },
  getOneCity: (id) => {
    return (dispatch, getState) => {
      dispatch({type:'GET_ONE_CITY', payload:id});
    }
  }
}

export default citiesActions