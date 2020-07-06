import { actionType } from "./actionTypes";

function toggleMemorized(id) {
    return {type : actionType.TOGGLE_MEMORIZED ,id }
}

export const actionCreator = {toggleMemorized}