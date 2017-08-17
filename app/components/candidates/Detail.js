import React, { Component } from "react";

import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { Video } from "expo";
import _ from "lodash";
import Accordion from "react-native-collapsible/Accordion";
import Campaign from "../Campaign";
import RightButton from "../RightButton";

const { width } = Dimensions.get("window");

const SECTIONS = [
  {
    title: "Campaign",
    content: "Lorem ipsum..."
  },
  {
    title: "Updates",
    content: "Lorem ipsum..."
  },

  {
    title: "FAQ",
    content: "Lorem ipsum..."
  },
  {
    title: "Comments",
    content: "Lorem ipsum..."
  }
];

const styles = {
  container: {
    flex: 1,
    paddingBottom: 15,
    backgroundColor: "#fff"
  },
  videoContainer: {
    width: width
  },
  collapseHeader: {
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16
  },
  headerText: {
    fontSize: 16
  }
};

class Detail extends Component {
  static state = {
    index: 0
  };

  static route = {
    navigationBar: {
      title: "Outvote",
      renderRight: () => <RightButton />
    }
  };

  async componentWillMount() {
    const { id } = this.props.navigation.state.params;
    await this.props.actions.getCampaign(id);
  }

  onJoinCampaign = id => {
    this.props.actions.joinCampaign(id);
  };

  renderHeader(section, index, isActive) {
    return (
      <View
        style={[
          styles.collapseHeader,
          isActive ? { backgroundColor: "#ccc" } : {}
        ]}
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  renderContent() {
    return (
      <View
        style={{
          height: 150,
          justifyContent: "center",
          padding: 16,
          alignItems: "center"
        }}
      >
        <Text>section</Text>
      </View>
    );
  }

  render() {
    const { id } = this.props.navigation.state.params;
    const data = _.filter(this.props.data, ["id", id])[0];
    console.log(data);
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.videoContainer}>
            <Video
              ref={r => (this.vid = r)}
              source={{
                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
              }}
              rate={1.0}
              volume={1.0}
              muted={false}
              resizeMode="cover"
              repeat
              style={{ width: width, height: 200 }}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Campaign
              data={data}
              buttonTitle="Join the Campaign"
              button
              buttonDisabled={data.current_user && data.current_user.joined}
              onPress={() => {
                if (data.current_user && !data.current_user.joined) {
                  this.onJoinCampaign(data.id);
                }
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Accordion
              onChange={index => this.setState({ index })}
              underlayColor={"transparent"}
              initiallyActiveSection={0}
              sections={SECTIONS}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
            />
          </View>
          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    );
  }
}

StyleSheet.create(styles);

export default Detail;
