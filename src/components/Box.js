import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import Child from './Child'

export default class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 1
        }
    }
    increase(){
        this.setState({count : this.state.count + 1})
    }
    descrease(){
        this.setState({count : this.state.count - 1})
    }
    reset(){
        this.setState({count : 0})
    }
    // khi udapte gia tri : nen tao ra 1 gia tri moi , khong nen xu ly truc tiep cho gia tri
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textCount}> 
                    Count :  {this.state.count}
                </Text>
                <Child/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        justifyContent : 'center',
        alignItems : 'center'
    },
    textCount: {
        fontSize : 30,
        color : 'red',
        fontFamily : 'Senopathi Free Personal Use',
    }
})
