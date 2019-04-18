import types from "actions/actions-types";

const initialState = {
  test: "Test"
};

export default function sample(state = initialState, action) {
  const { type, payload } = action;

  let newState;

  switch (type) {
    case `${types.FETCH_SAMPLE}`:
      return payload;
    case `${types.RECEIVE_SAMPLE}`:
      newState = payload;
      return newState;
    default:
      return state;
  }
}
