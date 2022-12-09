import axios from "axios";

export const GET_ITEM = "GET_ITEM"
export const GET_DETAILS = "GET_DETAILS"
export const POST_ITEM = "POST_ITEM"

// const URL_BASE = "http://front-test-api.herokuapp.com/api"

export function getItems () {
    return async function(dispatch){
        var json = await axios.get(`/product`)
        return dispatch({
            type : "GET_ITEM",
            payload : json.data
        })
    }
}

export function getDetails (id) {
    return async function(dispatch){
        var json = await axios.get(`/product/${id}`)
        return dispatch({
            type : "GET_DETAILS",
            payload : json.data
        })
    }
}

export function postItem () {
    return async function(dispatch){
        var json = await axios.get(`/cart`)
        return dispatch({
            type : "POST_ITEM",
            payload : json.data
        })
    }
}