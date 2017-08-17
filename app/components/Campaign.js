import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import Divider from "./Divider";

const propTypes = {
  buttonTitle: PropTypes.string,
  divide: PropTypes.bool,
  description: PropTypes.bool,
  button: PropTypes.bool,
  onPress: PropTypes.func
};

const defaultProps = {
  onPress: () => {},
  button: true,
  data: {},
  title: true,
  description: true,
  buttonDisabled: false
};

const styles = {
  currencyContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15
  },
  item: {
    alignItems: "flex-start",
    marginLeft: 5
  },
  campaignContainer: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  },
  headLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    marginTop: 5
  },
  paragraph: {
    fontSize: 16
  }
};

class Campaign extends Component {
  daysLeft() {
    if (this.props.data) {
      const { finishes_at } = this.props.data;
      const today = moment();
      const finishedDate = moment(finishes_at);

      const dayLeft = finishedDate.diff(today, "days");

      return dayLeft > 0 ? dayLeft : 0;
    }
    return "0";
  }

  render() {
    const {
      title,
      buttonTitle,
      divide,
      description,
      button,
      data
    } = this.props;

    return (
      <View style={styles.campaignContainer}>
        {title && <Text style={styles.headLabel}>{data.name}</Text>}

        {description &&
          <Text style={styles.paragraph}>
            {data.description}
          </Text>}
        <View style={styles.currencyContainer}>
          <View style={[styles.item, { width: 110 }]}>
            <Text
              style={{
                color: "#41A5D8",
                fontSize: 22,
                textDecorationLine: "underline"
              }}
            >
              300K
            </Text>
            <Text>Introductions made</Text>
          </View>

          <View style={{ height: 50, width: 2, backgroundColor: "#000" }} />

          <View style={[styles.item, { width: 80 }]}>
            <Text
              style={{
                color: "#41A5D8",
                fontSize: 22,
                textDecorationLine: "underline"
              }}
            >
              30K
            </Text>
            <Text>Votes pledged</Text>
          </View>

          <View style={{ height: 50, width: 2, backgroundColor: "#000" }} />

          <View style={[styles.item, { width: 70 }]}>
            <Text
              style={{
                color: "#41A5D8",
                fontSize: 22,
                textDecorationLine: "underline"
              }}
            >
              $20K
            </Text>
            <Text>$ raised</Text>
          </View>
          <View style={{ height: 50, width: 2, backgroundColor: "#000" }} />

          <View style={[styles.item, { width: 40 }]}>
            <Text
              style={{
                color: "#41A5D8",
                fontSize: 22,
                textDecorationLine: "underline"
              }}
            >
              {this.daysLeft()}
            </Text>
            <Text>Days left</Text>
          </View>
        </View>
        {button &&
          <TouchableOpacity
            onPress={this.props.onPress}
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
              backgroundColor: this.props.buttonDisabled ? "#ccc" : "#fff"
            }}
          >
            <Text style={{ textAlign: "center" }}>
              {buttonTitle || "View Campaign"}
            </Text>
          </TouchableOpacity>}
        {divide && <Divider />}
      </View>
    );
  }
}

StyleSheet.create(styles);

Campaign.propTypes = propTypes;
Campaign.defaultProps = defaultProps;

export default Campaign;
