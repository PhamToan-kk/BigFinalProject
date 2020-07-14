import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerNavigator} from './DrawerNavigator'
import {TabsNavigator} from './TabsNavigator'
import {AuthStackScreens} from './StacksNavigator'
const AppXX = ({
    params,
}) => {
    const isSignIn = false
    return(
        <NavigationContainer>
               {isSignIn ?  <DrawerNavigator/> : <AuthStackScreens/> }
        </NavigationContainer>
    )
};

export default AppXX;
