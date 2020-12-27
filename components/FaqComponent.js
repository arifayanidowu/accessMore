import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Divider, FAB, TouchableRipple } from "react-native-paper";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Transition, Transitioning } from "react-native-reanimated";
import color from "../theme/color";
import DATA from "../utils/DATA";

const { height } = Dimensions.get("screen");

const tranisition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const FaqComponent = ({ hideModal }) => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  const toggleAccordion = (index) => {
    ref.current.animateNextTransition();
    setCurrentIndex(index === currentIndex ? null : index);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.topWrapper}>
        <FAB
          icon={() => <AntDesign name="close" size={24} />}
          onPress={hideModal}
          style={{ backgroundColor: color.white }}
        />

        <Text style={styles.faqText}>FAQ</Text>
      </View>
      <Divider />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 20,
        }}
      >
        <Transitioning.View transition={tranisition} ref={ref}>
          {DATA.map(({ title, content, id }, index) => (
            <TouchableRipple
              key={id}
              onPress={() => toggleAccordion(index)}
              style={[styles.cardContainer]}
            >
              <View style={[styles.cardWrapper]}>
                <View style={[styles.card]}>
                  <Text style={[styles.heading]}>{title}</Text>
                  <View
                    style={[
                      styles.iconWrapper,
                      {
                        transform: [
                          {
                            rotate: currentIndex === index ? "-90deg" : "0deg",
                          },
                        ],
                      },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={24}
                      color="#64b5f6"
                    />
                  </View>
                </View>
                {index === currentIndex && (
                  <View style={[styles.content]}>
                    <Text>{content}</Text>
                  </View>
                )}
                <Divider />
              </View>
            </TouchableRipple>
          ))}
        </Transitioning.View>
      </ScrollView>
    </View>
  );
};

export default FaqComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    borderRadius: 10,
    backgroundColor: color.white,

    width: 400,
    height,
  },
  topWrapper: {
    padding: 20,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  faqText: {
    marginLeft: "30%",
    fontSize: 20,
    letterSpacing: 1.8,
  },
  cardContainer: {
    flexGrow: 1,
  },
  cardWrapper: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontWeight: "bold",
    width: "80%",
    // fontSize: 16,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#e3f2fd",
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
});
