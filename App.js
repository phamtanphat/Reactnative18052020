import React, { Component } from 'react'
import {View , StyleSheet , Platform } from 'react-native'
import Word from './src/components/Word'

// Flex box
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Word/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop : Platform.OS === 'ios' ? 50 : 0 ,
    marginBottom: Platform.OS === 'ios' ? 25 : 0 ,
    flex: 1,
  }
})

export default App;



