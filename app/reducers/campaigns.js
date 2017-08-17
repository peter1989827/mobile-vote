import createReducer from "../utils/createReducer";
import { types } from "../constants/campaigns";

const initialState = {
  isFetching: false,
  data: []
};

export default createReducer(initialState, {
  [types.FETCH_CAMPAIGNS_REQUEST]: state => {
    return {
      ...state,
      isFetching: true
    };
  },
  [types.FETCH_CAMPAIGNS_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      isFetching: false,
      data: payload
    };
  },
  [types.FETCH_CAMPAIGNS_FAILURE]: state => {
    return {
      ...state,
      isFetching: false,
      data: []
    };
  },
  [types.ON_JOIN_CAMPAIGN_REQUEST]: state => {
    return {
      ...state,
      isFetching: true
    };
  },
  [types.ON_JOIN_CAMPAIGN_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      isFetching: false
    };
  },
  [types.ON_JOIN_CAMPAIGN_FAILURE]: state => {
    return {
      ...state,
      isFetching: false
    };
  },
  [types.ON_FETCH_CAMPAIGN_REQUEST]: state => {
    return {
      ...state,
      isFetching: true
    };
  },
  [types.ON_FETCH_CAMPAIGN_SUCCESS]: (state, { payload }) => {
    let { data } = state;
    const index = data.findIndex(item => item.id === payload.id);
    if (index > -1) {
      data[index] = payload;
    }
    return {
      ...state,
      data: data,
      isFetching: false
    };
  },
  [types.ON_FETCH_CAMPAIGN_FAILURE]: state => {
    return {
      ...state,
      isFetching: false
    };
  },
  [types.ON_UPDATE_SETTING_REQUEST]: state => {
    return {
      ...state,
      isFetching: true
    };
  },
  [types.ON_UPDATE_SETTING_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      isFetching: false
    };
  },
  [types.ON_UPDATE_SETTING_FAILURE]: state => {
    return {
      ...state,
      isFetching: false
    };
  }
});
