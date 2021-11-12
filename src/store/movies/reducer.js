const initialState = {
    data: "movies"
};

const reducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_MOVIES": 
            return {
                ...state,
                data: data
            }

        default : 
            return state;
    }
})

export default reducer;
