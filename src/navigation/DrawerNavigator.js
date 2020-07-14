import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {SignIn} from '../containers';
import {TabsNavigator} from './TabsNavigator';
import Animated from 'react-native-reanimated';
const Drawer = createDrawerNavigator();
import {StyleSheet } from 'react-native';
import React, {useState} from 'react';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Main"
        onPress={() => props.navigation.navigate('Main')}
      />
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Sign Out"
        onPress={() => props.navigation.navigate('SignOut')}
      />
    </DrawerContentScrollView>
  );
};

export const DrawerNavigator = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyles}
      contentContainerStyle={{flex: 1}}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      drawerContent={(props) => {
        setProgress(props.progress);
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen name="Main">
        {(props) => (
          <TabsNavigator {...props} style={[animatedStyle, {flex: 1}]} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="SignOut">
        {(props) => <SignIn {...props} />}
      </Drawer.Screen>
     
    </Drawer.Navigator>
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
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  drawerItem: {alignItems: 'flex-start', marginVertical: 0},
  drawerLabel: {color: 'white', marginLeft: -16},
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
