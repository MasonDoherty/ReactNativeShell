import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Calendar from "../Calendar/Calendar";

type Props = {
  onClose: () => void;
};

const CalendarDrawer: React.FC<Props> = ({ onClose }) => {
  const windowWidth = useWindowDimensions().width;
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const drawerWidth = 0.9 * windowWidth;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  };

  return (
    <>
      {/* Background overlay */}
      <TouchableWithoutFeedback onPress={closeDrawer}>
        <Animated.View style={[styles.overlay, { opacity: fadeAnimation }]} />
      </TouchableWithoutFeedback>

      {/* Calendar drawer */}
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [
              {
                translateX: slideAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-drawerWidth, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity style={styles.closeButton} onPress={closeDrawer}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        <ScrollView>
          <Calendar />
        </ScrollView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  drawer: {
    padding: 10,
    position: "absolute",
    left: -2,
    top: 10,
    height: "95%",
    width: "90%",
    backgroundColor: "white",
    zIndex: 1,
    borderColor: "black",
    borderWidth: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black color
    zIndex: 0, // Place behind other elements
  },
});

export default CalendarDrawer;
