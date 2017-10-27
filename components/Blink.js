import React from 'react';

import { AppRegistry, Text, View, Image } from 'react-native';

export class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showText: true, showText2: true, showImage1: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText, showText2: !previousState.showText2, showImage1: !previousState.showImage1};
      });
    }, parseInt(this.props.interval));
  }

  render() {
    let imageUri = this.state.showImage1 ? this.props.imageuri1 : this.props.imageuri2;
    let display = this.state.showText ? this.props.text : this.props.text2;
    
    return (
      
      <View>
      <Image source={{ uri: imageUri}} style={{width: 193, height: 110}}/>
      <Text>{display}</Text>
      </View>
    );
  }
}
module.exports = Blink;

