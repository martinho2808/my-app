// export const LIST_LINKS_ACTION_CREATOR = "LIST_LINKS_ACTION_CREATOR";
import axios from "axios";
export const ADD_LINKS_ACTION_CREATOR = "ADD_LINKS_ACTION_CREATOR";
export const CLEAR_LINK_ACTION = 'CLEAR_LINK_ACTION';

export const LOAD_LINK_SUCCESS_ACTION = "LOAD_LINK_SUCCESS_ACTION";
export const LOAD_LINK_FAILURE_ACTION = "LOAD_LINK_FAILURE_ACTION";

// Action Creators


export function AddLink() {
  return {
    type: ADD_LINKS_ACTION_CREATOR,
    payload: {
        title: "Bing",
        url: "http://www.bing.com"
    },
  };
}
  export function ClearLink() {
    return {
      type: CLEAR_LINK_ACTION,
    };
  }

  export function loadLinkSuccessAction(links) {
    console.log(Date.now(), "sccuess");
    return {
      type: LOAD_LINK_SUCCESS_ACTION,
      payload: links,
    };
  }
  
  export function loadLinkFailureAction() {
    return {
      type: LOAD_LINK_FAILURE_ACTION,
    };
  }


  export function loadLinkThunk() {
    return (dispatch) => {
      // async
      axios
        .get("https://www.reddit.com/r/programming.json")
        .then((response) => {
        
          let threads = response.data;
          let links = threads.data.children.map((link) => ({
            //title: link.data.title,
            url: link.data.url,
          }));
          // start the sync request
          dispatch(loadLinkSuccessAction(links));
        })
        .catch((error) => {
          console.log("FAILURE ", error);
          dispatch(loadLinkFailureAction());
        });
    };
  }
  