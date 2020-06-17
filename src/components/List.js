import React, { Component } from 'react'
import { 
    Text, 
    View , 
    StyleSheet, 
    TouchableOpacity , 
    FlatList , 
    Dimensions, 
    TextInput
} 
from 'react-native'


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

    removeWord = (item) => {
        const newWords = this.state.words.filter(word => {
            if(word.id === item.id) return false
            return true
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
                        onPress={() => this.removeWord(item)}
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
                <View style={styles.containerTextInput}>
                    <TextInput 
                        onChangeText={text => {
                            this.state.text = text
                        }}
                        placeholder="English"
                        style={styles.textInput}/>
                    <TextInput 
                        placeholder="Vietnamese"
                        style={styles.textInput}/>
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
    },
    containerTouchable: {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginBottom : 10
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
        paddingHorizontal: 10,
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