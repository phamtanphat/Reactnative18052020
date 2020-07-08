import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import { actionCreator } from '../redux/action/actionCreator';

class Filter extends Component {
  state = {
    filterMode: 'Show_All',
  };
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          value={this.state.filterMode}
          onValueChange={(value) => this.setState({filterMode : value})}
          onDonePress={() => {
              this.props.setFilterMode(this.state.filterMode)
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

const maptStateToProps = function (state) {
  return {filterMode : state.filterMode}
}
export default connect(maptStateToProps,actionCreator)(Filter);
