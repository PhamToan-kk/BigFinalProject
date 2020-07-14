import {createStackNavigator} from '@react-navigation/stack';
import {
  SignIn,
  IntroScreen,
  InvoiceScreen,
  TablesScreen,
  MenuScreen,
  AnalysisScreen,
} from '../containers';

import {HomeScreen} from '../containers/home';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const IntroStack = createStackNavigator();
const InvoiceStack = createStackNavigator();
const TableStack = createStackNavigator();
const MenuStack = createStackNavigator();
const AnalysisStack = createStackNavigator();

export const AuthStackScreens = ({navigation}) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Intro" component={IntroScreen} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export const HomeStackScreens = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>Menu</Text>
          </TouchableOpacity>
        ),
      }}>
      <HomeStack.Screen name="home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export const IntroStackScreens = ({navigation}) => {
  return (
    <IntroStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>Menu</Text>
          </TouchableOpacity>
        ),
      }}>
      <IntroStack.Screen name="intro" component={IntroScreen} />
    </IntroStack.Navigator>
  );
};

export const InvoiceStackScreens = ({navigation}) => {
  return (
    <InvoiceStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>Menu</Text>
          </TouchableOpacity>
        ),
      }}>
      <InvoiceStack.Screen name="invoice" component={InvoiceScreen} />
    </InvoiceStack.Navigator>
  );
};

export const TableStackScreens = ({navigation}) => {
  return (
    <TableStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>Menu</Text>
          </TouchableOpacity>
        ),
      }}>
      <TableStack.Screen name="tables" component={TablesScreen} />
    </TableStack.Navigator>
  );
};

export const MenuStackSCreens = ({navigation}) => {
  return (
    <MenuStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>Menu</Text>
          </TouchableOpacity>
        ),
      }}>
      <MenuStack.Screen name="menu" component={MenuScreen} />
    </MenuStack.Navigator>
  );
};

export const AnalysisStackScreen = ({navigation}) => {
  return (
    <AnalysisStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>Menu</Text>
          </TouchableOpacity>
        ),
      }}>
      <AnalysisStack.Screen name="analysis" component={AnalysisScreen} />
    </AnalysisStack.Navigator>
  );
};
