import React, { Component } from 'react'
import { Text, View , StyleSheet, TouchableOpacity , FlatList , Dimensions} from 'react-native'


export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            words : [
                {id : 1 , en : 'One' , vn : 'Mot' , isMemorized : true},
                {id : 2 , en : 'Two' , vn : 'Hai' , isMemorized : false},
                {id : 3 , en : 'Three' , vn : 'Ba' , isMemorized : false},
                {id : 4 , en : 'Four' , vn : 'Bon' , isMemorized : false},
                {id : 5 , en : 'Five' , vn : 'Nam' , isMemorized : true},
            ]
        }
    }

    toggleMemorized = (item) => {
        const newWords = this.state.words.map(word => {
            if (word.id === item.id){
                const newWord = {...item , isMemorized : !item.isMemorized}
                return newWord
            }
            return word
        })
        this.setState({words : newWords})
    }

    itemFlatList = (item ,index) =>{
        return (
            <View style={styles.wordgroup} >
                <View style={styles.textgroup}>
                    <Text style={styles.textEn}>{item.en}</Text>
                    <Text style={styles.textVn}> 
                        {item.isMemorized ? '----' : item.vn}
                    </Text>
                </View>
                <View style={styles.textgroup}>
                    <TouchableOpacity
                        onPress={() => this.toggleMemorized(item)}
                        style={item.isMemorized ? styles.buttonisForgot : styles.buttonisMemorized}
                    >
                        <Text 
                            style={styles.textisMemorized}>
                            {item.isMemorized ? "Forgot" : "isMemorized"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.buttonRemove}
                    >
                        <Text style={styles.textRemove}>Remove</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
        
    }

    render() {
        return (
            <View 
                style={styles.container}>
                <FlatList 
                    extraData={this.state.words}
                    keyExtractor={(item,index) => item.id.toString()}
                    data={this.state.words}
                    renderItem={({item,index}) => this.itemFlatList(item,index)}
                    ItemSeparatorComponent={() => {
                        return <View style={styles.separator}/>
                    }}
               />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 10,
    },
    wordgroup: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F0F0',
        borderRadius : 5,
        paddingVertical : 10
    },
    textgroup: {
        flexDirection : 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
    buttonisMemorized : {
        padding : 10,
        backgroundColor : 'red',
        borderRadius : 5
    },
    buttonisForgot: {
        padding : 10,
        backgroundColor : '#218838',
        borderRadius : 5
    },
    buttonRemove: {
        padding : 10,
        backgroundColor : '#E0A800',
        borderRadius : 5
    },
    textisMemorized: {
        fontSize : 20,
        color : 'white'
    },
    textRemove: {
        fontSize : 20,
        color : 'white'
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
    separator: {
        height : 10
    }
})