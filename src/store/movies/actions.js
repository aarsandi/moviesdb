import { baseAxios } from '../index'

export const topRatedMovies = (dispatch, cb) => {
    console.log("jalan toprated")
    cb&&cb("success")
    // dispatch({type: "SET_MOVIES", data: "jalan"})
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

export const popularMovies = (dispatch, cb) => {
    console.log("jalan popular")
    cb&&cb("success")
}

export const upcomingMovies = (dispatch, cb) => {
    console.log("jalan upcomming")
    cb&&cb("success")
}

export const nowPlayingMovies = (dispatch, cb) => {
    console.log("jalan now playing")
    cb&&cb("success")
}
