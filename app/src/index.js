import { render } from 'react-dom'
import React from 'react'
import Users from './containers/users'
import { Provider } from 'react-redux'
import UsersStore from './store'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

render(
  <Provider store={UsersStore}>
  	<Container>
    	<Users />
    </Container>
  </Provider>,
  document.getElementById('root')
)
