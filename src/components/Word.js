import React, { Component } from 'react'
import { Text, View , StyleSheet , Dimensions} from 'react-native'

export default class Word extends Component {
    render() {
        const one = {en : 'One' , vn : 'Mot'}
        return (
            <View style={styles.container}>
                <Text style={styles.textEn}> One </Text>
                <Text style={styles.textVn}> Mot </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection : 'row',
        justifyContent: 'space-evenly'
    },
    textEn: {
        color : '#45B157',
        fontSize : Dimensions.get("window").width / 15,
        fontWeight: '500'
    },
    textVn: {
        color : '#DA2846',
        fontSize : Dimensions.get("window").width / 15,
        fontWeight: '500'
    },
})
