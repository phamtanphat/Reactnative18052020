import React, { Component } from 'react'
import {View , StyleSheet , Platform } from 'react-native'
import List from './src/components/List'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Screen1 from './src/screen/stack/Screen1'
import Screen2 from './src/screen/stack/Screen2'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

console.disableYellowBox = true;

// Flex box
class App extends Component {
  state = {
    isShow : true
  }
  setShow = (isShow) => {
    this.setState({isShow})
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Word/> */}
        {/* <Provider store={store}>
          <List/>
        </Provider> */}
        {/* <Form /> */}
        {/* <Filter/> */}
        {/* <Screen1/> */}
        {/* <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
          </Stack.Navigator>
        </NavigationContainer> */}
        {this.state.isShow ? <Screen1 setShow={this.setShow}/> : null}
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
