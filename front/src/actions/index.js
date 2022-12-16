import axios from "axios";
const convert = require("xml-js");

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
    const finalData = []
    const lista = await axios.get(`${uno}`)
    const data = JSON.parse(
      convert.xml2json(lista.data, { compact: true, spaces: 2 })
    );
    console.log(data.rss.channel.item[0], "OBJETO DATA") 
    data.rss.channel.item.forEach(element => {
      const aux = {
        title:  element.title["_text"] || element.title["_cdata"],
        description: element.description["_cdata"] || element.description["_text"],
        id: element.guid["_text"] ||  element.guid["_cdata"],
        pubDate: element.pubDate["_text"] || element.pubDate["_cdata"],
        audio: element.enclosure._attributes.url,
        duration: element["itunes:duration"]["_text"] || element["itunes:duration"]["_cdata"],
      }
      finalData.push(aux)
    })
    return dispatch({
      type: "GET_LIST",
      payload: finalData
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


