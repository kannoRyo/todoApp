export const SIGN_IN_ACTION = "SIGN_IN_ACTION" 
export const SIGN_UP_ACTION = "SIGN_UP_ACTION"
export const SIGN_OUT_ACTION = "SIGN_OUT_ACTION"

export const signInAction = (userState)=>{
    return{
        type: "SIGN_IN_ACTION",
        payload: {
            uid: userState.uid,
            isSignedIn: userState.isSignedIn,
            username: userState.username,
            team: ''
        }
    }
}

export const signUpAction = (userState)=>{
    return{
        type: "SIGN_Up_ACTION",
        payload: {
            uid: userState.uid,
            isSignedIn: userState.isSignedIn,
            username: userState.username,
            team: ''
        }
    }
}

export const signOutAction = (userState)=>{
    return{
        type: "SIGN_OUT_ACTION",
        payload: {
            uid: '',
            isSignedIn: false,
            username: '',
            team: ''
        }
    }
}