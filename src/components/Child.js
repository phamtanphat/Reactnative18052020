import React, { Component } from 'react'
import { Text, View , TouchableOpacity , StyleSheet} from 'react-native'

export default class Child extends Component {
    render() {
        return (
            <>
                <View style={styles.eventgroup}>
                    <TouchableOpacity 
                        onPress={() => this.props.onIncrease()}
                        style={styles.boxIncrease}>
                        <Text style={styles.increase}>InCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.props.onDescrease()}
                        style={styles.boxDescrease}>
                        <Text style={styles.descrease}>DesCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.props.onReset()}
                        style={styles.boxReset}>
                        <Text style={styles.reset}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    eventgroup: {
        width : '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop : 20
    },
    boxIncrease: {
        borderRadius : 10,
        backgroundColor: 'green'
    },
    boxDescrease: {
        borderRadius : 10,
        backgroundColor: 'red',
    },
    boxReset: {
        borderRadius : 10,  
        backgroundColor: 'orange',
    },
    increase: {
        fontSize : 20,
        padding: 10,
        color : 'white',
    },
    descrease: {
        fontSize : 20,
        padding: 10,
        color : 'white'
    },
    reset: {
        fontSize : 20,
        padding: 10,
        color : 'white'
    },
})
