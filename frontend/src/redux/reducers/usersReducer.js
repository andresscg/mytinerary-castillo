const usersReducer = (
  state = { token: null, firstName: null, photoUrl: null, _id: null },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        firstName: action.payload.firstName,
        photoUrl: action.payload.photoUrl,
        _id: action.payload._id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      return {
        token: null,
        firstName: null,
        photoUrl: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default usersReducer;
