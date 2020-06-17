import React, { Component } from 'react'
import { Text, View , Modal , TouchableOpacity , StyleSheet , TouchableHighlight} from 'react-native'

export default class Filter extends Component {
    state = {
        modalVisible: false
    }
    setModalVisible = () => {
        this.setState({modalVisible : !this.state.modalVisible})
    }
    render() {
        return (
            <View style={styles.containerFilter}>
                <TouchableOpacity
                    onPress={() => this.setModalVisible()}
                    style={styles.buttonDialog}
                >
                    <Text> Open Dialog </Text>
                </TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                    >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                        this.setModalVisible();
                        }}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                    </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerFilter: {
        flex :1 , 
        justifyContent : 'center',
        alignItems: 'center'
    },
    buttonDialog: {
        backgroundColor : 'orange',
        padding : 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
