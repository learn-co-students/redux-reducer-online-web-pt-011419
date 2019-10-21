export function manageFriends(previousState = {friends: []}, action){
    switch (action.type){
        case 'ADD_FRIEND':
                console.log(previousState)
            return ('add')
        case 'REMOVE_FRIEND':
                console.log(friend)
            return ('remove')
        default:
            return previousState
    }
}
