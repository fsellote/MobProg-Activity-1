import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const offers = [
    {
      id: 1,
      title: "Strawberry Wheel",
      description: "These Baked Strawberry Donuts are filled with fresh strawberries...",
      oldPrice: "₱45",
      newPrice: "₱55",
      image: require("../assets/pinkdonut.png"),
      color: styles.offerBlue,
    },
    {
      id: 2,
      title: "Chocolate Glaze",
      description: "Moist and fluffy baked chocolate donuts full of chocolate flavor...",
      oldPrice: "₱50",
      newPrice: "₱60",
      image: require("../assets/chocodonut.png"),
      color: styles.offerPink,
    },
    {
      id: 3,
      title: "Vanilla Frosted",
      description: "Light and sweet vanilla donuts with a twist of lemon zest...",
      oldPrice: "₱40",
      newPrice: "₱45",
      image: require("../assets/vanilladonut.png"),
      color: styles.offerViolet,
    },
  ];

  const donuts = [
    { id: 1, title: "Sakura Donut", price: "₱45", image: require("../assets/sakuradonut.png") },
    { id: 2, title: "Strawberry Rain", price: "₱35", image: require("../assets/strawberrydonut.png") },
    { id: 3, title: "Glaze Bliss", price: "₱30", image: require("../assets/glazedonut.png") },
    { id: 4, title: "Choco Marble", price: "₱30", image: require("../assets/chocomarbledonut.png") },
    { id: 5, title: "Coffee Nut", price: "₱35", image: require("../assets/coffeenutdonut.png") },
    { id: 6, title: "Mochi Donut", price: "₱45", image: require("../assets/mochidonut.png") },
  ];

  const handleFavoriteToggle = (itemId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(itemId)
        ? prevFavorites.filter((id) => id !== itemId)
        : [...prevFavorites, itemId]
    );
  };

  const isFavorite = (itemId) => favorites.includes(itemId);

  const filteredOffers = offers.filter((offer) =>
    offer.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDonuts = donuts.filter((donut) =>
    donut.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

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

  <View style={styles.searchContainer}>
    <Icon name="search-outline" style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search "
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  </View>

  {/* Result */}
  {searchQuery ? (
    <View style={styles.section}>
      <ScrollView>
        {filteredOffers.map((offer) => (
          <View key={offer.id} style={[styles.offerCard, offer.color]}>
            <TouchableOpacity style={styles.heartIconContainer} onPress={() => handleFavoriteToggle(offer.id)}>
              <View style={styles.heartIconBackground}>
                <Icon name={isFavorite(offer.id) ? "heart" : "heart-outline"} style={[styles.heartIcon,{ color: isFavorite(offer.id) ? "#FF66B2" : "#888" },]}/>
                </View>
                </TouchableOpacity>
                <Image source={offer.image} style={styles.offerImage} />
                <View style={styles.offerContent}>
                  <Text style={styles.offerTitle}>{offer.title}</Text>
                  <Text style={styles.offerDescription}> {offer.description}</Text>
                  <View style={styles.offerPriceContainer}>
                    <Text style={styles.oldPrice}>{offer.oldPrice}</Text>
                    <Text style={styles.newPrice}>{offer.newPrice}</Text>
                  </View>
                </View>
          </View>
              ))}
              {filteredDonuts.map((donut) => (
                <View key={donut.id} style={styles.donutCard}>
                  <Image source={donut.image} style={styles.donutImage} />
                  <Text style={styles.donutTitle}>{donut.title}</Text>
                  <Text style={styles.donutPrice}>{donut.price}</Text>
                </View>
              ))}
        </ScrollView>
    </View>
) : (
  <>

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
    {offers.map((offer) => (
      <View key={offer.id} style={[styles.offerCard, offer.color]}>
        <TouchableOpacity style={styles.heartIconContainer} onPress={() => handleFavoriteToggle(offer.id)}>
          <View style={styles.heartIconBackground}>
            <Icon name={isFavorite(offer.id) ? "heart" : "heart-outline"} style={[ styles.heartIcon,{ color: isFavorite(offer.id) ? "#FF66B2" : "#888" },]}/>
            </View>
            </TouchableOpacity>
            <Image source={offer.image} style={styles.offerImage} />
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>{offer.title}</Text>
              <Text style={styles.offerDescription}> {offer.description}</Text>
              <View style={styles.offerPriceContainer}>
                <Text style={styles.oldPrice}>{offer.oldPrice}</Text>
                <Text style={styles.newPrice}>{offer.newPrice}</Text>
              </View>
            </View>
      </View>
    ))}
    </ScrollView>
  </View>

  {/* Donuts */}
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Donuts</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        gap: 10,
      }}
      style={styles.donutsContainer}
    >
    {donuts.map((donut) => (
      <View key={donut.id} style={styles.donutCard}>
        <Image source={donut.image} style={styles.donutImage} />
        <Text style={styles.donutTitle}>{donut.title}</Text>
        <Text style={styles.donutPrice}>{donut.price}</Text>
      </View>
    ))}
    <Text style={styles.moreDots}>...</Text>
    </ScrollView>
  </View>
</>
)}

  {/* Navigation */}
  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => setActiveTab('home')}>
      <Icon name="home-outline" style={[styles.navIcon, activeTab === 'home' && styles.activeNavIcon]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('favorites')}>
        <View style={styles.iconWithBadge}>
          <Icon name="heart-outline" style={[styles.navIcon, activeTab === 'favorites' && styles.activeNavIcon]} />
          {favorites.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{favorites.length}</Text>
            </View>
          )}
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('notifications')}>
            <Icon name="notifications-outline" style={[styles.navIcon, activeTab === 'notifications' && styles.activeNavIcon]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('cart')}>
              <Icon name="cart-outline" style={[styles.navIcon, activeTab === 'cart' && styles.activeNavIcon]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveTab('profile')}>
                <Icon name="person-outline" style={[styles.navIcon, activeTab === 'profile' && styles.activeNavIcon]} />
             </TouchableOpacity>
  </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 25,
    paddingBottom: 60,
  },
  header: {
    alignItems: "flex-start",
    marginTop: 30,
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginTop: -15,
  },
  searchIcon: {
    fontSize: 20,
    color: "#888",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
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
  donutsContainer: {
    flexDirection: "row",
    marginTop: -15,
    marginBottom: 50,
  },
  donutCard: {
    width: 120,
    paddingTop: 30, 
    backgroundColor: "#FFE9EA",
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
    marginTop:10,
    marginBottom: 10,
    position: "relative", 
    overflow: "visible", 
  },
  donutImage: {
    width: 80,
    height: 80,
    position: "absolute",
  },
  donutTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 50, 
    textAlign: "center",
  },
  donutPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF7074",
    marginTop: 5, 
  },
  moreDots: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 30,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
    elevation: 3,
  },
  navIcon: {
    fontSize: 15,
    color: "#888", 
  },
  activeNavIcon: {
    color: "#000", 
  },
  bfavoriteItem: {
    fontSize: 18,
    color: "#333",
    marginVertical: 5,
  },
  noFavorites: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#FF7074',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, 
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default Dashboard;
