import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MetroExpress from './Services/MetroExpress';
import Airport from './Services/Airport';
import Food from './Services/Food';
import Shopping from './Services/Shopping';
import Transport from './Services/Transport';
import Healthcare from './Services/Healthcare';
import Finance from './Services/Finance';
import Education from './Services/Education';
import Entertainment from './Services/Entertainment';
import EcoTrade from './Services/EcoTrade';
import MetroMotors from './Services/MetroMotors';
import Fitness from './Services/Fitness';
import Maps from './Services/Maps';
import HomeServices from './Services/HomeServices';

const Stack = createStackNavigator();

const ServiceNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="MetroExpress" component={MetroExpress} />
      <Stack.Screen name="Airport" component={Airport} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Shopping" component={Shopping} />
      <Stack.Screen name="Transport" component={Transport} />
      <Stack.Screen name="Healthcare" component={Healthcare} />
      <Stack.Screen name="Finance" component={Finance} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="Entertainment" component={Entertainment} />
      <Stack.Screen name="EcoTrade" component={EcoTrade} />
      <Stack.Screen name="MetroMotors" component={MetroMotors} />
      <Stack.Screen name="Fitness" component={Fitness} />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="HomeServices" component={HomeServices} />
    </Stack.Navigator>
  );
};

export default ServiceNavigator;
