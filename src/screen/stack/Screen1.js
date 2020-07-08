import React , {useState}from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

export default function Screen1() {
    const [state, setstate] = useState({count : 0})
    return (
        <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
            <Text>Count {state.count} </Text>
            <TouchableOpacity 
            onPress={() => setstate({count : state.count + 1})}
            style={{backgroundColor : 'red', padding : 10}}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
