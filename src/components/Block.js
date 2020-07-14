import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export class Block extends Component {
  
  render() {
    const { flex, row, center, middle, right, space, style, children, ...props } = this.props;
    const blockStyle= [
        styles.block,
        flex && {flex},
        flex ==='disable' && {flex: 0},
        row && styles.row ,
        middle && styles.middle,
        center && styles.center,
        right && styles.right,
        space && { justifyContent: `space-${space}` },
        row && styles.row,
        style,
    
    ]
    return (
      <View style={blockStyle}>
        {children}
      </View>
    );
  }
}

const styles =  StyleSheet.create({
    block:{
        flex:1
    },
    row:{
        flexDirection:'row'
    },
    middle:{
        justifyContent:'center'
    },
    center:{
        alignItems:'center'
    },
    right: {
        justifyContent: 'flex-end'
    },
})