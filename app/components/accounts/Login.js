import React, { Component } from "react";

import { Text, View, TouchableOpacity, Alert } from "react-native";
import PropTypes from "prop-types";
import { Button } from "react-native-elements";
import _ from "lodash";
import validateEmail from "../../utils/validateEmail";
import styles from "./styles";
import Form from "./Form";

const propTypes = {
  login: PropTypes.bool,
  title: PropTypes.string
};

const defaultProps = {
  login: false,
  title: "Sign Up"
};

class Login extends Component {
  state = {
    form: {
      email: "",
      password: ""
    }
  };

  onFormChange = (field, value) => {
    const { form } = this.state;
    form[field] = value;
    this.setState({ form });
  };

  handleButtonPress = () => {
    const { form } = this.state;

    if (!_.isEmpty(form.email) && !_.isEmpty(form.password)) {
      this.props.actions.onSignIn(form);
    } else {
      Alert.alert(null, "Email or Password can't be blank.", [
        {
          text: "OK",
          onPress: () => {
            if (_.isEmpty(form.email)) {
              this.formRef.emailField.focus();
            } else if (_.isEmpty(form.password)) {
              this.formRef.passwordField.focus();
            }
          }
        }
      ]);
    }
  };

  onButtonPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Register");
  };

  render() {
    const { isFetching } = this.props;
    const { form } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Text style={styles.headLabel}>Outvote</Text>
        </View>
        <View style={styles.formConatiner}>
          <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 16 }}>
            Login
          </Text>

          <Form
            onFormChange={this.onFormChange}
            form={form}
            ref={ref => (this.formRef = ref)}
          />

          <View style={{ marginTop: 16 }}>
            <Button
              onPress={this.handleButtonPress}
              title="Login"
              backgroundColor={"#4154B2"}
              disabled={isFetching}
              loading={isFetching}
            />
          </View>

          <View style={[styles.footerContainer, styles.center]}>
            <Text style={{ paddingBottom: 16, paddingTop: 16 }}>
              {"Don't have an account?"}
            </Text>

            <TouchableOpacity onPress={this.onButtonPress}>
              <Text style={{ textDecorationLine: "underline" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
