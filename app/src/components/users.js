import React from 'react'
import UserItem from './userItem'
import { Table, Button } from 'semantic-ui-react'
import AddUserModal from './addUserModal'
import DeleteUserModal from './deleteUserModal'

class Users extends React.Component {

  constructor() {
    super()

    this.state = {
      openAddUserModal: false,
      openDeleteUserModal: false
    }
  }

  componentWillMount() {
    this.props.fetchUsers()
  }

  handleAddUser = (params) => {
    this.props.addUser(params)
    this.toggleAddUserModal()
  }

  handleEditUser = (params) => {
    this.props.editUser(params)
  }

  handleDeleteUser = () => {
    this.props.deleteUser(this.state.selectedUserId)
    this.toggleDeleteUserModal()
  }

  toggleAddUserModal = () => {
    this.setState({
      openAddUserModal: !this.state.openAddUserModal,
    })
  }

  toggleDeleteUserModal = (selectedUserId) => {
    this.setState({
      openDeleteUserModal: !this.state.openDeleteUserModal,
      selectedUserId
    })
  }

  render() {
    const { data, setUser } = this.props

    return (
      <div className='container'>
        <br /><br />

        <AddUserModal 
        toggleAddUserModal={this.toggleAddUserModal}
        open={this.state.openAddUserModal} 
        addUser={this.handleAddUser} />

        <DeleteUserModal 
          toggleDeleteUserModal={this.toggleDeleteUserModal} 
          open={this.state.openDeleteUserModal}
          deleteUser={this.handleDeleteUser}
        />

        <Button onClick={() => this.toggleAddUserModal()} primary style={{height: '37.8px', }} className="right floated">
          Add User
        </Button>
    
        <div className="clearfix"></div><br />

        <div id={'users'}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Gravatar</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Origin</Table.HeaderCell>
                  <Table.HeaderCell>Contact No.</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
              {data.users.map((user, i) => {
                return <UserItem
                      toggleDeleteUserModal={this.toggleDeleteUserModal}
                      editUser={this.handleEditUser}
                      key={i}
                      user={user}
                      onClick={() => setUser(user)}
                    />
              })}
              </Table.Body>
            </Table>
        </div>
      </div>
    )
  }
}

export default Users;