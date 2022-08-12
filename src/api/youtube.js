import axios from "axios";

const KEY="AIzaSyC18ROSg4jseSjzSy08L08Z5uReS9ABrjY";


export default axios.create({
baseURL:"https://www.googleapis.com/youtube/v3",
params:{
    part:"snippet",
    type:"video",
    maxResults:5,
    key:"AIzaSyC18ROSg4jseSjzSy08L08Z5uReS9ABrjY",

}
})

