import React, { Component } from 'react'
import { Text, View , StyleSheet , Dimensions} from 'react-native'

export default class Word extends Component {
    render() {
        console.log("render component Word")
        const words = [
            {id : 1 , en : 'One' , vn : 'Mot' , isMemorized : true},
            {id : 2 , en : 'Two' , vn : 'Hai' , isMemorized : false},
            {id : 3 , en : 'Three' , vn : 'Ba' , isMemorized : false},
            {id : 4 , en : 'Four' , vn : 'Bon' , isMemorized : false},
            {id : 5 , en : 'Five' , vn : 'Nam' , isMemorized : true},
        ]
        return (
            <View style={styles.container}>
               {words.map((value,index) => {
                   return (
                    <View style={styles.wordgroup} key={index}>
                        <Text style={styles.textEn}>{value.en}</Text>
                        <Text style={styles.textVn}> 
                            {value.isMemorized ? '----' : value.vn}
                        </Text>
                    </View>
                   )
               })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
    wordgroup: {
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
