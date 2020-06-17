import React, { Component } from 'react'
import { Text, View , Modal , TouchableOpacity , StyleSheet} from 'react-native'

export default class Filter extends Component {
    render() {
        return (
            <View style={styles.containerFilter}>
                <TouchableOpacity
                    style={styles.buttonDialog}
                >
                    <Text> Open Dialog </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerFilter: {
        flex :1 , 
        justifyContent : 'center',
        alignItems: 'center'
    },
    buttonDialog: {
        backgroundColor : 'orange',
        padding : 20
    }
})
