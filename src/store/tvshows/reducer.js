const initialState = {
    data: null
};

const reducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_TVSHOWS": 
            return {
                ...state,
                data: data
            }

        default : 
            return state;
    }
})

export default reducer;
