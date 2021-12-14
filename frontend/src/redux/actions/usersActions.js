import axios from "axios";

const usersActions = {
  signUp: (newUser) => {
    return async (dispatch, getState) => {
      let response = await axios.post(
        "http://localhost:4000/api/users/signup",
        newUser
      );
      try {
        if (response.data.success) {
          dispatch({ type: "SIGN_IN", payload: response.data.response });
        }
        return response;
      } catch (err) {
        console.error(err);
      }
    };
  },
  signIn: (signUser) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.post(
          "http://localhost:4000/api/users/signin",
          signUser
        );
        if (response.data.success) {
          dispatch({ type: "SIGN_IN", payload: response.data.response });
        }
        return response;
      } catch (err) {
        console.error(err);
      }
    };
  },
  signOut: () => {
    return (dispatch, getState) => {
      dispatch({ type: "SIGN_OUT" });
    };
  },
  signInLocalStorage: (token) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.get(
          "http://localhost:4000/api/verifyToken",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        dispatch({
          type: "SIGN_IN",
          payload: {
            token,
            firstName: response.data.firstName,
            photoUrl: response.data.photoUrl,
            _id: response.data._id,
          },
        });
      } catch (err) {
        console.error(err);
      }
    };
  },
};

export default usersActions;
