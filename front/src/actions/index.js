import axios from "axios";
const convert = require("xml-js");

export const GET_PODCAST = "GET_PODCAST";
export const GET_DETAILS_PODCAST = "GET_DETAILS_PODCAST";
export const GET_DETAILS_CHAPTER = "GET_DETAILS_CHAPTER";
export const GET_LIST = "GET_LIST"

const URL_BASE = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

// export const getPodcast = async () => {
//   const json = await axios.get(`${URL_BASE}`);
//   const dataP = json.data.feed.entry;
//   const datos = []
//         for(let i = 1; i < dataP.length; i++)
//           datos.push({
//             collectionId: dataP[i].id.attributes['im:id'],
//             category : dataP[i].category,
//             artist : dataP[i]["im:artist"],
//             contentType: dataP[i]["im:contentType"],
//             image : dataP[i]["im:image"][2],
//             name : dataP[i]["im:name"],
//             price : dataP[i]["im:price"],
//             releaseDate : dataP[i]["im:releaseDate"],
//             link: dataP[i].link,
//             rights : dataP[i].rights,
//             summary : dataP[i].summary,
//             title : dataP[i].title,
//           },)
//   const {data} = datos
//   return data
// }

export function getPodcast() {
  return async function (dispatch) {
    var json = await axios.get(`${URL_BASE}`);
    const data = json.data.feed.entry;
    const datos = []
        for(let i = 1; i < data.length; i++)
          datos.push({
            collectionId: data[i].id.attributes['im:id'],
            category : data[i].category,
            artist : data[i]["im:artist"],
            contentType: data[i]["im:contentType"],
            image : data[i]["im:image"][2],
            name : data[i]["im:name"],
            price : data[i]["im:price"],
            releaseDate : data[i]["im:releaseDate"],
            link: data[i].link,
            rights : data[i].rights,
            summary : data[i].summary,
            title : data[i].title,
          },)
    return dispatch({
      type: "GET_PODCAST",
      payload: datos,
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

export function getList(collectionId, id) {
  return async function (dispatch) {
    var json = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}&media=podcast&entity=podcastEpisode&limit=100`);
    const uno = json.data.results[1].feedUrl ;
    console.log(uno, "url")
    const finalData = []
    const lista = await axios.get(`${uno}`)
    const data = JSON.parse(convert.xml2json(lista.data, { compact: true, spaces: 2 }));
    console.log(data.rss.channel.item[0], "formato objeto")
    data.rss.channel.item.forEach(element => {
      const aux = {
        title:  element.title["_text"] || element.title["_cdata"],
        description:  element.description["_text"] || element.description["_cdata"],
        id: element.guid["_text"] ||  element.guid["_cdata"],
        pubDate: element.pubDate["_text"] || element.pubDate["_cdata"],
        audio: element.enclosure._attributes.url,
        duration: element["itunes:duration"]["_text"] || element["itunes:duration"]["_cdata"],
        collectionId ,
      }
      finalData.push(aux)
    })
    return dispatch({
      type: "GET_LIST",
      payload: finalData, 
    });
  };
}

export function getChapters(idPodcast, id) {
  return async function (dispatch) {
    var json = await axios.get(`/detailPodcast/${idPodcast}/episode/${id}`);
    return dispatch({
      type: "GET_DETAILS_CHAPTER",
      payload: json.data,
    });
  };
}


