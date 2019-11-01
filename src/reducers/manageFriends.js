export function manageFriends(state = {friends: []}, action) {
  switch (action.type) {
    case "ADD_FRIEND":
    state.friends.push(action.friend)
    const addedArray = state.friends
        return {...state,friends: addedArray}
    case "REMOVE_FRIEND":
      const removedArray = state.friends.filter(obj => obj.id !== action.id)
      return {...state, friends: removedArray}
    default:
      return state
  }
}
