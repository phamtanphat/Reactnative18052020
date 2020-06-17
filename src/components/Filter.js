/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Picker, StyleSheet, View} from 'react-native';

class Filter extends Component {
  state = {
    filterMode: '',
  };
  setFilterMode = (filtermode) => {
    this.setState({filtermode});
  };
  render() {
    console.log('render filter');
    return (
      <View style={styles.containerPickerStyle}>
        <Picker
          selectedValue={this.state.filtermode}
          style={styles.pickerStyle}
          onValueChange={(itemValue) => this.setFilterMode(itemValue)}>
          <Picker.Item label="Show All" value="Show_All" />
          <Picker.Item label="Show Forgot" value="Show_Forgot" />
          <Picker.Item label="Show Memorized" value="Show_Memorized" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  pickerStyle: {
    height: 50,
  },
});

export default Filter;
