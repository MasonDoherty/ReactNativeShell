import React, { useRef, useEffect, Children } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

const RightDrawer: React.FC<Props> = ({ onClose, children }) => {
  const windowWidth = useWindowDimensions().width;
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const drawerWidth = 0.9 * windowWidth;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 300, // Adjust the duration as needed
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300, // Adjust the duration as needed
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300, // Adjust the duration as needed
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300, // Adjust the duration as needed
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={closeDrawer}>
        <Animated.View style={[styles.overlay, { opacity: fadeAnimation }]} />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [
              {
                translateX: slideAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [drawerWidth, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity style={styles.closeButton} onPress={closeDrawer}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        <ScrollView>{children}</ScrollView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  drawer: {
    padding: 10,
    position: "absolute",
    right: -2,
    top: 10,
    height: "95%",
    width: "90%",
    backgroundColor: "white",
    zIndex: 1,
    borderColor: "black",
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black color
    zIndex: 0, // Place behind other elements
  },
});

export default RightDrawer;
