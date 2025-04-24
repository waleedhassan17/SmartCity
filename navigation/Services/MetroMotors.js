import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const brands = {
  Bikes: ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'United'],
  Cars: ['Toyota', 'Honda', 'Suzuki', 'Hyundai', 'Kia', 'MG', 'Changan'],
};

const BrandSection = ({ title, items }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.grid}>
      {items.map((brand, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Text style={styles.itemText}>{brand}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const MetroMotors = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Metro Motors</Text>
        <BrandSection title="🏍️ Bikes" items={brands.Bikes} />
        <BrandSection title="🚗 Cars" items={brands.Cars} />
      </ScrollView>
    </View>
  );
};

export default MetroMotors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#444',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: width * 0.42,  // Adjusted for proper spacing
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
