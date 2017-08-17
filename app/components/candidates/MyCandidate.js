import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Constants } from "expo";
import PropTypes from "prop-types";
import RightButton from "../RightButton";
import Campaign from "../Campaign";

const styles = {
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff"
  },
  row: {},
  headLabel: {
    fontSize: 16,
    fontWeight: "600"
  }
};

const propTypes = {};

class MyCandidate extends Component {
  static route = {
    navigationBar: {
      title: "Outvote",
      renderRight: () => <RightButton />
    }
  };

  constructor() {
    super();

    this.state = {};

    this.onGoToCampaign = this.onGoToCampaign.bind(this);
  }

  onGoToCampaign() {
    const { navigate } = this.props.navigation;
    navigate("CandidateCampaign");
  }

  render() {
    return (
      <View style={styles.container}>
        <Campaign
          data={{ name: "Candidate Name" }}
          divide
          buttonTitle="Go to Campaign"
          onPress={this.onGoToCampaign}
        />
      </View>
    );
  }
}

StyleSheet.create(styles);

MyCandidate.propTypes = propTypes;

export default MyCandidate;
