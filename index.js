// src: https://stackoverflow.com/a/64485629/21583094
// import registerRootComponent from 'expo/build/launch/registerRootComponent';

import { registerRootComponent } from "expo";
import { AppRegistry, Platform } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
if (Platform.OS == "android") {
    registerRootComponent(App);
} else {
    AppRegistry.registerComponent(appName, () => App);
}