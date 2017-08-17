export default function createReducer(initialState, reducerMap) {
  return (state, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, { ...action }) : state || initialState;
  };
}
