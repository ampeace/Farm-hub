import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const ServiceScreen = () => {
  const [selectedBox, setSelectedBox] = useState(null); // Tracks the clicked box
  const scaleAnimation = new Animated.Value(1); // Animation state

  const handleBoxPress = (boxName) => {
    // Start animation
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 1.1,
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();

    setSelectedBox(boxName); // Highlight the clicked box
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Escrow </Text>
        <TouchableOpacity>
          <Ionicons name="expand" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Sub-header */}
      <Text style={styles.subtitle}>Stage: Milestone 2</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>25%</Text>
      </View>

      {/* Next Payments Section */}
      <View style={styles.paymentContainer}>
        {[{ date: '8 May', amount: '$950' }, { date: '16 May', amount: '$1,000' }, { date: '30 May', amount: '$675' }].map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => handleBoxPress(`payment-${index}`)}>
            <Animated.View style={[styles.paymentBox, selectedBox === `payment-${index}` ? styles.paymentBoxSelected : null]}>
              <Text style={styles.paymentDate}>{item.date}</Text>
              <Text style={styles.paymentAmount}>{item.amount}</Text>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Budget Breakdown */}
      <View style={styles.breakdownContainer}>
        <Text style={styles.breakdownText}>Budget breakdown</Text>
        <View style={styles.breakdownRow}>
          {/* Budget Box */}
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleBoxPress('budget')}>
            <Animated.View
              style={[
                styles.rectangularBox,
                selectedBox === 'budget' && { transform: [{ scale: scaleAnimation }], backgroundColor: '#CCE4FF' },
              ]}
            >
              <Text style={styles.rectangularValue}>$3,500</Text>
            </Animated.View>
            <Text style={styles.breakdownLabel}>Budget</Text>
          </TouchableOpacity>

          {/* Escrow Box */}
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleBoxPress('escrow')}>
            <Animated.View
              style={[
                styles.rectangularBox,
                selectedBox === 'escrow' && { transform: [{ scale: scaleAnimation }], backgroundColor: '#CCE4FF' },
              ]}
            >
              <Text style={styles.rectangularValue}>$2,000</Text>
            </Animated.View>
            <Text style={styles.breakdownLabel}>In escrow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.breakdownRow}>
          {/* Milestones Paid Box */}
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleBoxPress('milestonesPaid')}>
            <Animated.View
              style={[
                styles.rectangularBox,
                selectedBox === 'milestonesPaid' && { transform: [{ scale: scaleAnimation }], backgroundColor: '#CCE4FF' },
              ]}
            >
              <Text style={styles.rectangularValue}>$875</Text>
            </Animated.View>
            <Text style={styles.breakdownLabel}>Milestones paid</Text>
          </TouchableOpacity>

          {/* Remaining Box */}
          <TouchableOpacity activeOpacity={0.8} onPress={() => handleBoxPress('remaining')}>
            <Animated.View
              style={[
                styles.rectangularBox,
                selectedBox === 'remaining' && { transform: [{ scale: scaleAnimation }], backgroundColor: '#CCE4FF' },
              ]}
            >
              <Text style={styles.rectangularValue}>$2,625</Text>
            </Animated.View>
            <Text style={styles.breakdownLabel}>Remaining</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalPayments}>Total payments: $875</Text>
      </View>

      {/* Milestone Details Button */}
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>Milestone details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
  progressContainer: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#2F2171',
    padding: 10,
    borderRadius: 50,
  },
  progressText: {
    color: '#fff',
    fontSize: 14,
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  paymentBox: {
    backgroundColor: '#2F2171',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  paymentBoxSelected: {
    backgroundColor: '#D9D9D9',
  },
  paymentDate: {
    color: '#fff',
    fontSize: 14,
  },
  paymentAmount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  breakdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  breakdownText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E125F',
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  breakdownColumn: {
    alignItems: 'center',
  },
  breakdownLabel: {
    color: '#7A7A7A',
    fontSize: 14,
  },
  breakdownValue: {
    color: '#1E125F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPayments: {
    color: '#7A7A7A',
    textAlign: 'center',
    marginTop: 10,
  },
  detailsButton: {
    backgroundColor: '#24D29F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },


  rectangularBox: {
    backgroundColor: '#E8F1FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  rectangularValue: { fontSize: 16, fontWeight: 'bold', color: '#1E125F' },
  breakdownLabel: { textAlign: 'center', color: '#7A7A7A', fontSize: 14 },
  totalPayments: { textAlign: 'center', color: '#7A7A7A', marginTop: 10 },
  detailsButton: { 
    backgroundColor: '#24D29F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5, 
  },
  detailsButtonText: { 
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
   },
});
