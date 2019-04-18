import * as types from "./action-types";

export function receiveSample(json) {
  return { type: types.RECEIVE_SAMPLE, payload: json.sample };
}

export function fetchSample() {
  return dispatch => {
    dispatch(receiveSample({ payload: "Sample test" }));
  };
}
