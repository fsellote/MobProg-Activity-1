import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Start a new order!</Text>
        <Text style={styles.headerSubtitle}>
          Order your favourite donuts from here.
        </Text>
        <Text style={styles.headerSubtitle}>Let's Gounts!</Text>
      </View>

      {/* Today Offers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today Offers</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          style={styles.offersContainer}
        >
          {/* Offer 1 */}
          <View style={[styles.offerCard, styles.offerBlue]}>
            <TouchableOpacity style={styles.heartIconContainer}>
              <View style={styles.heartIconBackground}>
                <Text style={styles.heartIcon}>❤️</Text>
              </View>
            </TouchableOpacity>
            <Image source={require("../assets/pinkdonut.png")} style={styles.offerImage} />
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>Strawberry Wheel</Text>
              <Text style={styles.offerDescription}>
                These Baked Strawberry Donuts are filled with fresh strawberries...
              </Text>
              <View style={styles.offerPriceContainer}>
                <Text style={styles.oldPrice}>₱45</Text>
                <Text style={styles.newPrice}>₱55</Text>
              </View>
            </View>
          </View>

          {/* Offer 2 */}
          <View style={[styles.offerCard, styles.offerPink]}>
            <TouchableOpacity style={styles.heartIconContainer}>
              <View style={styles.heartIconBackground}>
                <Text style={styles.heartIcon}>❤️</Text>
              </View>
            </TouchableOpacity>
            <Image source={require("../assets/chocodonut.png")} style={styles.offerImage} />
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>Chocolate Glaze</Text>
              <Text style={styles.offerDescription}>
                Moist and fluffy baked chocolate donuts full of chocolate flavor...
              </Text>
              <View style={styles.offerPriceContainer}>
                <Text style={styles.oldPrice}>₱50</Text>
                <Text style={styles.newPrice}>₱60</Text>
              </View>
            </View>
          </View>

          {/* Offer 3 */}
          <View style={[styles.offerCard, styles.offerViolet]}>
            <TouchableOpacity style={styles.heartIconContainer}>
              <View style={styles.heartIconBackground}>
                <Text style={styles.heartIcon}>❤️</Text>
              </View>
            </TouchableOpacity>
            <Image source={require("../assets/vanilladonut.png")} style={styles.offerImage} />
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>Vanilla Frosted</Text>
              <Text style={styles.offerDescription}>
                Light and sweet vanilla donuts with a twist of lemon zest...
              </Text>
              <View style={styles.offerPriceContainer}>
                <Text style={styles.oldPrice}>₱40</Text>
                <Text style={styles.newPrice}>₱45</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Donuts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Donuts</Text>
        <View style={styles.donutContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          style={styles.offersContainer}
        >
          {/* Donut 1 */}
          <View style={styles.donutCard}>
          <Image source={require("../assets/sakuradonut.png")} style={styles.donutImage} />
            <Text style={styles.donutTitle}>Chocolate Cherry</Text>
            <Text style={styles.donutPrice}>₱35</Text>
          </View>

          {/* Donut 2 */}
          <View style={styles.donutCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/60" }}
              style={styles.donutImage}
            />
            <Text style={styles.donutTitle}>Strawberry Rain</Text>
            <Text style={styles.donutPrice}>₱35</Text>
          </View>

          {/* Donut 3 */}
          <View style={styles.donutCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/60" }}
              style={styles.donutImage}
            />
            <Text style={styles.donutTitle}>Strawberry Bliss</Text>
            <Text style={styles.donutPrice}>₱35</Text>
          </View>
          </ScrollView>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 30,
  },
  header: {
    alignItems: "flex-start",
    marginTop: 40,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF7074",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#888",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  offersContainer: {
    marginBottom: 10,
  },
  offerCard: {
    width: 185,
    padding: 35,
    borderRadius: 20,
    marginRight: 50,
    backgroundColor: "#FFF",
    alignItems: "left",
    position: "relative",
  },
  offerBlue: {
    backgroundColor: "#E3F2FD",
  },
  offerPink: {
    backgroundColor: "#FFEBEE",
  },
  offerViolet: {
    backgroundColor: "#C5D2EF",
  },
  offerImage: {
    width: 200,
    height: 200,
    position: "absolute",
    right: -65,
    zIndex: 1,
  },
  heartIconContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 2,
  },
  heartIconBackground: {
    backgroundColor: "white",
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  heartIcon: {
    fontSize: 16,
    color: "#FF66B2",
  },
  offerContent: {
    marginTop: 100,
    alignItems: "center",
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 60,
    marginLeft: -10,
    textAlign: "left",
  },
  offerDescription: {
    fontSize: 12,
    textAlign: "left",
    color: "#555",
    marginTop: 5,
    marginLeft: -10,
  },
  offerPriceContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: -25,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    fontSize: 15,
    marginTop: 20,
    marginLeft: 50,
  },
  newPrice: {
    fontSize: 38,
    color: "black",
    fontWeight: "bold",
  },
  donutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  donutCard: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFE6F2",
    borderRadius: 10,
  },
  donutImage: {
    width: 80,
    height: 60,
    marginBottom: 5,
  },
  donutTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  donutPrice: {
    fontSize: 14,
    color: "#FF66B2",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  navIcon: {
    fontSize: 22,
    color: "#888",
  },
  activeNavIcon: {
    color: "#FF66B2",
  },
});

export default Dashboard;
