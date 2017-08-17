const defaultEndpoint = {
  apiUrl: "https://connector-staging.herokuapp.com/api",
  signInPath: "/auth/sign_in",
  signUpPath: "/auth",
  validateToken: "/auth/validate_token",
  signOutPath: "/auth/sign_out",
  campaignsPath: "/candidate_campaigns",
  joinCampaignPath: "/candidate_campaigns/:id/join",
  updateSettingPath: "/candidate_campaigns/:id/settings",
  candidateCampaignPath: "/candidate_campaigns/:id"
};

export default defaultEndpoint;
