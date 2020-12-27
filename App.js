import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { BottomNavigation } from "react-native-paper";
import { Provider } from "react-native-paper";

import LoginScreen from "./screens/LoginScreen";
import ServicesScreen from "./screens/ServicesScreen";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";
import color from "./theme/color";

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "login", title: "Login", icon: "lock", color: color.primary },
    {
      key: "services",
      title: "Quick Services",
      icon: "help-circle-outline",
      color: color.green,
    },
    {
      key: "support",
      title: "Support",
      icon: "headphones",
      color: color.primary,
    },
    {
      key: "settings",
      title: "Settings",
      icon: "cog",
      color: color.grey,
    },
  ]);

  let [fontsLoaded] = useFonts({
    Quicksand: require("./assets/fonts/Quicksand-VariableFont_wght.ttf"),
    QuicksandBold: require("./assets/fonts/Quicksand-Bold.ttf"),
    QuicksandMedium: require("./assets/fonts/Quicksand-Medium.ttf"),
  });

  const renderScene = BottomNavigation.SceneMap({
    login: LoginScreen,
    services: ServicesScreen,
    support: SupportScreen,
    settings: SettingsScreen,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </Provider>
    );
  }
}
