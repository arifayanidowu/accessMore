import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Animated,
} from "react-native";
import { List, Divider, Surface, TouchableRipple } from "react-native-paper";
import color from "../theme/color";
import FaqComponent from "../components/FaqComponent";

const SupportScreen = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const fadeAnim2 = React.useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = React.useState(false);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: 10,
      delay: 300,
      duration: 5000,
      useNativeDriver: true,
    }).start();

    Animated.spring(fadeAnim2, {
      toValue: 9,
      delay: 500,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    Animated.spring(fadeAnim2, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const showModal = () => {
    fadeIn();
    setVisible(true);
  };
  const hideModal = () => {
    fadeOut();
    setVisible(false);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: visible ? "#000" : "",
        },
      ]}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={visible ? "#000" : color.primary}
      />

      <Animated.View
        style={[
          styles.container2,
          {
            transform: [{ translateY: fadeAnim2 }],
            width: visible ? 380 : "100%",
            backgroundColor: visible ? "#000" : "#f7f7f7",
            marginLeft: visible ? "auto" : 0,
            marginRight: visible ? "auto" : 0,
          },
        ]}
      >
        <SafeAreaView
          style={[
            styles.topBarContainer,
            {
              borderTopLeftRadius: visible ? 10 : 0,
              borderTopRightRadius: visible ? 10 : 0,
            },
          ]}
        >
          <View style={styles.topBarInner}>
            <Text style={[styles.text, { fontSize: 20, color: color.white }]}>
              Support
            </Text>
          </View>
          <Text style={styles.versionText}>App version: 2.2.0</Text>
        </SafeAreaView>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Support */}
          <Surface style={styles.paper}>
            <Text style={styles.heading}>Support</Text>
            <TouchableRipple
              onPress={() => {}}
              rippleColor="rgba(0, 0, 0, .32)"
            >
              <List.Item
                title={<Text style={styles.list}>Access Inflow Details</Text>}
                left={(props) => (
                  <View style={styles.iconWrapper}>
                    <List.Icon icon="folder" color="grey" />
                  </View>
                )}
                right={(props) => <List.Icon icon="chevron-right" />}
              />
            </TouchableRipple>
            <Divider />
            <TouchableRipple
              onPress={showModal}
              rippleColor="rgba(0, 0, 0, .32)"
            >
              <List.Item
                title={<Text style={styles.list}>FAQ</Text>}
                left={(props) => (
                  <View style={styles.iconWrapper}>
                    <List.Icon icon="help-circle-outline" color="grey" />
                  </View>
                )}
                right={(props) => <List.Icon icon="chevron-right" />}
              />
            </TouchableRipple>
            <Divider />
          </Surface>

          {/* Socials */}
          <Surface style={styles.paper}>
            <Text style={styles.heading}>Social Media</Text>

            <List.Item
              title={<Text style={styles.list}>@accessbank_help</Text>}
              left={(props) => (
                <View style={styles.iconWrapper}>
                  <List.Icon icon="twitter" size={25} color="grey" />
                </View>
              )}
            />

            <Divider />

            <List.Item
              title={<Text style={styles.list}>AccessBankPlc</Text>}
              left={(props) => (
                <View style={styles.iconWrapper}>
                  <List.Icon icon="facebook" color="grey" />
                </View>
              )}
            />

            <Divider />

            <List.Item
              title={<Text style={styles.list}>@access_more</Text>}
              left={(props) => (
                <View style={styles.iconWrapper}>
                  <List.Icon icon="instagram" color="grey" />
                </View>
              )}
            />
          </Surface>

          {/* Contacts */}
          <Surface style={styles.paper}>
            <Text style={styles.heading}>Call us</Text>

            <List.Item
              title={<Text style={styles.list}>01-2712005-7</Text>}
              left={(props) => (
                <View style={styles.iconWrapper}>
                  <List.Icon
                    icon="headphones-settings"
                    size={25}
                    color="grey"
                  />
                </View>
              )}
            />

            <Divider />

            <List.Item
              title={<Text style={styles.list}>01-2802500</Text>}
              left={(props) => (
                <View style={styles.iconWrapper}>
                  <List.Icon
                    icon="headphones-settings"
                    size={25}
                    color="grey"
                  />
                </View>
              )}
            />

            <Divider />

            <List.Item
              title={<Text style={styles.list}>0700CALLACCESS</Text>}
              left={(props) => (
                <View style={styles.iconWrapper}>
                  <List.Icon
                    icon="headphones-settings"
                    size={25}
                    color="grey"
                  />
                </View>
              )}
            />

            {/* <Divider /> */}
          </Surface>
        </ScrollView>
      </Animated.View>
      {visible ? (
        <Animated.View
          style={[
            styles.faq,
            {
              transform: [{ translateY: fadeAnim }],

              // Bind opacity to animated value
            },
          ]}
        >
          <FaqComponent hideModal={hideModal} />
        </Animated.View>
      ) : null}
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFill,
  },
  container2: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  topBarContainer: {
    backgroundColor: color.primary,
  },
  topBarInner: {
    paddingVertical: 30,
    alignItems: "center",
  },
  text: {},
  versionText: {
    textAlign: "right",
    marginBottom: 5,
    marginRight: 5,
    color: color.white,
    fontSize: 12,
  },
  heading: {
    marginLeft: 10,
    color: "#969592",
  },
  paper: {
    padding: 20,
    marginTop: 10,
  },
  list: {
    // fontWeight: "bold",
    color: "#757575",
  },
  iconWrapper: {
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3f2fd",
    textAlign: "center",
  },
  faq: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,

    width: "100%",
    height: "100%",
    marginTop: 10,
  },
});
