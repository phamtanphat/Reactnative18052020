import React, { Component } from 'react'
import { Text, View } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={{
        marginTop : 50 ,
        backgroundColor : 'darkseagreen', 
        borderRadius: 5 , 
        marginHorizontal : 10,
        padding: 20,
        borderColor : 'black',
        borderWidth : 1,
      }}>
        <Text
          style={{
            fontSize : 20 , 
            fontWeight : '300' ,
            textAlign: 'center',
            width : 200,
            height: 300,
            backgroundColor: 'red',
        }}>
          Name : Pham Tan Phat
        </Text>
      </View>
    )
  }
}

export default App;



