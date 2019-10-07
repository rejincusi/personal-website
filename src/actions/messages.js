import * as request from 'superagent'

export const NEW_MESSAGE = 'NEW_MESSAGE'

function newMessage(payload) {
	return {
		type: NEW_MESSAGE,
		payload
	}
}

export const createMessage = (data) => async (dispatch, getState) => {
  
  const serverUrl = 'https://rejin-server.herokuapp.com'

  await request
    .post(`${serverUrl}/contact`)
    .send(data)
    .then(response => {
			const action = newMessage(response.body)

			dispatch(action)
		})
		.catch(console.error)
}