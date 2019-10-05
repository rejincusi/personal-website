import { NEW_MESSAGE } from '../actions/messages'

export default function (state = null, action) {
  switch (action.type) {
    case NEW_MESSAGE:
      return action.payload
    default:
      return state
  }
}