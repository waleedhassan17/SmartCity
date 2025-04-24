import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const brands = [
  { id: '1', name: 'Nike' },
  { id: '2', name: 'Adidas' },
  { id: '3', name: 'Puma' },
  { id: '4', name: 'Zara' },
  { id: '5', name: 'H&M' },
  { id: '6', name: 'Cougar' },
  { id: '7', name: 'Breakout' },
  { id: '8', name: 'Engine' },
  { id: '9', name: 'Outfitters' }
];

const Shopping = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Service</Text>
      <FlatList
        data={brands}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.outlet}>
            <View style={styles.textContainer}>
              <Text style={styles.outletText}>{item.name} Outlet</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Shopping;

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
    height: 140,  // Increased box height
    backgroundColor: '#fff',
    borderRadius: 15, // Increased border radius for a smoother look
    marginVertical: 12, // More spacing between boxes
    padding: 20, // Increased padding for better spacing
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
    fontSize: 22, // Increased font size
    fontWeight: 'bold',
    color: '#333',
  },
});
