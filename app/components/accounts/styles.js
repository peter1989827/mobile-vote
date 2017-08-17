import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 15,
    marginTop: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 16,
    paddingRight: 16,
    width: width - 60,
  },
  formConatiner: {
    marginTop: 15,
  },
  headContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headLabel: {
    fontSize: 26,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  footerContainer: {
    marginTop: 16,
  },
});

export default styles;
