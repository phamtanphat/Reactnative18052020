import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Word from './Word';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 1
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text >Count  : {this.state.count} </Text>
                <Word/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})