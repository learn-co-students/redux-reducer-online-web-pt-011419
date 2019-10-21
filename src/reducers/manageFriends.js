export function manageFriends(previousState = {friends: []}, action){
    switch (action.type){
        case 'ADD_FRIEND':
        // Old way
        // return {...previousState, friends: previousState.friends.concat(action.friend)}

        //ES6
            return { ...previousState, friends: [...previousState.friends, action.friend]}
        case 'REMOVE_FRIEND':            
             return {friends: previousState.friends.filter(({id}) => id !== action.id)}
        default:
            return previousState
    }
}
