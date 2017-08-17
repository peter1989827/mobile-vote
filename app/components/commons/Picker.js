import React, { Component } from "react";
import ReactNative, {
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActionSheetIOS,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

export default class Picker extends Component {
  static Item = ReactNative.Picker.Item;

  handlePress() {
    const { children, onValueChange } = this.props;
    const labels = children.map(child => child.props.label);
    const values = children.map(child => child.props.value);
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [...labels, "Cancel"],
        cancelButtonIndex: labels.length
      },
      index => {
        if (index < labels.length) {
          onValueChange(values[index]);
        }
      }
    );
  }

  render() {
    const { children, style } = this.props;
    const labels = children.map(child => child.props.label);
    const values = children.map(child => child.props.value);
    const flatStyle = style ? StyleSheet.flatten(style) : {};

    if (Platform.OS === "ios") {
      const { selectedValue } = this.props;
      const flatStyle = style ? StyleSheet.flatten(style) : {};
      const textStyle = {
        fontSize: 12
      };
      return (
        <TouchableOpacity
          onPress={::this.handlePress}
          style={{
            alignSelf: "stretch",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#ccc",
            borderWidth: 1,
            paddingHorizontal: 6,
            height: 35,
            width: width - 30
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                {
                  flex: 1
                },
                textStyle,
                style
              ]}
            >
              {labels[values.indexOf(selectedValue)]}
            </Text>
            <Text style={[textStyle, style, { color: "black" }]}>▼</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return <ReactNative.Picker {...this.props} />;
    }
  }
}
