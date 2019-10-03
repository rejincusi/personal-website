import * as request from 'superagent'

export const NEW_MESSAGE = 'NEW_MESSAGE'

export const createMessage = (data) => async (dispatch, getState) => {
  const state = getState()
  const { user } = state
  
  await request
    .post(`${serverUrl}/messages`)
    .send(data)
    .then(response => {
    })
    .catch(console.error)
}