import { baseAxios, api_key } from '../index'

export const topRatedTvShows = (dispatch, cb) => {
    baseAxios.get(`/tv/top_rated?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_TVSHOWS", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}

export const popularTvShows = (dispatch, cb) => {
    baseAxios.get(`/tv/popular?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_TVSHOWS", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}

export const onAirTvShows = (dispatch, cb) => {
    baseAxios.get(`/tv/on_the_air?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_TVSHOWS", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}

export const todayTvShows = (dispatch, cb) => {
    baseAxios.get(`/tv/airing_today?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_TVSHOWS", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}
