import React, { Component } from 'react'
import { Text, View , TextInput , StyleSheet , TouchableOpacity} from 'react-native'

export default class Form extends Component {
    render() {
        return (
            <View style={styles.containerForm}>
                <View style={styles.containerTextInput}>
                    <TextInput style={styles.textInput}/>
                    <TextInput style={styles.textInput}/>
                </View>
                <View style={styles.containerTouchable}>
                    <TouchableOpacity
                        style={styles.touchableAddword}
                    >
                        <Text style={styles.textTouchable}>Add word</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableCancel}
                    >
                        <Text style={styles.textTouchable}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerForm : {
        flex : 1 ,
        justifyContent : 'center',
    },
    containerTouchable: {
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    containerTextInput: {
        width : '100%',
        height : '20%',
        justifyContent : 'space-evenly'
    },
    textInput : {
        borderWidth : 1,
        height: '40%',
        fontSize : 20,
        paddingHorizontal: 10
    },
    touchableAddword : {
        backgroundColor : '#218838',
        padding : 15,
        borderRadius : 10
    },
    textTouchable: {
        color : 'white',
        fontSize : 20,
        fontWeight : '500'
    },
    touchableCancel: {
        backgroundColor : 'red',
        padding : 15,
        borderRadius : 10
    }
})
