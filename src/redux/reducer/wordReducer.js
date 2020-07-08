
export default function wordReducer(state = [] , action){
    if (action.type === 'FETCH_DATA_WORD'){
        return action.words
    }
    if (action.type === 'ADD_WORD'){
        const newWords = [...state]
        const newWord = {
            _id : state.length + 1,
            en : action.en ,
            vn : action.vn ,
            isMemorized : false
        }
        newWords.unshift(newWord)
        return newWords
    }
    if (action.type === 'TOGGLE_MEMORIZED'){
        const newWords = state.map(word => {
        if (word._id === action._id){
            return {...word , isMemorized : !word.isMemorized}
        }
        return word
        })
        return newWords
    }
    if (action.type === 'REMOVE_WORD'){
        const newWords = state.filter(word => word._id !== action._id)
        return newWords
    }
    return state
}
  