import { Alert } from "react-native";
import axios from "axios";
import { setHeader, getToken, clearToken } from "../utils/auth";
import { types } from "../constants/auth";
import endpoint from "../config/endpoint";
import _ from "lodash";

export function verifyAuth() {
  return (dispatch, getState) => {
    const { apiUrl, validateToken } = endpoint;

    getToken().then(token => {
      if (token !== null) {
        axios
          .get(validateToken)
          .then(({ data, headers }) => {
            const tokens = {
              "access-token":
                headers["access_token"] || headers["access-token"],
              client: headers.client,
              uid: headers.uid
            };
            setHeader(tokens);

            dispatch({ type: types.ON_LOGIN_SUCCESS, payload: data });
            dispatch({ type: "Navigation/NAVIGATE", routeName: "Home" });
          })
          .catch(error => {
            if (error.response && error.response.status === 401) {
              Alert.alert(
                "Unauthorize 401",
                _.toString(error.response.data.errors),
                [
                  {
                    text: "OK",
                    onPress: () => {
                      clearToken();
                    }
                  }
                ]
              );
            }
          });
      }
    });
  };
}

export function onSignIn(creds) {
  return (dispatch, getState) => {
    const { apiUrl, signInPath } = endpoint;
    dispatch({ type: types.ON_LOGIN_REQUEST });

    axios
      .post(`${apiUrl}${signInPath}`, creds, {
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        }
      })
      .then(({ data, headers }) => {
        const tokens = {
          "access-token": headers["access_token"],
          client: headers.client,
          uid: headers.uid
        };
        setHeader(tokens);

        dispatch({ type: types.ON_LOGIN_SUCCESS, payload: data });
        dispatch({ type: "Navigation/NAVIGATE", routeName: "Home" });
      })
      .catch(error => {
        const { data } = error.response;
        Alert.alert("", _.toString(data.errors), [{ text: "OK" }]);
        dispatch({ type: types.ON_LOGIN_FAILURE });
      });
  };
}

export function onSignUp(creds) {
  return (dispatch, getState) => {
    const { apiUrl, signUpPath } = endpoint;
    dispatch({ type: types.ON_SIGN_UP_REQUEST });

    axios
      .post(`${apiUrl}${signUpPath}`, creds, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then(({ data, headers }) => {
        const tokens = {
          "access-token": headers["access_token"],
          client: headers.client,
          uid: headers.uid
        };

        setHeader(tokens);
        dispatch({ type: types.ON_SIGN_UP_SUCCESS, payload: data.data });
        dispatch({ type: "Navigation/NAVIGATE", routeName: "Home" });
      })
      .catch(error => {
        const { data } = error.response;
        dispatch({ type: types.ON_SIGN_UP_FAILURE, payload: data.errors });
      });
  };
}

export function onSignOut() {
  return (dispatch, getState) => {
    const { apiUrl, signOutPath } = endpoint;

    axios
      .delete(signOutPath)
      .then(response => {
        clearToken();

        dispatch({ type: types.ON_SIGN_OUT_SUCCESS });
      })
      .catch(errors => {
        clearToken();
        dispatch({ type: types.ON_SIGN_OUT_SUCCESS });
      });

    dispatch({ type: "Navigation/NAVIGATE", routeName: "Login" });
  };
}
