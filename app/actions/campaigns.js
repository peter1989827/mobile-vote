import axios from "axios";
import { getToken } from "../utils/auth";
import { types } from "../constants/campaigns";
import endpoint from "../config/endpoint";
import _ from "lodash";

export function fetchCampaigns() {
  return dispatch => {
    const { campaignsPath } = endpoint;

    dispatch({ type: types.FETCH_CAMPAIGNS_REQUEST });

    axios
      .get(campaignsPath)
      .then(({ data }) => {
        dispatch({ type: types.FETCH_CAMPAIGNS_SUCCESS, payload: data });
      })
      .catch(errors => {
        dispatch({ type: types.FETCH_CAMPAIGNS_FAILURE });
      });
  };
}

export function joinCampaign(id) {
  return dispatch => {
    const { joinCampaignPath } = endpoint;
    const path = _.replace(joinCampaignPath, ":id", id);
    dispatch({ type: types.ON_JOIN_CAMPAIGN_REQUEST });

    axios
      .post(path)
      .then(({ data }) => {
        alert("Join successful");
        dispatch({ type: types.ON_JOIN_CAMPAIGN_SUCCESS, payload: data });
      })
      .catch(errors => {
        dispatch({ type: types.ON_JOIN_CAMPAIGN_FAILURE });
        alert(errors.message);
      });
  };
}

export function getCampaign(id) {
  return dispatch => {
    const { candidateCampaignPath } = endpoint;
    const path = _.replace(candidateCampaignPath, ":id", id);
    dispatch({ type: types.ON_FETCH_CAMPAIGN_REQUEST });

    axios
      .get(path)
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: types.ON_FETCH_CAMPAIGN_SUCCESS, payload: data });
      })
      .catch(errors => {
        dispatch({ type: types.ON_FETCH_CAMPAIGN_FAILURE });
      });
  };
}

export function onUpdateSetting(id, params) {
  return dispatch => {
    const { updateSettingPath } = endpoint;
    const path = _.replace(updateSettingPath, ":id", id);

    dispatch({ type: types.ON_UPDATE_SETTING_REQUEST });

    axios
      .put(path, { settings: params })
      .then(({ data }) => {
        dispatch({ type: types.ON_UPDATE_SETTING_SUCCESS });
      })
      .catch(errors => {
        dispatch({ type: types.ON_UPDATE_SETTING_FAILURE });
      });
  };
}
