# RNApp-intro-slider-Codes

# Flex
```
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{
          flex: 1,
          flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'center',}}>
        <View style={{
            // flex: 1,
            width: 20, height: 20,
            backgroundColor: 'crimson'}} />
        <View style={{
            flex: 0.5,
         width: 20, height: 20,
            backgroundColor: 'yellow'}} />
        <View style={{
         width: 20, height: 20,
            flex: 1,
                      backgroundColor: 'steelblue'}} />
        
      </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);


```
