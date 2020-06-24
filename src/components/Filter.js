import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

class Filter extends Component {
  state = {
    filterMode: 'Show_All',
    filterSelected: null,
  };
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          onValueChange={(value) => this.state.filterSelected = value}
          onDonePress={() => {
            this.setState({filterMode : this.state.filterSelected}, () => {
              this.props.onSetFilterMode(this.state.filterMode)
            })
           
          }}
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
  },
  pickerStyle: {
    padding: 50,
  },
});

export default Filter;
