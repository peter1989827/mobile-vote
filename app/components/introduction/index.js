import React, { Component } from "react";

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Select, Option } from "react-native-chooser";
import { Ionicons } from "@expo/vector-icons";
import { ButtonGroup } from "react-native-elements";

import CustomIntro from "./CustomIntro";
import CampaignModal from "./CampaignModal";
import styles from "./styles";
import RightButton from "../RightButton";
import Picker from "../commons/Picker";

const { width } = Dimensions.get("window");

class Introduction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "",
      selectedIndex: 2,
      isVisible: false,
      isCampaign: false
    };

    this.onSelect = this.onSelect.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  static route = {
    navigationBar: {
      title: "Outvote",
      renderRight: () => <RightButton />
    }
  };

  onSelect(data) {
    this.setState({ selected: data });
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    if (selectedIndex === 0) {
      this.setState({ isCampaign: true });
    }
  }
  render() {
    const buttons = ["Yes", "Skip", "No"];
    const { selectedIndex, isVisible, isCampaign } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 16,
              marginBottom: 16
            }}
          >
            <Picker
              selectedValue={this.state.selected}
              onValueChange={language => this.setState({ selected: language })}
              mode="modal"
              style={{
                alignSelf: "stretch",
                color: "black"
              }}
            >
              <Picker.Item label="Please Select Candidate" value="" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Ruby" value="ruby" />
              <Picker.Item label="Python" value="python" />
              <Picker.Item label="Elm" value="elm" />
            </Picker>
          </View>

          <View
            style={{
              height: 50,
              backgroundColor: "#ccc",
              flexDirection: "row",
              padding: 16,
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>First Last</Text>
            <View style={{ position: "absolute", right: 15 }}>
              <Ionicons name="ios-search" size={32} />
            </View>
          </View>

          <View style={{ padding: 16 }}>
            <View style={styles.cardBox}>
              <View style={{ height: 150, backgroundColor: "#ccc" }} />
              <View style={{ padding: 16 }}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 16,
                    fontWeight: "600"
                  }}
                >
                  First Name
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="md-checkmark"
                    size={28}
                    style={{ fontWeight: "bold" }}
                  />
                  <Text style={{ fontWeight: "600", marginLeft: 16 }}>
                    Can Vote
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="ios-star"
                    size={28}
                    style={{ fontWeight: "bold" }}
                  />
                  <Text style={{ fontWeight: "600", marginLeft: 15 }}>
                    Likely Supporter
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="ios-star"
                    size={28}
                    style={{ fontWeight: "bold" }}
                  />
                  <Text style={{ fontWeight: "600", marginLeft: 15 }}>
                    Voter Connections
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: "center", marginBottom: -5 }}>
                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  containerStyle={{ width: width - 34, borderRadius: 0 }}
                />
              </View>
            </View>

            <View style={styles.customButton}>
              <TouchableOpacity
                onPress={() => this.setState({ isVisible: true })}
              >
                <Text
                  style={{ textDecorationLine: "underline", color: "#2D61A4" }}
                >
                  Send a custom into
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <CustomIntro
          isVisible={isVisible}
          onClose={() => this.setState({ isVisible: false, isCampaign: false })}
        />
        <CampaignModal
          isVisible={isCampaign}
          onClose={() => this.setState({ isVisible: false, isCampaign: false })}
        />
      </View>
    );
  }
}

export default Introduction;
