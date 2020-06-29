import React, { Component } from 'react'
import {View , StyleSheet , Platform } from 'react-native'
import Word from './src/components/Word'
import Box from './src/components/Box'
import List from './src/components/List'
import Form from './src/components/Form'
import Filter from './src/components/Filter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore((state = 0, action) => {
  // dinh nghia ra action
  if (action.type === 'INCREASE'){
    return state + 1
  }
  if (action.type === 'DESCREASE'){
    return state - 1
  }
  if (action.type === 'RESET'){
    return action.reset
  }
  return state;
})


// Flex box
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Word/> */}
        <Provider store={store}>
          <Box />
        </Provider>
        {/* <List/> */}
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


