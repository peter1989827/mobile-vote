import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onSignUp } from '../../actions/auth';
import Register from '../../components/accounts/Register';

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    errors: state.auth.errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ onSignUp }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
