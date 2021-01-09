export const SIGN_IN_ACTION = "SIGN_IN_ACTION" 
export const SIGN_UP_ACTION = "SIGN_UP_ACTION"

export const signInAction = (userState)=>{
    return{
        type: "SIGN_IN_ACTION",
        payload: {
            uid: userState.uid,
            isSignedIn: true,
            username: userState.username,
            team: ''
        }
    }
}

export const signUpAction = (userState)=>{
    return{
        type: "SIGN_UP_ACTION",
        payload: {
            uid: userState.uid,
            isSignedIn: true,
            username: userState.username,
            team: userState.team
        }
    }
}