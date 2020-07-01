import React, { Component } from 'react'
import {View , StyleSheet , Platform } from 'react-native'
import List from './src/components/List'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const defaultState = {
  words : [
    {id : 1 , en : 'One' , vn : 'Mot' , isMemorized : true},
    {id : 2 , en : 'Two' , vn : 'Hai' , isMemorized : false},
    {id : 3 , en : 'Three' , vn : 'Ba' , isMemorized : false},
    {id : 4 , en : 'Four' , vn : 'Bon' , isMemorized : false},
    {id : 5 , en : 'Five' , vn : 'Nam' , isMemorized : true},
  ],
  shouldshowform : false,
  filterMode : 'Show_All',
}

const defaultWords = [
  {id : 1 , en : 'One' , vn : 'Mot' , isMemorized : true},
  {id : 2 , en : 'Two' , vn : 'Hai' , isMemorized : false},
  {id : 3 , en : 'Three' , vn : 'Ba' , isMemorized : false},
  {id : 4 , en : 'Four' , vn : 'Bon' , isMemorized : false},
  {id : 5 , en : 'Five' , vn : 'Nam' , isMemorized : true},
]

function wordReducer(state = defaultWords , action){
  if (action.type === 'ADD_WORD'){
    const newWords = [...state]
    const newWord = {
        id : state.length + 1,
        en : action.en ,
        vn : action.vn ,
        isMemorized : false
    }
    newWords.unshift(newWord)
    return newWords
  }
  if (action.type === 'TOGGLE_MEMORIZED'){
    const newWords = state.map(word => {
      if (word.id === action.id){
        return {...word , isMemorized : !word.isMemorized}
      }
      return word
    })
    return newWords
  }
  if (action.type === 'REMOVE_WORD'){
    const newWords = state.filter(word => word.id !== action.id)
    return newWords
  }
  return state
}
function shouldshowformReducer(state = false , action) {
  if (action.type === "TOGGLE_FORM"){
    return !state
  }
  if (action.type === 'ADD_WORD'){
    return !state
  }
  return state
}
function filterModeReducer(state = 'Show_All' , action) {
  if (action.type === 'SET_FILTER_MODE'){
    return action.filterMode
  }
  return state
}

const reducer = combineReducers({
  words : wordReducer,
  shouldshowform : shouldshowformReducer,
  filterMode : filterModeReducer
})
const store = createStore(reducer)

console.disableYellowBox = true;

// Flex box
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Word/> */}
        <Provider store={store}>
          <List/>
        </Provider>
        {/* <Form /> */}
        {/* <Filter/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop : Platform.OS === 'ios' ? 50 : 0 ,
    marginBottom: Platform.OS === 'ios' ? 25 : 0 ,
    flex: 1,
  }
})

export default App;
