import React, { Component } from 'react'
import { Text, View , StyleSheet , TouchableOpacity , Alert} from 'react-native'

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
                <View style={styles.eventgroup}>
                    <TouchableOpacity 
                        onPress={() => this.increase()}
                        style={styles.boxIncrease}>
                        <Text style={styles.increase}>InCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.descrease()}
                        style={styles.boxDescrease}>
                        <Text style={styles.descrease}>DesCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.reset()}
                        style={styles.boxReset}>
                        <Text style={styles.reset}>Reset</Text>
                    </TouchableOpacity>
                </View>
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
    },
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