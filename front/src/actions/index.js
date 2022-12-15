import axios from "axios";
import XMLParser from 'react-xml-parser';

export const GET_PODCAST = "GET_PODCAST";
export const GET_DETAILS_PODCAST = "GET_DETAILS_PODCAST";
export const GET_DETAILS_CHAPTER = "GET_DETAILS_CHAPTER";
export const GET_LIST = "GET_LIST"

const URL_BASE = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export function getPodcast() {
  return async function (dispatch) {
    var json = await axios.get(`${URL_BASE}`);
    return dispatch({
      type: "GET_PODCAST",
      payload: json.data.feed.entry,
    });
  };
}

export function getDetailsPodcast(collectionId) {
  return async function (dispatch) {
    var json = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}&media=podcast&entity=podcastEpisode&limit=100`);
    return dispatch({
      type: "GET_DETAILS_PODCAST",
      payload: json.data.results,
    });
  };
}

export function getList(collectionId) {
  return async function (dispatch) {
    var json = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}&media=podcast&entity=podcastEpisode&limit=100`);
    const uno = json.data.results[1].feedUrl
    const lista = await axios.get(`${uno}`)
    var xml = new XMLParser().parseFromString(lista.data)
    console.log(xml, "XML LISTA")
    return dispatch({
      type: "GET_LIST",
      payload: xml.children[0].children
    });
  };
}

export function getChapters(collectionId, episodeGuid) {
  return async function (dispatch) {
    var json = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}/episode/${episodeGuid}`);
    return dispatch({
      type: "GET_DETAILS_CHAPTER",
      payload: json.data,
    });
  };
}


