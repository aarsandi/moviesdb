import { baseAxios } from '../index'

export const topRatedTvShows = (dispatch, cb) => {
    console.log("jalan toprated")
    cb&&cb("success")
    // dispatch({type: "SET_TVSHOWS", data: "jalan"})
    // baseAxios({
    //     method: 'get',
    //     headers: {
    //         admintoken: localStorage.getItem('codeoadmin')
    //     },
    //     url: `/infoLaunchpad/${id}`
    // })
    // .then((response) => {
    //     console.log(response)
    //     // cb&&cb(data.data)
    // })
    // .catch((err) => {
    //     console.log(err)
    // }) 
}

export const popularTvShows = (dispatch, cb) => {
    console.log("jalan popular")
    // dispatch({type: "SET_TVSHOWS", data: "jalan"})
    cb&&cb("success")
}

export const onAirTvShows = (dispatch, cb) => {
    console.log("jalan on the air")
    // dispatch({type: "SET_TVSHOWS", data: "jalan"})
    cb&&cb("success")
}

export const todayTvShows = (dispatch, cb) => {
    console.log("jalan airing today")
    // dispatch({type: "SET_TVSHOWS", data: "jalan"})
    cb&&cb("success")
}
