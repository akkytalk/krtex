import * as actionType from "../actions/actionType";

const initialState = {
    staticUsers: {},
};

const reducer = (state = initialState, action) => {
    switch (actionType) {
        case actionType.SHOW_ON_TIMELINE:
            return {
                ...state,
                staticUsers: action.payload,
            };


        default:
            return state;
    }
}

export default reducer;