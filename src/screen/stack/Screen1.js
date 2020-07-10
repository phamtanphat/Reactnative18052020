import React , {useState} from 'react'
import { Text, View , TouchableOpacity, StyleSheet, TextInput} from 'react-native'

export default function Screen1(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.texttile}>Dang nhap he thong</Text>
            <TextInput 
                placeholder="Nhap tai khoan"
                style={styles.textinput}/>
            <TextInput 
                placeholder="Nhap mat khau"
                style={styles.textinput}/>
            <TouchableOpacity
                style={styles.buttondangnhap}
                >
                <Text style={styles.textdangnhap}>Dang nhap</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1 ,
        paddingTop: 50,
        alignItems : 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f5f5dc'
    },
    texttile: {
        fontSize : 30,
        color : 'red',
    },
    textinput: {
        width: '100%',
        height : 40,
        borderWidth : 1,
        borderRadius : 5,
        marginTop: 20,
        paddingLeft: 10,
        fontSize : 20
    },
    buttondangnhap: {
        marginTop : 20,
        backgroundColor : 'green',
        padding : 20,
        borderRadius : 5
    },
    textdangnhap: {
        color : 'white',
        fontSize : 20
    }
})


// destructuring 
