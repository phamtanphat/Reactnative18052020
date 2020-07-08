import { actionType } from "./actionTypes";

function toggleMemorized(id) {
    return {type : actionType.TOGGLE_MEMORIZED ,id }
}

function removeWord(id) {
    return {type : actionType.REMOVE_WORD , id }
}

function addWord(en , vn) {
    return {type : actionType.ADD_WORD , en , vn}
}

function toggleForm() {
    return {type : actionType.TOGGLE_FORM }
}

function setFilterMode(filterMode) {
    return {type : actionType.SET_FILTER_MODE , filterMode}
}

export const actionCreator = {toggleMemorized,removeWord,addWord,toggleForm,setFilterMode}