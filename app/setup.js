import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./createStore";
import { verifyAuth } from "./actions/auth";
import AppWithNavigationState from "./AppNavigator";
import { AppLoading } from "expo";

export default class Setup extends Component {
  state = {
    isReady: false
  };

  componentWillMount() {
    store.dispatch(verifyAuth());
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 500);
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
