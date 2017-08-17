import React, { Component } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Clipboard
} from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const defaultProps = {
  isVisible: false
};

class CustomIntro extends Component {
  render() {
    const { isVisible, onClose } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        animationIn={"slideInLeft"}
        animationOut={"slideOutRight"}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={onClose}
            style={{
              position: "absolute",
              right: 20,
              top: 0,
              width: 50,
              alignItems: "flex-end"
            }}
          >
            <Ionicons name="ios-close-outline" size={32} />
          </TouchableOpacity>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Custom into
            </Text>

            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <Text style={{ fontWeight: "400" }}>
                {`Share your unique referral link with any of your friends and
                we'll know your friends heard about our campaign through you!`}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TextInput
                value={"simelinek here"}
                style={{
                  width: width - 100,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  height: 50,
                  paddingLeft: 10
                }}
              />
              <TouchableOpacity
                style={{ position: "absolute", right: 20, top: 10 }}
                onPress={() => Clipboard.setString("simelinek here")}
              >
                <Ionicons name="ios-copy-outline" size={32} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="ios-mail" size={32} style={{ padding: 15 }} />
            <Ionicons name="logo-facebook" size={32} style={{ padding: 15 }} />
            <Ionicons name="logo-twitter" size={32} style={{ padding: 15 }} />
            <Ionicons name="logo-instagram" size={32} style={{ padding: 15 }} />
          </View>
        </View>
      </Modal>
    );
  }
}

CustomIntro.propTypes = propTypes;
CustomIntro.defaultProps = defaultProps;

export default CustomIntro;
