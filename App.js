import React, { Component } from 'react'
import {View , StyleSheet , Platform } from 'react-native'
import Word from './src/components/Word'
import Box from './src/components/Box'
import List from './src/components/List'
import Form from './src/components/Form'


// Flex box
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Word/> */}
        {/* <Box/> */}
        {/* <List/> */}
        <Form />
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



