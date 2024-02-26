import { GET_NEWS } from "./types";
import axios from "axios";
import base_url from './config'

export const get_news_all = () => async dispatch => {
    try {
        const news = await axios.get(`${base_url}/cricket/news/all`, {
            headers: { Authorization: localStorage.token }
        });
        dispatch({
            type: GET_NEWS,
            payload: news.data
        });
    } catch (err) {
    }
}