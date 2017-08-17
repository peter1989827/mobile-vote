import React, { Component } from "react";
import { TouchableOpacity, Platform } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string
};

const defaultProps = {
  onPress: () => {},
  iconName: "ios-notifications-outline"
};

export default class RightButton extends Component {
  render() {
    const { iconName, onPress, sigOut } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 50,
          alignItems: "center",
          marginTop: Platform.OS === "ios" ? 5 : 15
        }}
      >
        <Ionicons name={iconName} size={32} />
      </TouchableOpacity>
    );
  }
}

RightButton.propTypes = propTypes;
RightButton.defaultProps = defaultProps;
