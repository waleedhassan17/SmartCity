import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const banks = [
  { id: '1', name: 'HBL (Habib Bank Limited)' },
  { id: '2', name: 'MCB Bank' },
  { id: '3', name: 'UBL (United Bank Limited)' },
  { id: '4', name: 'Allied Bank' },
  { id: '5', name: 'Bank Alfalah' },
];

const Finance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Banking Services</Text>

      <FlatList
        data={banks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.bankName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Finance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  bankName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
