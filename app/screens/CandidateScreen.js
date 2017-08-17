import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Detail from "../components/candidates/Detail";
import { joinCampaign, getCampaign } from "../actions/campaigns";

function mapStateToProps(state) {
  return {
    isFetching: state.campaigns.isFetching,
    data: state.campaigns.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ joinCampaign, getCampaign }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
