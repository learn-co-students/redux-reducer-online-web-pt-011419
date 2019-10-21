export function manageFriends(previousState = {friends: []}, action){
    switch (action.type){
        case 'ADD_FRIEND':
            return {...previousState, friends: previousState.friends.concat(action.friend)}
        case 'REMOVE_FRIEND':
            return ('remove')
        default:
            return previousState
    }
}
