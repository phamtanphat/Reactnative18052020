import React, { Component } from 'react'
import { 
    Text, 
    View , 
    StyleSheet, 
    TouchableOpacity , 
    FlatList , 
    Dimensions, 
    TextInput,
} 
from 'react-native'
import Form from './Form';
import Filter from './Filter';
import Word from './Word';


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
            ],
            shouldshowform : false,
            filterMode : 'Show_All',
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
    setFilterMode = (filterMode) => {
        this.setState({filterMode});
    };

    removeWord = (item) => {
        const newWords = this.state.words.filter(word => {
            if(word.id === item.id) return false
            return true
        })
        this.setState({words : newWords})
    }

    onToggleForm = () => {
        this.setState({shouldshowform : !this.state.shouldshowform})
    }

    onAddWord = (en , vn ) => {
        const newWords = [...this.state.words]
        if (!en || !vn){
            alert("Ban chua truyen du thong tin")
            return
        }
        const newWord = {
            id : this.state.words.length + 1,
            en : en ,
            vn : vn ,
            isMemorized : false
        }
        newWords.unshift(newWord)
        alert("Them du lieu thanh cong")
        this.setState({words : newWords})
    }
    
    render() {
        return (
            <View 
                style={styles.container}>
                <Form 
                    onAddWord={this.onAddWord}
                    onToggleForm={this.onToggleForm}
                    shouldshowform={this.state.shouldshowform}/>
                <Filter filterMode={this.state.filterMode}/>
                <View style={styles.containerWord}>
                    <Word 
                        words={this.state.words}
                        filterMode={this.state.filterMode}
                        />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 10,
    },
    containerWord: {
        marginVertical : 10
    }
})