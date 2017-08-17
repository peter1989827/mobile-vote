import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
// Tab-Navigators
import Home from "./Home";
import MyCandidate from "./MyCandidateScreen";
import SettingScreen from "./SettingScreen";
import PledgeScreen from "./PledgeScreen";
import Introduction from "./Introduction";
import CandidateCampaignScreen from "./CandidateCampaignScreen";
import { Ionicons } from "@expo/vector-icons";
import CandidateScreen from "./CandidateScreen";
import RightButton from "../components/RightButton";

const Candidates = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: "Outvote", headerRight: <RightButton /> }
  },
  Candidate: {
    screen: CandidateScreen,
    navigationOptions: { title: "Outvote", headerRight: <RightButton /> }
  }
});

const CandidateCampaign = StackNavigator({
  MyCandidate: {
    screen: MyCandidate,
    navigationOptions: { title: "Candidate", headerRight: <RightButton /> }
  },
  CandidateCampaign: {
    screen: CandidateCampaignScreen,
    navigationOptions: {
      title: "Candidate Campaign",
      headerRight: <RightButton />
    }
  }
});

const routeConfiguration = {
  Home: {
    screen: Candidates,
    navigationOptions: {
      headerMode: "none",
      header: null,
      title: "Outvote",
      headerLeft: null,
      tabBarIcon: ({ focused }) =>
        <Ionicons
          name={focused ? "ios-people" : "ios-people-outline"}
          size={32}
          color={"#000"}
        />
    }
  },
  MyCandidate: {
    screen: CandidateCampaign,
    navigationOptions: {
      headerMode: "none",
      header: null,
      title: "Candidate",
      headerLeft: null,
      tabBarIcon: ({ focused }) =>
        <Ionicons
          name={focused ? "ios-megaphone" : "ios-megaphone-outline"}
          size={32}
          color={"#000"}
        />
    }
  },
  Introduction: {
    screen: Introduction,
    navigationOptions: {
      headerRight: <RightButton />,
      tabBarOptions: {
        showLabel: false
      },
      title: "Introduction",
      headerLeft: null,
      tabBarIcon: ({ focused }) =>
        <Ionicons
          name={focused ? "ios-aperture" : "ios-aperture-outline"}
          size={56}
          color={"#000"}
        />
    }
  },
  Pledge: {
    screen: PledgeScreen,
    navigationOptions: {
      headerRight: <RightButton />,
      title: "Outvote",
      headerLeft: null,
      tabBarIcon: ({ focused }) =>
        <Ionicons
          name={focused ? "ios-cash" : "ios-cash-outline"}
          size={32}
          color={"#000"}
        />
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      headerRight: <RightButton />,
      title: "Setting",
      headerLeft: null,
      tabBarIcon: ({ focused }) =>
        <Ionicons
          name={focused ? "ios-settings" : "ios-settings-outline"}
          size={32}
          color={"#000"}
        />
    }
  }
};

const tabBarConfiguration = {
  tabBarOptions: {
    activeTintColor: "white",
    inactiveBackgroundColor: "white",
    showLabel: false,
    activeBackgroundColor: "white",
    style: {
      height: 62,
      backgroundColor: "#fff",
      borderTopWidth: 1,
      borderTopColor: "#ccc"
    },
    showIcon: true,
    iconStyle: {
      width: 100,
      height: 55,
      paddingBottom: 10
    }
  },
  initialRouteName: "Home",
  tabBarPosition: "bottom"
};

const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration);

export default TabBar;
