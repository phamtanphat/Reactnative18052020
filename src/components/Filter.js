import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

class Filter extends Component {
  state = {
    filtermode: 'Show_All',
  };
  setFilterMode = (filtermode) => {
    this.setState({filtermode});
  };
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          onValueChange={(value) => this.setFilterMode(value)}
          items={[
              { label: 'Show All', value: 'Show_All' },
              { label: 'Show Forgot', value: 'Show_Forgot' },
              { label: 'Show Memorized', value: 'Show_Memorized' },
          ]}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding : 20,
    marginHorizontal: 10
  },
  pickerStyle: {
    padding: 50,
  },
});

export default Filter;