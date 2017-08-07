import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import InlineEdit from 'react-edit-inline'
import './userItem.css'

class UserItem extends Component {

	constructor(props){
		super()
	}

	validateText(text) {
		return text.length > 0
	}

	validateNumber(number) {
		return !isNaN(number)
	}

	handleInputBlur = (changedField) => {
		this.props.editUser(Object.assign({}, {id: this.props.user._id}, changedField))
	}

	render() {

		const { user } = this.props

		return (
			<Table.Row>
			  <Table.Cell textAlign={'center'}>
			  	<img style={{width: '50px', borderRadius: '15px'}} src={user.picture.thumbnail} alt="avatar"/>
			  </Table.Cell>
			  <Table.Cell>
  			  	<InlineEdit
  	              validate={this.validateText}
  	              activeClassName="editing"
  	              text={user.name}
  	              paramName="name"
  	              change={this.handleInputBlur}
  	            />
			  </Table.Cell>
			  <Table.Cell>
  			  	<InlineEdit
  	              validate={this.validateText}
  	              activeClassName="editing"
  	              text={user.location}
  	              paramName="location"
  	              change={this.handleInputBlur}
  	            />
			  </Table.Cell>
			  <Table.Cell>
			  	<InlineEdit
	              validate={this.validateNumber}
	              activeClassName="editing"
	              text={user.phone}
	              paramName="phone"
	              change={this.handleInputBlur}
	            />
			  </Table.Cell>
	  		  <Table.Cell textAlign='center'>
	  		  	<i onClick={e => this.props.toggleDeleteUserModal(user._id)} className="trash outline icon"></i>
	  		  </Table.Cell>
			</Table.Row>
		)
	}
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem