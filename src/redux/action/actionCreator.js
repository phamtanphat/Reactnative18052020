import { actionType } from "./actionTypes";
import axios from "axios";

import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
    baseURL: "https://servernode18062020.herokuapp.com"
});

const Endpoint = EndpointFactory(axiosInstance);

const wordEndPoint = new Endpoint("/word"); 

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

function fetchDataWords() {
    return (dispatch) => {
        wordEndPoint.get()
        .then(reponse => console.log(reponse))
        .catch(error =>  console.log(error.message))
    }
}

export const actionCreator = {
    toggleMemorized,
    removeWord,
    addWord,
    toggleForm,
    setFilterMode,
    fetchDataWords,
}