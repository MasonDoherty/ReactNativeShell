import React, { useState, useRef } from "react";
import { View, StyleSheet, SafeAreaView, Animated } from "react-native";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CalendarDrawer from "../components/Drawers/CalendarDrawer";
import CogDrawer from "../components/Drawers/CogDrawer";
import MenuDrawer from "../components/Drawers/MenuDrawer";
import UserDrawer from "../components/Drawers/UserDrawer";

const Home: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState({
    calendar: false,
    cog: false,
    menu: false,
    user: false,
  });
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const toggleDrawer = (drawerName: keyof typeof drawerVisible) => {
    const newDrawerVisible = { ...drawerVisible };
    Object.keys(newDrawerVisible).forEach((key) => {
      newDrawerVisible[key as keyof typeof drawerVisible] = false;
    });
    newDrawerVisible[drawerName] = !drawerVisible[drawerName];
    setDrawerVisible(newDrawerVisible);
  };

  const closeDrawer = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: false,
    }).start(() => {
      setDrawerVisible({
        calendar: false,
        cog: false,
        menu: false,
        user: false,
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        iconName="menu"
        title={`Your Routine`}
        onMenuPress={() => toggleDrawer("menu")}
        onUserPress={() => toggleDrawer("user")}
      />
      <View style={styles.contentContainer}>
        {drawerVisible.calendar && <CalendarDrawer onClose={closeDrawer} />}
        {drawerVisible.cog && <CogDrawer onClose={closeDrawer} />}
        {drawerVisible.menu && <MenuDrawer onClose={closeDrawer} />}
        {drawerVisible.user && <UserDrawer onClose={closeDrawer} />}
      </View>

      <Footer
        icons={["calendar", "home", "cog"]}
        onPressCalendar={() => toggleDrawer("calendar")}
        onPressHome={closeDrawer}
        onPressCog={() => toggleDrawer("cog")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default Home;
