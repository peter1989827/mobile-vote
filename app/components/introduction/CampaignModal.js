import React, { Component } from "react";

import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import PropTypes from "prop-types";
import styles from "./styles";

const { width } = Dimensions.get("window");

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const defaultProps = {
  isVisible: false
};

class CampaignModal extends Component {
  constructor(props) {
    super(props);

    this.state = { check: false };
  }
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
              {"No worries, we won't contact them"}
            </Text>

            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <Text style={{ fontWeight: "400" }}>
                {`Are you sure Facebook First Last isn't a potential supporter of
                campaign? If not, please reconsider reaching out!`}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  borderColor: "#ccc",
                  borderWidth: 1,
                  padding: 16,
                  width: width - 150,
                  shadowColor: "#000000",
                  shadowOffset: {
                    width: 0,
                    height: 1
                  },
                  shadowRadius: 1,
                  shadowOpacity: 0.4,
                  marginTop: 16
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  {"Yes I'm Sure"}
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: "#2D61A4",
                  textDecorationLine: "underline",
                  marginTop: 15
                }}
              >
                {"Okay, I'll reconsider reaching out"}
              </Text>

              <CheckBox
                title={"Don't show this message again"}
                checked={this.state.check}
                containerStyle={{
                  backgroundColor: "transparent",
                  borderWidth: 0,
                  marginLeft: -10
                }}
                onPress={() => this.setState({ check: !this.state.check })}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

CampaignModal.propTypes = propTypes;
CampaignModal.defaultProps = defaultProps;

export default CampaignModal;
