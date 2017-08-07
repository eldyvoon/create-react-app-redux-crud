import React, { Component } from 'react'
import { Button, Header, Form, Modal } from 'semantic-ui-react'

class addUserModal extends Component {

  constructor() {
    super()
    
    this.state = {
      form: {
        name: '',
        location: '',
        phone: ''
      }
    }
  }

  handleFormInput = (event) => {
    let form = {...this.state.form}
    form[event.target.name] = event.target.value
    this.setState({ form })
  }

  resetForm = () => {
    this.setState({
      form: {
        name: '',
        location: '',
        phone: ''
      }
    })
  }

  render() {

    return(
        <Modal size={'tiny'} open={this.props.open}>
          <Header content='Create New User' />
          <Modal.Content>
            <Form>
                <Form.Field>
                  <label>Name</label>
                  <input name="name" onChange={this.handleFormInput} placeholder='Name' />
                </Form.Field>
                <Form.Field>
                  <label>Origin</label>
                  <input name="location" onChange={this.handleFormInput} placeholder='Origin' />
                </Form.Field>
                <Form.Field>
                  <label>Contact No.</label>
                  <input type="number" name="phone" onChange={this.handleFormInput} placeholder='Contact No.' />
                </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={e => { this.props.toggleAddUserModal(); this.resetForm() }}>
              Cancel
            </Button>
            <Button color='blue' onClick={e => { this.props.addUser(this.state.form); this.resetForm() }}>
              Create
            </Button>
          </Modal.Actions>
      </Modal>
    )
  }
}

export default addUserModal