import actionsTypes from "./constants";
const ALLOWED_PASSWORD = "1234";

const logIn = user => ({
  type: actionsTypes.LOG_IN,
  user
});

// TODO create logout action

const badUser = () => ({
  type: actionsTypes.BAD_USER
});

const badPassword = () => ({
  type: actionsTypes.BAD_PASSWORD
});

export const logInAction = (user, password) => {
  return dispatch => {
    // TODO dispatch badUser() action if user is missing
    // TODO dispatch badPassword() action if ALLOWED_PASSWORD !== password
    // TODO dispatch logIn(user)
    if (!user) {
      dispatch(badUser());
    } else if (ALLOWED_PASSWORD !== password) {
      dispatch(badPassword());
    } else {
      dispatch(logIn(user));
    }
  };
};

// TODO create logout action creator
