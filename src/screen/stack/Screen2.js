import React from 'react'
import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'


export default function Screen2() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/images/hinhavatar.jpeg')}/>
            <TouchableOpacity style={styles.buttondangxuat}>
                <Text style={styles.textdangxuat}>Dang xuat</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent : 'center',
        alignItems: 'center',
        flex : 1
    },
    buttondangxuat: {
        marginTop : 20,
        backgroundColor : 'red',
        padding : 20,
        borderRadius : 5
    },
    textdangxuat: {
        color : 'white',
        fontSize : 20
    }
})
