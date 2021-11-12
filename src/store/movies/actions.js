import { baseAxios, api_key } from '../index'

export const topRatedMovies = (dispatch, cb) => {
    baseAxios.get(`/movie/top_rated?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_MOVIES", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}

export const popularMovies = (dispatch, cb) => {
    baseAxios.get(`/movie/popular?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_MOVIES", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}

export const upcomingMovies = (dispatch, cb) => {
    baseAxios.get(`/movie/upcoming?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_MOVIES", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}

export const nowPlayingMovies = (dispatch, cb) => {
    baseAxios.get(`/movie/now_playing?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_MOVIES", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}
