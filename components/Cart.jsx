import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../Asset/profile.png')} // Replace with an actual profile image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileInfo}>Email: john.doe@example.com</Text>
        <Text style={styles.profileInfo}>Phone: +1 123 456 7890</Text>
        <Text style={styles.profileInfo}>Location: California, USA</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});

export default ProfileScreen;
