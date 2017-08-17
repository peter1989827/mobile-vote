import createConstants from "../utils/createConstant";

const types = createConstants(
  "ON_UPDATE_SETTING_REQUEST",
  "ON_UPDATE_SETTING_SUCCESS",
  "ON_UPDATE_SETTING_FAILURE"
);

export { types };
