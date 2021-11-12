const initialState = {
    data : null,
    page: null,
    totalPage: null
};

const reducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_HOME": 
            return {
                ...state,
                data: data.data,
                page: data.page,
                totalPage: data.totalPage
            }

        default : 
            return state;
    }
})

export default reducer;
