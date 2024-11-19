import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrivacyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Screen</Text>
      <Text style={styles.description}>
        This is where privacy settings or details will be displayed.
      </Text>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
