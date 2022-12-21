import { 
  GET_PODCAST,
  GET_DETAILS_PODCAST,
  GET_DETAILS_CHAPTER,
  GET_LIST
} from "../actions/index"

const initialState = {
  podcast: [],
  detailPodscast: [],
  allDetailPodscast: {},
  data:{},
  listChapters: {},
  allListChapters : []
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
      case GET_PODCAST :
        return {
          ...state,
          podcast : payload,
          allPodcast : payload
        };
      case GET_DETAILS_PODCAST:
        return {
          ...state,
          detailPodscast : payload[0],
          data: payload[1],
        };
      case GET_LIST:
        return {
          ...state,
          listChapters: payload
        };
      case GET_DETAILS_CHAPTER:
        console.log(payload, "VEAOS QUE LLEGA" )
        return {
          ...state,
          detailChapter : payload
        };
        default: return state;
    }
}

export default rootReducer;