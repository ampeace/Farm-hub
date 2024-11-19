import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const payments = [
  { id: '1', date: '8 May', amount: '$950' },
  { id: '2', date: '16 May', amount: '$1,000' },
  { id: '3', date: '30 May', amount: '$675' },
];

const budgetData = [
  { id: 'budget', label: 'Budget', value: '$3,500' },
  { id: 'escrow', label: 'In escrow', value: '$2,000' },
  { id: 'milestonesPaid', label: 'Milestones paid', value: '$875' },
  { id: 'remaining', label: 'Remaining', value: '$2,625' },
];

const ServiceScreen = () => {
  const [selectedBox, setSelectedBox] = useState(null); // Tracks the clicked box
  const scaleAnimation = useRef(new Animated.Value(1)).current;

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

  const renderPayment = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handleBoxPress(item.id)}
    >
      <Animated.View
        style={[
          styles.paymentBox,
          selectedBox === item.id ? styles.paymentBoxSelected : null,
        ]}
      >
        <Text style={styles.paymentDate}>{item.date}</Text>
        <Text style={styles.paymentAmount}>{item.amount}</Text>
      </Animated.View>
    </TouchableOpacity>
  );

  const renderBudgetBox = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handleBoxPress(item.id)}
    >
      <Animated.View
        style={[
          styles.rectangularBox,
          selectedBox === item.id && { transform: [{ scale: scaleAnimation }], backgroundColor: '#CCE4FF' },
        ]}
      >
        <Text style={styles.rectangularValue}>{item.value}</Text>
      </Animated.View>
      <Text style={styles.breakdownLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Escrow</Text>
        <TouchableOpacity>
          <Ionicons name="expand" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Payments Section */}
      <FlatList
        data={payments}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderPayment}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.paymentContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No payments available</Text>}
      />

      {/* Budget Breakdown */}
      <View style={styles.breakdownContainer}>
        <Text style={styles.breakdownText}>Budget breakdown</Text>
        <FlatList
          data={budgetData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderBudgetBox}
          columnWrapperStyle={styles.breakdownRow}
        />
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
    color: '#6FBF73',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentContainer: {
    marginVertical: 20,
  },
  paymentBox: {
    backgroundColor: '#6FBF73',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    marginRight: 10,
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
    marginBottom: 10,
  },
  breakdownRow: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rectangularBox: {
    backgroundColor: '#E8F1FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  rectangularValue: { fontSize: 16, fontWeight: 'bold', color: '#1E125F' },
  breakdownLabel: { textAlign: 'center', color: '#7A7A7A', fontSize: 14 },
  totalPayments: { textAlign: 'center', color: '#7A7A7A', marginTop: 10 },
  detailsButton: {
    backgroundColor: '#6FBF73',
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
  emptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});
