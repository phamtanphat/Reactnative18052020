import React , {useState} from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

export default function Screen1() {
    const [count, setCount] = useState(0)
    return (
        <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
            <Text>Count {count}</Text>
            <TouchableOpacity 
            onPress={() => setCount(count + 1)}
            style={{backgroundColor : 'red', padding : 10}}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})


// destructuring 
