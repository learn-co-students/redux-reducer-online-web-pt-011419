export function managePresents(previousState = {numberOfPresents: 0}, action){
    switch (action.type){
        case 'INCREASE':
            return {numberOfPresents: previousState.numberOfPresents + 1}
        default:
            return previousState
    }
}
