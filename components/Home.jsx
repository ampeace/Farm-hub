import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Home'); // State to track active tab

  // Banner data
  const banners = [
    {
      id: '1',
      title: 'Free Consultation',
      buttonText: 'Call Now',
      image: require('../Asset/botanist.png'),
    },
    {
      id: '2',
      title: 'New Discounts Available!',
      buttonText: 'Shop Now',
      image: require('../Asset/botanist.png'),
    },
    {
      id: '3',
      title: 'Expert Advice',
      buttonText: 'Learn More',
      image: require('../Asset/botanist.png'),
    },
  ];

  // Product data
  const products = [
    {
      id: '1',
      name: 'Wheat',
      price: '$200/Quintal',
      image: require('../Asset/add-to-cart.png'), // Replace with actual asset
    },
    {
      id: '2',
      name: 'Rice',
      price: '$250/Quintal',
      image: require('../Asset/add-to-cart.png'), // Replace with actual asset
    },
    {
      id: '3',
      name: 'Maize',
      price: '$180/Quintal',
      image: require('../Asset/add-to-cart.png'), // Replace with actual asset
    },
    {
      id: '4',
      name: 'Barley',
      price: '$220/Quintal',
      image: require('../Asset/add-to-cart.png'), // Replace with actual asset
    },
  ];

  const renderBanner = ({ item }) => (
    <View style={styles.consultationBanner}>
      <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.callNowButton}>
          <Text style={styles.callNowText}>{item.buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bannerImageContainer}>
        <Image source={item.image} style={styles.bannerImage} />
      </View>
    </View>
  );

  const renderProduct = ({ item }) => (
    <View style={styles.productCardHorizontal}>
      <Image source={item.image} style={styles.productImageHorizontal} />
      <Text style={styles.productNameHorizontal}>{item.name}</Text>
      <Text style={styles.productPriceHorizontal}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Search Section */}
        <View style={styles.searchSection}>
          <TextInput
            placeholder="Search here..."
            style={styles.searchInput}
            placeholderTextColor="#A9A9A9"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Image
              source={require('../Asset/google.png')} // Replace with filter icon
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Horizontal Banner Section */}
        <View style={styles.bannerWrapper}>
          <FlatList
            data={banners}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderBanner}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Horizontal Product Section */}
        <View style={styles.productSectionHorizontal}>
          <Text style={styles.sectionTitle}>Available Crops</Text>
          <FlatList
            data={products}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.productListHorizontal}
          />
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('Home')}
          >
            <Image
              source={require('../Asset/building.png')}
              style={[styles.navIcon, activeTab === 'Home' && styles.activeNavIcon]}
            />
            <Text
              style={[styles.navText, activeTab === 'Home' && styles.activeNavText]}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('Services')}
          >
            <Image
              source={require('../Asset/responsible.png')}
              style={[styles.navIcon, activeTab === 'Services' && styles.activeNavIcon]}
            />
            <Text
              style={[styles.navText, activeTab === 'Services' && styles.activeNavText]}
            >
              Services
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('Cart')}
          >
            <Image
              source={require('../Asset/add-to-cart.png')}
              style={[styles.navIcon, activeTab === 'Cart' && styles.activeNavIcon]}
            />
            <Text
              style={[styles.navText, activeTab === 'Cart' && styles.activeNavText]}
            >
              Cart
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('Profile')}
          >
            <Image
              source={require('../Asset/profile.png')}
              style={[styles.navIcon, activeTab === 'Profile' && styles.activeNavIcon]}
            />
            <Text
              style={[styles.navText, activeTab === 'Profile' && styles.activeNavText]}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 60,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: 15,
    height: 50,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    padding: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  bannerWrapper: {
    height: 140,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  consultationBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginRight: 10,
    padding: 15,
    width: 260,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  bannerTextContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingRight: 10,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  callNowButton: {
    backgroundColor: '#6FBF73',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  callNowText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  bannerImageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productSectionHorizontal: {
    height: 180, // Set height for the product section
    marginHorizontal: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productListHorizontal: {
    flexDirection: 'row',
  },
  productCardHorizontal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    width: 150,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImageHorizontal: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productNameHorizontal: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  productPriceHorizontal: {
    fontSize: 12,
    color: '#666',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  activeNavIcon: {
    tintColor: '#6FBF73',
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  activeNavText: {
    color: '#6FBF73',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
