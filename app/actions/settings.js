import axios from "axios";
import { types } from "../constants/settings";
import endpoint from "../config/endpoint";
import _ from "lodash";

export function onUpdateSetting() {
  return dispatch => {
    const { updateSettingPath } = endpoint;

    dispatch({ type: types.FETCH_CAMPAIGNS_REQUEST });

    axios
      .get(campaignsPath)
      .then(({ data }) => {
        console.log(data);
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
