import React from 'react';
import { View,StyleSheet} from 'react-native';
import color from 'color';
import {colors} from '../styles'

export const Morph = (props) => {
  const {radius, children, style, revert, borderless, colorshadow} = props;
  const topStyles = StyleSheet.flatten([
    {shadowColor: color(colorshadow).lighten(0.5).alpha(0.5) || color(colors.chelseaCucumber).lighten(0.5).alpha(0.5)},
    styles.morphTop,
    revert && {
      shadowColor: color(colors.chelseaCucumber).darken(0.5).alpha(0.5),
    },
    {borderRadius: radius || 10},
  ]);
  const bottomStyles = StyleSheet.flatten([
    {shadowColor: color(colorshadow).darken(0.5).alpha(0.5) || color(colors.chelseaCucumber).darken(0.5).alpha(0.5)},
    styles.morphBottom,
    revert && {
      shadowColor: color(colors.chelseaCucumber).lighten(0.5).alpha(0.5),
    },
    {borderRadius: radius || 10},
  ]);
  const morphStyles = StyleSheet.flatten([
    borderless && {borderWidth: 0},
    styles.morph,
    style,
    {borderRadius: radius || 10},
  ]);
  return (
    <View style={topStyles}>
      <View style={bottomStyles}>
        <View style={morphStyles}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  morphTop: {
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    // shadowColor: color('#88B04B').lighten(0.5).alpha(0.5),
    justifyContent: 'center',
  },
  morphBottom: {
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    // shadowColor: color(colors.chelseaCucumber).darken(0.5).alpha(0.5),
    justifyContent: 'center',
  },
  morph: {
    borderRadius: 12,
    borderColor: color(colors.chelseaCucumber).darken(0.1).alpha(0.5),
    width: 350,
    height: 70,
    backgroundColor: colors.chelseaCucumber,
    justifyContent: 'center',
  },
});
