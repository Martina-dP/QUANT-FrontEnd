import { 
  GET_PODCAST,
  GET_DETAILS_PODCAST,
  GET_DETAILS_CHAPTER 
} from "../actions/index"

const initialState = {
  podcast: [],
  allPodcast: [],
  detailPodscast: {},
  detailChapter: {},
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
          detailPodscast : payload
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