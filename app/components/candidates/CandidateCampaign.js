import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Constants } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import RightButton from "../RightButton";
import Campaign from "../Campaign";

const { width } = Dimensions.get("window");

const colWidth = width / 2 - 20;
const styles = {
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff"
  },
  row: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 25
  },
  headLabel: {
    fontSize: 16,
    fontWeight: "600"
  },
  numberGroup: {
    flexDirection: "row"
  },
  col: {
    width: colWidth,
    marginTop: 25
  }
};

const propTypes = {};

class CandidateCampaign extends Component {
  static route = {
    navigationBar: {
      title: "Outvote",
      renderRight: () => <RightButton />
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Campaign
            data={{ name: "Candidate Name" }}
            divide
            buttonTitle="Go to Campaign"
            button={false}
          />
          <View style={styles.row}>
            <Text style={styles.headLabel}>Introductions</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.col}>
                <View style={styles.numberGroup}>
                  <Text style={{ fontSize: 34, fontWeight: "600" }}>55</Text>
                  <Ionicons
                    name="ios-information-circle"
                    size={22}
                    style={{ position: "absolute", right: 20 }}
                  />
                </View>
                <Text>Introductions made</Text>
              </View>

              <View style={styles.col}>
                <View style={styles.numberGroup}>
                  <Text style={{ fontSize: 34, fontWeight: "600" }}>1020</Text>
                  <Ionicons
                    name="ios-information-circle"
                    size={22}
                    style={{ position: "absolute", right: 20 }}
                  />
                </View>
                <Text>Introductions inspired</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                const { navigate } = this.props.navigation;
                navigate("Introduction");
              }}
              style={{
                borderColor: "#ccc",
                borderWidth: 1,
                padding: 16,
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 1
                },
                shadowRadius: 1,
                shadowOpacity: 0.4,
                marginTop: 20
              }}
            >
              <Text style={{ textAlign: "center" }}>
                Make an Introduction
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={styles.headLabel}>Introductions</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.col}>
                <View style={styles.numberGroup}>
                  <Text style={{ fontSize: 34, fontWeight: "600" }}>55</Text>
                  <Ionicons
                    name="ios-information-circle"
                    size={22}
                    style={{ position: "absolute", right: 20 }}
                  />
                </View>
                <Text>Introductions made</Text>
              </View>

              <View style={styles.col}>
                <View style={styles.numberGroup}>
                  <Text style={{ fontSize: 34, fontWeight: "600" }}>1020</Text>
                  <Ionicons
                    name="ios-information-circle"
                    size={22}
                    style={{ position: "absolute", right: 20 }}
                  />
                </View>
                <Text>Introductions inspired</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                const { navigate } = this.props.navigation;
                navigate("Pledge");
              }}
              style={{
                borderColor: "#ccc",
                borderWidth: 1,
                padding: 16,
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 1
                },
                shadowRadius: 1,
                shadowOpacity: 0.4,
                marginTop: 20
              }}
            >
              <Text style={{ textAlign: "center" }}>
                Make a Pledge
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

StyleSheet.create(styles);
CandidateCampaign.propTypes = propTypes;

export default CandidateCampaign;
