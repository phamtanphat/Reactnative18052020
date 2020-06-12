import React, { Component } from 'react'
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native'
import Word from './Word';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 1,
            connection : false
        }
        console.log("constructor")
    }
    UNSAFE_componentWillMount(){
        console.log("componentWillMount")
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState.count);
        return false
    }
    render() {
        console.log("render")
        return (
            <View style={styles.container}>
                <Text >Count  : {this.state.count} </Text>
                <TouchableOpacity
                    onPress={() => this.setState({count : this.state.count + 1})}
                >
                    <Text>Click</Text>
                </TouchableOpacity>
                <Word/>
            </View>
        )
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    conDid
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})