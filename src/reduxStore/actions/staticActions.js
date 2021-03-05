import * as actionType from "./actionType";


export const showOnTimeline = (staticUser) => {
    console.log("++++", staticUser)
    return {
        type: actionType.SHOW_ON_TIMELINE,
        payload: staticUser,
    };
}