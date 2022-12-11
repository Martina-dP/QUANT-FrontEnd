import axios from "axios";

export const GET_PODCAST = "GET_PODCAST"
export const GET_DETAILS_PODCAST = "GET_DETAILS_PODCAST"
export const GET_DETAILS_CHAPTER = "GET_DETAILS_CHAPTER"

const URL_BASE = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
const URL_DETAILS = `https://itunes.apple.com/lookup?id=`

export function getPodcast () {
    return async function(dispatch){
        var json = await axios.get(`${URL_BASE}`)
        return dispatch({
            type : "GET_PODCAST",
            payload : json.data.feed.entry
        })
    }
}

export function getDetailsPodcast (collectionId) {
    return async function(dispatch){
        var json = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}`)
        return dispatch({
            type : "GET_DETAILS_PODCAST",
            payload : json.data.results
        })
    }
}

export function getDetailsChapter (podcastId, episodeId) {
    return async function(dispatch){
        var json = await axios.get(`https://itunes.apple.com/lookup?id=${podcastId}/episode/${episodeId} `)
        return dispatch({
            type : "GET_DETAILS_CHAPTER",
            payload : json.data
        })
    }
}