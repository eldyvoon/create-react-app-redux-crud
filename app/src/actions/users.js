import axios from 'axios'

export function fetchUsers() {
  return {
    type: 'FETCH_USER',
    payload: axios.get('http://localhost:3001/api/users').then(response => response.data)
  }
}

export function addUser(params) {
	return {
		type: 'ADD_USER',
		payload: axios.post('http://localhost:3001/api/user', params).then(response => response.data)
	}
}

export function editUser(params) {
	return {
		type: 'EDIT_USER',
		payload: axios.put('http://localhost:3001/api/user', params).then(response => response.data)
	}
}

export function deleteUser(id) {
	return {
		type: 'DELETE_USER',
		payload: axios.delete('http://localhost:3001/api/user', {params: {id}}).then(response => response.data)
	}
}