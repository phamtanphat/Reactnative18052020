import React, { Component } from 'react'
import { Text, View , StyleSheet , TouchableOpacity } from 'react-native'
import Child from './Child'

export default class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 1,
            phonenumber : 0
        }
    }
    onIncrease = () => {
        this.setState({count : this.state.count + 1})
    }
    onDescrease = () => {
        this.setState({count : this.state.count - 1})
    }
    onReset = () =>{
        this.setState({count : 0})
    }
    // khi udapte gia tri : nen tao ra 1 gia tri moi , khong nen xu ly truc tiep cho gia tri
    render() {
        console.log("Render Box")
        return (
            <View style={styles.container}>
                <Text style={styles.textCount}> 
                    Count :  {this.state.count}
                </Text>
                <Text>
                    Phone Number : {this.state.phonenumber}
                </Text>
                <TouchableOpacity
                    onPress={() => this.setState({phonenumber : Math.random()})}
                >
                    <Text>Random Number</Text>
                </TouchableOpacity>
                <Child 
                    value={this.state.count}
                    onIncrease={this.onIncrease}
                    onDescrease={this.onDescrease}
                    onReset={this.onReset}
                />
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
