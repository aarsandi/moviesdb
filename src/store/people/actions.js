import { baseAxios, api_key } from '../index'

export const popularPeople = (dispatch, cb) => {
    baseAxios.get(`/person/popular?api_key=${api_key}&&page=1`).then(({data}) => {
        if(data) {
            dispatch({type: "SET_PEOPLE", data: {data:data.results, page:data.page, totalPage:data.total_pages}})
            cb&&cb("success")
        }else{
            cb&&cb("error")
        }
    })
    .catch((err) => {
        cb&&cb("error")
    })
}
