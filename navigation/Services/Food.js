import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const foodBrands = [
  { id: '1', name: 'KFC' },
  { id: '2', name: 'McDonald\'s' },
  { id: '3', name: 'Pizza Hut' },
  { id: '4', name: 'Domino\'s' },
  { id: '5', name: 'Burger King' },
  { id: '6', name: 'Hardee\'s' },
  { id: '7', name: 'Subway' },
  { id: '8', name: 'Taco Bell' },
  { id: '9', name: 'Dunkin\' Donuts' },
  { id: '10', name: 'Starbucks' }
];

const Food = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cafes & Resturants</Text>
      <FlatList
        data={foodBrands}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.outlet}>
            <View style={styles.textContainer}>
              <Text style={styles.outletText}>{item.name} </Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    alignItems: 'center',
  },
  outlet: {
    flexDirection: 'row',
    width: '90%',
    height: 140, // Large box for outlets
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  textContainer: {
    flex: 1,
  },
  outletText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});
