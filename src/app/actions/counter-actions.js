import actionsTypes from "./constants";

const increment = () => ({
  type: actionsTypes.INCREMENT
});

const decrement = () => ({
  type: actionsTypes.DECREMENT
});

// TODO create decrement and reset actions

export const incrementAction = () => {
  return dispatch => {
    dispatch(increment());
  };
};

export const decrementAction = () => {
  return dispatch => {
    dispatch(decrement());
  };
};

// TODO create decrementAction and resetAction action creators
