import { ADD_LINKS_ACTION_CREATOR, CLEAR_LINK_ACTION, LOAD_LINK_SUCCESS_ACTION,LOAD_LINK_FAILURE_ACTION } from "./action";

const initialState={
    linkList:[
        {title:"Google",url:"https://www.google.com"},
        {title:"Yahoo",url:"https://www.yahoo.com"},
        {title:"Bing",url:"https://www.bing.com"},
        {title:"Duckduckgo",url:"https://www.duckduckgo.com"}
        ]
    }

    export function linkReducer( state=initialState, action){
        switch(action.type){
            case ADD_LINKS_ACTION_CREATOR:
                return{
                linkList:state.linkList.concat([action.payload]),
                };
       
            case CLEAR_LINK_ACTION:

                return {
        
                    linkList: [] // Reset the links
        
                }
            case LOAD_LINK_SUCCESS_ACTION:
                    //console.log(Date.now(), "reducer, thunk");
              
                return {
                      linkList: state.linkList.concat([...action.payload]),
                      loading: false,
                };
            case LOAD_LINK_FAILURE_ACTION:
                return {
                    state,
                };
            default:return state;
            }
        }