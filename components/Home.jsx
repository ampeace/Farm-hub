import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Home'); // State to track active tab

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

        {/* Free Consultation Banner */}
        <View style={styles.consultationBanner}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Free Consultation</Text>
            <TouchableOpacity style={styles.callNowButton}>
              <Text style={styles.callNowText}>Call Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bannerImageContainer}>
            <Image
              source={require('../Asset/botanist.png')} // Replace with your PNG image
              style={styles.bannerImage}
            />
          </View>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('Home')}
          >
            <Image
              source={require('../Asset/building.png')}
              style={[
                styles.navIcon,
                activeTab === 'Home' && styles.activeNavIcon,
              ]}
            />
            <Text
              style={[
                styles.navText,
                activeTab === 'Home' && styles.activeNavText,
              ]}
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
              style={[
                styles.navIcon,
                activeTab === 'Services' && styles.activeNavIcon,
              ]}
            />
            <Text
              style={[
                styles.navText,
                activeTab === 'Services' && styles.activeNavText,
              ]}
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
              style={[
                styles.navIcon,
                activeTab === 'Cart' && styles.activeNavIcon,
              ]}
            />
            <Text
              style={[
                styles.navText,
                activeTab === 'Cart' && styles.activeNavText,
              ]}
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
              style={[
                styles.navIcon,
                activeTab === 'Profile' && styles.activeNavIcon,
              ]}
            />
            <Text
              style={[
                styles.navText,
                activeTab === 'Profile' && styles.activeNavText,
              ]}
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
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15, // Horizontal margin for spacing
    marginVertical: 10, // Vertical spacing for alignment
    backgroundColor: '#FFFFFF', // White background for the header
    borderRadius: 25, // Oval shape
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: 15, // Inner padding for text and icon
    height: 60, 
    },
    greetingText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    subText: {
      fontSize: 14,
      color: '#666',
    },
    headerIcon: {
      width: 25,
      height: 25,
    },
    iconContainer: {
      padding: 10,
      backgroundColor: '#E7F8EF',
      borderRadius: 20,
    },
    searchSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 15, // Adjust horizontal margin for spacing
      marginVertical: 10, // Add vertical spacing for better layout
      backgroundColor: '#FFFFFF', // White background for the search bar
      borderRadius: 25, // Half of the height to make it oval
      elevation: 5, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      paddingHorizontal: 15, // Inner spacing
      height: 50, 
    },
    searchInput: {
      flex: 1,
      height: '100%', // Ensure the input fills the search bar
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
    consultationBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 20, // Rounded corners for 3D effect
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    elevation: 8, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    overflow: 'hidden',// Keeps image within the banner
    },
    bannerTextContainer: {
    flex: 2.5, // Allocate more space to the text
    justifyContent: 'center',
    paddingRight: 10,
    },
    bannerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    bannerSubtitle: {
      fontSize: 14,
      color: '#666',
      marginBottom: 10,
    },
    callNowButton: {
      backgroundColor: '#6FBF73', // Green button
      borderRadius: 5, // Slightly rounded button
      paddingHorizontal: 15, // Reduce horizontal padding
      paddingVertical: 5,
      alignSelf: 'flex-start',
    },
    callNowText: {
      fontSize: 14,
      color: '#FFF',
      fontWeight: 'bold',
    },
    bannerImageContainer: {
      flex: 2, // Allocate space for the image
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden', 
    },
    bannerImage: {
      width: 100,
      height:undefined,
      aspectRatio: 1, 
      resizeMode: 'contain',
      transform: [{ rotate: '-5deg' }, { translateY: 5 }], // Adds rotation for 3D effect
    },
    featuredSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      marginVertical: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    seeAllText: {
      fontSize: 14,
      color: '#6FBF73',
    },
    productsContainer: {
      paddingHorizontal: 15,
    },
    productCard: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      margin: 5,
      padding: 10,
      alignItems: 'center',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    productImage: {
      width: 80,
      height: 80,
      marginBottom: 10,
    },
    productName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
    productPrice: {
      fontSize: 12,
      color: '#666',
      marginVertical: 5,
      textAlign: 'center',
    },
    addButton: {
      backgroundColor: '#6FBF73',
      borderRadius: 5,
      padding: 5,
    },
    addButtonText: {
      fontSize: 16,
      color: '#FFF',
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
      tintColor: '#6FBF73', // Green highlight for active icon
    },
    navText: {
      fontSize: 12,
      color: '#666',
    },
    activeNavText: {
      color: '#6FBF73', // Green highlight for active text
      fontWeight: 'bold',
    },
  });


export default HomeScreen;
