import React, { Component } from 'react'
import { Confirm } from 'semantic-ui-react'

class deleteUserModal extends Component {

  handleConfirm = () => {
    this.props.deleteUser()
  }

  handleCancel = () => {
    this.props.toggleDeleteUserModal()
  }

  render() {

    return (
      <div>
        <Confirm size={'tiny'} className="deleteUserModal"
          open={this.props.open}
          content={'Confirm delete user?'}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          confirmButton={'Delete'}
        />
      </div>
    )
  }
}

export default deleteUserModal