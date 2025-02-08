import { legacy_createStore } from "redux";
import playLists from "../data";


const initalState = { 
    playLists : playLists,
    likedSong: {},
    activesongs : { 
        song : null ,
        imageUrl: null , 
    },
}

const reducer = (state = initalState, action)=>{ 
    return state;
}

const store = legacy_createStore(reducer);

export default store ; 