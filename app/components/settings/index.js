import React, { Component } from "react";

import { View, Text, Switch, ScrollView } from "react-native";
import styles from "./styles";
import RightButton from "../RightButton";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox, Button } from "react-native-elements";
import Picker from "../commons/Picker";

const options = [
  {
    label: "Mentioned your name when reaching out",
    value: "mention_name",
    isCheck: true
  },
  {
    label: "only reach out to approved connections(standard tier)",
    value: "only_approved_connections",
    isCheck: true
  },
  {
    label: "Reach out once to any connection without approve(power tier)",
    value: "any_connection",
    isCheck: true
  },
  {
    label: "send me a reminder prior to election day",
    value: "election_day_reminder",
    isCheck: true
  },
  {
    label: "contact me on election day",
    value: "election_day_contact",
    isCheck: true
  },
  {
    label: "send my connections one reminder prior to election day",
    value: "connections_election_reminder",
    isCheck: true
  }
];

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: {
        facebook: true,
        twitter: true,
        linkedin: true,
        instagram: true
      },
      settings: options,
      candidateSelected: ""
    };

    this.onToggleChange = this.onToggleChange.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    this.onUpdateSetting = this.onUpdateSetting.bind(this);
  }

  static route = {
    navigationBar: {
      title: "Outvote",
      renderRight: () => <RightButton />
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.candidateSelected === "" && prevProps.data.length === 0) {
      const candidateSelected = this.props.data[0].id;
      this.setState({ candidateSelected: candidateSelected });
    }
  }

  onToggleChange(field, bool) {
    const { toggle } = this.state;
    toggle[field] = bool;
    this.setState({ toggle });
  }

  onCheckBoxChange(field, bool) {
    const { settings } = this.state;
    const index = settings.findIndex(option => option.value === field);
    if (index > -1) {
      settings[index].isCheck = bool;
      this.setState({ settings });
    }
  }

  onUpdateSetting() {
    const { candidateSelected } = this.state;
    if (candidateSelected !== "") {
      this.props.actions.onUpdateSetting(
        candidateSelected,
        this.buildSettingParams()
      );
    }
  }

  buildSettingParams() {
    const { settings } = this.state;
    const params = {};
    settings.map(setting => {
      params[setting.value] = setting.isCheck;
    });
    return params;
  }

  render() {
    const { facebook, twitter, linkedin, instagram } = this.state.toggle;
    const { settings } = this.state;
    const { data, isFetching } = this.props;
    const checkboxElements = settings.map(option =>
      <CheckBox
        key={option.value}
        title={option.label}
        checked={option.isCheck}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          marginLeft: -10
        }}
        onPress={() => this.onCheckBoxChange(option.value, !option.isCheck)}
      />
    );
    const elements = data.map((item, index) =>
      <Picker.Item key={index} label={item.name} value={item.id} />
    );

    return (
      <View style={styles.container}>
        <View style={{ marginLeft: 16 }}>
          <Picker
            selectedValue={this.state.candidateSelected}
            onValueChange={value => this.setState({ candidateSelected: value })}
            mode="modal"
            style={{
              alignSelf: "stretch",
              color: "black"
            }}
          >
            {elements}
          </Picker>
        </View>
        <ScrollView>
          <View style={styles.items}>
            <Text style={styles.headLabel}>ID Verification</Text>

            <View style={styles.item}>
              <Text style={styles.itemLabel}>Phone</Text>
              <Text
                style={[styles.itemLabel, styles.itemLink, styles.itemValue]}
              >
                Send a Text
              </Text>
              <Ionicons name="ios-close-circle" size={32} color={"#CF2A28"} />
            </View>

            <View style={styles.item}>
              <Text style={styles.itemLabel}>Location</Text>
              <Text style={[styles.itemLabel, styles.itemValue]}>
                Boston, MA
              </Text>
              <Ionicons
                name="ios-checkmark-circle"
                size={32}
                color={"#009E11"}
              />
            </View>
          </View>

          <View style={styles.items}>
            <Text style={styles.headLabel}>My Network</Text>
            <Text style={styles.description}>
              Enabling network just means adding your contact from that network
              for possible introductions.
            </Text>
            <View style={styles.row}>
              <View style={styles.col}>
                <View style={{ width: 60 }}>
                  <Ionicons name="logo-facebook" size={52} />
                </View>
                <Switch
                  value={facebook}
                  style={styles.switch}
                  onValueChange={value =>
                    this.onToggleChange("facebook", value)}
                />
              </View>

              <View style={styles.col}>
                <View style={{ width: 60 }}>
                  <Ionicons name="logo-instagram" size={52} />
                </View>
                <Switch
                  value={instagram}
                  style={styles.switch}
                  onValueChange={value =>
                    this.onToggleChange("instagram", value)}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col}>
                <View style={{ width: 60 }}>
                  <Ionicons name="logo-twitter" size={52} />
                </View>
                <Switch
                  value={twitter}
                  style={styles.switch}
                  onValueChange={value => this.onToggleChange("twitter", value)}
                />
              </View>

              <View style={styles.col}>
                <View style={{ width: 60 }}>
                  <Ionicons name="logo-linkedin" size={52} />
                </View>
                <Switch
                  value={linkedin}
                  style={styles.switch}
                  onValueChange={value =>
                    this.onToggleChange("linkedin", value)}
                />
              </View>
            </View>
          </View>

          <View style={styles.items}>
            <Text style={styles.headLabel}>Network Settings</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginTop: 16,
                marginBottom: 16
              }}
            >
              Allow campaign to:
            </Text>

            <View style={styles.options}>
              {checkboxElements}
            </View>

            <Button
              title="Save"
              disabled={isFetching}
              loading={isFetching}
              onPress={this.onUpdateSetting}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Setting;
