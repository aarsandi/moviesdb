const initialState = {
    data : "home"
};

const reducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_HOME": 
            return {
                ...state,
                data: data
            }

        default : 
            return state;
    }
})

export default reducer;
