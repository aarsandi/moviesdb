import { baseAxios, api_key } from '../index'

export const fetchTrendingAll = (dispatch, cb) => {
    baseAxios.get(`/trending/movie/day?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_HOME", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}

export const searchMovies = (dispatch, query, cb) => {
    baseAxios.get(`/search/movie?api_key=${api_key}&&query=${query}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_HOME", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            dispatch({type: "SET_HOME", data: {data:[], page:0, totalPage:0}})
            cb&&cb("success")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}
