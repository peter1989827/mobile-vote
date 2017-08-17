import React, { Component } from "react";
import { StyleSheet, View, ScrollView, RefreshControl } from "react-native";
import Campaign from "../Campaign";
import { Ionicons } from "@expo/vector-icons";
import PropType from "prop-types";
import { onSignOut } from "../../actions/auth";
import RightButton from "../RightButton";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
};

const propTypes = {
  navigation: PropType.object.isRequired
};

class Home extends Component {
  constructor() {
    super();

    this.state = {};

    this.onViewCampaign = this.onViewCampaign.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    const { dispatch } = navigation;

    return {
      headerLeft: (
        <RightButton
          iconName="ios-log-out"
          onPress={() => dispatch(onSignOut())}
        />
      )
    };
  };

  componentWillMount = async () => {
    await this.props.actions.fetchCampaigns();
  };

  onViewCampaign(data) {
    const { navigate } = this.props.navigation;
    navigate("Candidate", { id: data.id });
  }

  onRefresh = () => {
    this.props.actions.fetchCampaigns();
  };

  render() {
    const { data, isFetching } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.onRefresh}
            />
          }
        >
          {data.map((item, index) =>
            <Campaign
              key={index}
              data={item}
              onPress={() => this.onViewCampaign(item)}
              divide={index < 9}
              button
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

StyleSheet.create(styles);

Home.propTypes = propTypes;

export default Home;
