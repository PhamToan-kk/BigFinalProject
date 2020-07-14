import {
  HomeStackScreens,
  TableStackScreens,
  MenuStackSCreens,
  InvoiceStackScreens,
  AnalysisStackScreen,
} from './StacksNavigator';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {VectorIcon} from '../components';
import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';

const Tab = createBottomTabNavigator();


export const TabsNavigator = (props) => {
  const {style} = props;
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: 'pink'}}
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
        shifting={true}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreens}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size = 25}) => (
              <VectorIcon
                MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Table1"
          component={TableStackScreens}
          options={{
            tabBarLabel: 'Table',
            tabBarIcon: ({color, size = 25}) => (
              <VectorIcon
                MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuStackSCreens}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({color, size = 25}) => (
              <VectorIcon
                MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Invoices"
          component={InvoiceStackScreens}
          options={{
            tabBarLabel: 'Invoices',
            tabBarIcon: ({color, size = 25}) => (
              <VectorIcon
                MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Analysis"
          component={AnalysisStackScreen}
          options={{
            tabBarLabel: 'Analysis',
            tabBarIcon: ({color, size = 25}) => (
              <VectorIcon
                MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 10,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
});
