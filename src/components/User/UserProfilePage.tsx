import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const UserProfilePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/defaultUser.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.location}>New York, USA</Text>
          <Text style={styles.job}>Software Engineer</Text>
        </View>
      </View>
      <View style={styles.placeholderLine} />

      <ScrollView>
        <View style={styles.photoContainer}>
          <View style={styles.placeholderRowContainer}>
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
          </View>
          <View style={styles.placeholderRowContainer}>
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
          </View>
          <View style={styles.placeholderRowContainer}>
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
          </View>
          <View style={styles.placeholderRowContainer}>
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
          </View>
          <View style={styles.placeholderRowContainer}>
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
          </View>
          <View style={styles.placeholderRowContainer}>
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
          </View>
          <View style={styles.placeholderRowContainer}>
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
            <View style={styles.placeholderPicture} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    overflow: "hidden",
    flex: 1,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  photoContainer: {
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  location: {
    fontSize: 16,
    color: "gray",
  },
  job: {
    fontSize: 16,
  },
  placeholderRowContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  placeholderPicture: {
    padding: 3,
    width: 105,
    height: 105,
    backgroundColor: "lightgray",
    margin: 1,
    borderColor: "black",
    borderWidth: 1,
  },
  placeholderLine: {
    width: "100%",
    height: 2,
    backgroundColor: "lightgray",
    marginBottom: 10,
  },
});

export default UserProfilePage;
