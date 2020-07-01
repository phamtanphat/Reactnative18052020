import React, { Component } from 'react'
import { 
    View , 
    StyleSheet, 
} 
from 'react-native'
import Form from './Form'; 
import Filter from './Filter';
import Word from './Word';
import {connect} from 'react-redux'

class List extends Component {
    render() {
        return (
            <View 
                style={styles.container}>
                <Form />
                <Filter />
                <View style={styles.containerWord}>
                    <Word />
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

export default connect()(List)