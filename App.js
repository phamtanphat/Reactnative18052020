import React, { Component } from 'react'
import {View , StyleSheet } from 'react-native'
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
    marginTop : 50 ,
    marginBottom: 25,
    flex: 1,
  }
})

export default App;



