import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onSignIn } from '../../actions/auth';
import Login from '../../components/accounts/Login';

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ onSignIn }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
