import createReducer from "../utils/createReducer";
import { types } from "../constants/auth";

const initialState = {
  isFetching: false,
  isLogin: false,
  user: {},
  errors: {}
};

export default createReducer(initialState, {
  [types.ON_LOGIN_REQUEST]: (state, { payload }) => ({
    ...state,
    isFetching: true
  }),
  [types.ON_LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    isLogin: true,
    user: payload
  }),
  [types.ON_LOGIN_FAILURE]: state => ({
    ...state,
    isFetching: false
  }),
  [types.ON_SIGN_UP_REQUEST]: (state, { payload }) => ({
    ...state,
    isFetching: true
  }),
  [types.ON_SIGN_UP_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    isLogin: true,
    user: payload
  }),
  [types.ON_SIGN_UP_FAILURE]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    errors: payload
  }),
  [types.ON_SIGN_OUT_SUCCESS]: state => ({
    ...state,
    isFetching: false,
    isLogin: false
  })
});
