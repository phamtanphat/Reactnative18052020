import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity , StyleSheet} from 'react-native'
import { connect } from 'react-redux'

class Child extends PureComponent {

    render() {
        return (
            <>
                <View style={styles.eventgroup}>
                    <TouchableOpacity 
                        onPress={() => {
                            this.props.dispatch({type : 'INCREASE'})
                        }}
                        style={styles.boxIncrease}>
                        <Text style={styles.increase}>InCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {
                            this.props.dispatch({type : 'DESCREASE'})
                        }}
                        style={styles.boxDescrease}>
                        <Text style={styles.descrease}>DesCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.props.onReset(123213)}
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

export default connect()(Child)