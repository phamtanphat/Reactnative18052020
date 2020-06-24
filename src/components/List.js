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
import RNPickerSelect from 'react-native-picker-select';


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
            en : '',
            vn : '',
            shouldshowform : false,
            filterMode : 'Show_All',
            filterSelected: '',
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

    itemFlatList = (item ,index) =>{
        const {filterMode} = this.state;
        // Cac truong hop phai return giao dien
        // Th1 : Show_All
        // Th2 : Show_Forgot va item.memorized
        // Th3 : Show_memorized va !item.memorized
        if (filterMode === 'Show_Forgot' && !item.isMemorized){
            return null
        } else if (filterMode === 'Show_Memorized' && item.isMemorized){
            return null
        } else {
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
        
        
    }

    toggleForm = () => {
        this.setState({shouldshowform : !this.state.shouldshowform})
    }

    addWord = () => {
        const newWords = [...this.state.words]
        const {en , vn} = this.state
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
        this.setState({words : newWords , en : '' , vn : ''})
        this.inputEn.clear()
        this.inputVn.clear()
    }
    renderForm = (shouldshowform) => {
        if (shouldshowform){
            return (
                <View >
                    <View style={styles.containerTextInput}>
                    <TextInput 
                        ref={ref =>  this.inputEn = ref }
                        onChangeText={text =>  this.state.en = text}
                        placeholder="English"
                        style={styles.textInput}/>
                    <TextInput 
                        ref={ref =>  this.inputVn = ref }
                        onChangeText={text => this.state.vn = text}
                        placeholder="Vietnamese"
                        style={styles.textInput}/>
                    </View>
                    <View style={styles.containerTouchable}>
                        <TouchableOpacity
                            onPress={() => this.addWord()}
                            style={styles.touchableAddword}
                        >
                            <Text style={styles.textTouchable}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.toggleForm()}
                            style={styles.touchableCancel}
                        >
                            <Text style={styles.textTouchable}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            );
        } else {
            return (
                <TouchableOpacity
                    style={styles.buttonOpenForm}
                    onPress={() => this.toggleForm()}>
                    <Text style={styles.textOpenForm}>+</Text>
                </TouchableOpacity>
            )
        }
    }

    renderFilter = () => {
        return (
            <View style={styles.containerPickerStyle}>
                <RNPickerSelect
                    onValueChange={(value) => this.state.filterSelected = value}
                    onDonePress={() => this.setState({filterMode : this.state.filterSelected})}
                    items={[
                        { label: 'Show All', value: 'Show_All' },
                        { label: 'Show Forgot', value: 'Show_Forgot' },
                        { label: 'Show Memorized', value: 'Show_Memorized' },
                    ]}
                />
            </View>
        )
    }
    render() {
        return (
            <View 
                style={styles.container}>
                {this.renderForm(this.state.shouldshowform)}
                {this.renderFilter()}
                
                <FlatList 
                    showsVerticalScrollIndicator={false}
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
        height: 150,
        justifyContent : 'space-evenly'
    },
    textInput : {
        borderWidth : 1,
        height: 60,
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
    },
    buttonOpenForm: {
        width : '100%',
        height : 50,
        backgroundColor : '#45B157',
        borderRadius : 5,
        marginBottom : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    textOpenForm: {
        color : 'white',
        fontSize : 30
    },
    containerPickerStyle: {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: 'black',
        padding : 10,
        marginBottom: 10,
    },

})