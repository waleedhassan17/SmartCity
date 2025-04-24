import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 2; // Two cards per row with spacing

const categories = [
  { id: '1', name: 'MetroExpress', screen: 'MetroExpress' },
  { id: '2', name: 'Airport Services', screen: 'Airport' },
  { id: '3', name: 'Food Delivery', screen: 'Food' },
  { id: '4', name: 'Shopping', screen: 'Shopping' },
  { id: '5', name: 'Transport Booking', screen: 'Transport' },
  { id: '6', name: 'Healthcare', screen: 'Healthcare' },
  { id: '7', name: 'Banking & Finance', screen: 'Finance' },
  { id: '8', name: 'Education', screen: 'Education' },
  { id: '9', name: 'Entertainment', screen: 'Entertainment' },
  { id: '10', name: 'EcoTrade Marketplace', screen: 'EcoTrade' },
  { id: '11', name: 'MetroMotors', screen: 'MetroMotors' },
  { id: '12', name: 'Gym & Fitness', screen: 'Fitness' },
  { id: '13', name: 'Maps', screen: 'Maps' },
  { id: '14', name: 'Home Services', screen: 'HomeServices' },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const animatedValue = new Animated.Value(0);

  // Fade-in animation for the header
  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderItem = ({ item, index }) => {
    const translateY = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={{ transform: [{ translateY }], opacity: animatedValue }}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Services', { screen: item.screen })}
          activeOpacity={0.7}
        >
          <Text style={styles.cardText}>{item.name}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Animated.View style={[styles.header, { opacity: animatedValue }]}>
        <Text style={styles.title}>Welcome to Metromatrix</Text>
        <Text style={styles.tagline}>Empowering Smart Cities with AI-Driven Solutions</Text>
      </Animated.View>

      {/* Categories List */}
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Admin')}
          activeOpacity={0.8}
        >
          <Text style={styles.footerButtonText}>Admin Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.8}
        >
          <Text style={styles.footerButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignSelf: 'stretch',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  listContainer: {
    paddingBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: CARD_WIDTH,
    paddingVertical: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  footerButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
