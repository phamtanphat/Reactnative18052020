import React, { Component } from 'react'
import { Text, View , StyleSheet , TouchableOpacity } from 'react-native'
import Child from './Child'
import { connect } from 'react-redux'

class Box extends Component {
    // khi udapte gia tri : nen tao ra 1 gia tri moi , khong nen xu ly truc tiep cho gia tri
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textCount}> 
                    Count :  {this.props.count}
                </Text>
                <Child />
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

const mapStateToProps = function(state){
    return {count : state}
}

export default connect(mapStateToProps)(Box)


