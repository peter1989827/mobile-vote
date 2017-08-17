import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onUpdateSetting } from "../actions/campaigns";
import Setting from "../components/settings";

function mapStateToProps(state) {
  return {
    isFetching: state.campaigns.isFetching,
    data: state.campaigns.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ onUpdateSetting }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
