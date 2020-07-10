import React from 'react'
import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'

export default function Screen2(props) {
    return (
        <View style={styles.container}>
            <Text>{props.route.params.name}</Text>
            <Image 
                source={require('../../../assets/images/hinhavatar.jpeg')}/>
            <TouchableOpacity 
                onPress={() => {
                    props.route.params.settitle("Dang xuat")
                    props.navigation.goBack()
                }}
                style={styles.buttondangxuat}>
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
