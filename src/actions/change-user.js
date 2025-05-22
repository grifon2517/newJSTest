const fetchUserDataMock = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				name: 'Петр',
				age: 34
			}, 1500)
		})
	})
}

export const changeUserAsync = (dispatch) => fetchUserDataMock()
	.then((userDataFromServer) => dispatch({

		type: 'CHANGE-USER',
		payload: userDataFromServer,
	}))

