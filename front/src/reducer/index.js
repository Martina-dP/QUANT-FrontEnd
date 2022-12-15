import { 
  GET_PODCAST,
  GET_DETAILS_PODCAST,
  GET_DETAILS_CHAPTER,
  GET_LIST
} from "../actions/index"

const initialState = {
  podcast: [],
  detailPodscast: {},
  detailChapter: {},
  data:{},
  listChapters: []
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
      case GET_PODCAST :
        const datos = []
        for(let i = 0; i < payload.length; i++)
          datos.push({
            collectionId: payload[i].id.attributes['im:id'],
            category : payload[i].category,
            artist : payload[i]["im:artist"],
            contentType: payload[i]["im:contentType"],
            image : payload[i]["im:image"][2],
            name : payload[i]["im:name"],
            price : payload[i]["im:price"],
            releaseDate : payload[i]["im:releaseDate"],
            link: payload[i].link,
            rights : payload[i].rights,
            summary : payload[i].summary,
            title : payload[i].title,
          },)
        return {
          ...state,
          podcast : datos,
          allPodcast : datos
        };
      case GET_DETAILS_PODCAST:
        return {
          ...state,
          detailPodscast : payload[0],
          data: payload[1],
        };
      case GET_LIST:
        const datosList = []
        for(let i = 0; i < payload.length; i++)
        datosList.push({
            title: payload[i].children[0],
            duration: payload[i].children[13],
            id: payload[i].children[10],
            pubDate: payload[i].children[12],
            description: payload[i].children[2],
            audio: payload[i].children[14],
          },)
        return {
          ...state,
          listChapters: datosList
        };
      case GET_DETAILS_CHAPTER:
        return {
          ...state,
          detailChapter : payload
        };
        default: return state;
    }
}

export default rootReducer;