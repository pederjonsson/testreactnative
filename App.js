import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Blink from './components/Blink'

export default class App extends React.Component {
  render() {
    let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};
    return (
      <View style={styles.container}>
          <Blink interval = '2000' text='Bananas' text2 = 'Androids' imageuri1='https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' imageuri2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fTyXGZzRv47PnA6GQoQHTPJR_QXTOXD2FLG7ed2pbmOcRelbJg' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});





/*class Blink extends React.Component {
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
}*/