import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCampaigns } from "../actions/campaigns";
import Home from "../components/candidates";

function mapStateToProps(state) {
  return {
    data: state.campaigns.data,
    isFetching: state.campaigns.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchCampaigns }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
