import {
  UPDATE_COLOR
} from './ColorActions'

export function changeColor(state={
  color: 'orange'
}, action) {
  switch(action.type) {
    case UPDATE_COLOR:
      return Object.assign({}, state, {
        color: action.color
      })
    default:
      return state
  }
}
