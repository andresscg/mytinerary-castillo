const itinerariesReducer = (state = {itinerariesByCity:[]}, action) => {
  switch (action.type) {
    case 'GET_ITINERARIES_BY_CITY':
      return{
        ...state,
        itinerariesByCity: action.payload
      }
    default:
      return state;
  }
}

export default itinerariesReducer