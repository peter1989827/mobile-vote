import React, { Component } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  Dimensions
} from "react-native";
import styles from "./styles";
import RightButton from "../RightButton";
import { Select, Option } from "react-native-chooser";
import Picker from "../commons/Picker";

const { width } = Dimensions.get("window");

class Setting extends Component {
  constructor() {
    super();

    this.state = {
      selected: "",
      myPledge: true
    };
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

  render() {
    const { myPledge } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center"
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

          <View style={{ padding: 16 }}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}
            >
              Pledge fundraising goal: $100k
            </Text>
            <Text style={{ fontSize: 16 }}>
              My pitch for why you should pledge
            </Text>
          </View>

          <View style={{ marginTop: 15, padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>My Pledge</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center"
              }}
            >
              <Switch
                value={myPledge}
                onValueChange={value => this.setState({ myPledge: value })}
              />

              <Text style={{ marginLeft: 15 }}>Pledge My Vote</Text>
            </View>
            <Text style={{ marginTop: 15, marginBottom: 15 }}>
              (can only pledge vote to ppl in your district)
            </Text>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              $0 Pledged Donation
            </Text>

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
                Pledge Donation
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Setting;
