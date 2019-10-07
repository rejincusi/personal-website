import * as request from 'superagent'

export const NEW_MESSAGE = 'NEW_MESSAGE'

function newMessage(payload) {
	return {
		type: NEW_MESSAGE,
		payload
	}
}

export const createMessage = (data) => async (dispatch, getState) => {
  
  const serverUrl = "http://localhost:5000"

  await request
    .post(`${serverUrl}/messages`)
    .send(data)
    .then(response => {
			const action = newMessage(response.body)

			dispatch(action)
		})
		.catch(console.error)
}