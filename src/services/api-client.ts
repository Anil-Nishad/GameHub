import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'92bfc07f42b84b569f4af9560b30a4f7'
    }
})