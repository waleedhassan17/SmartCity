import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EcoTrade = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EcoTrade</Text>
    </View>
  );
};

export default EcoTrade;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
