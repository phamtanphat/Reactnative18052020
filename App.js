import React, { Component } from 'react'
import {View , StyleSheet , Platform } from 'react-native'
import List from './src/components/List'

import { Provider } from 'react-redux'
import store from './src/redux/store'

console.disableYellowBox = true;

// Flex box
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Word/> */}
        <Provider store={store}>
          <List/>
        </Provider>
        {/* <Form /> */}
        {/* <Filter/> */}
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
