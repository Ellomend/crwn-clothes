import React from 'react'
import './App.css';
import Homepage from './pages/Homepage/Homepage'

import { Switch, Route } from "react-router-dom";
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'
import AuthPage from './pages/AuthPage/AuthPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser: null
    }
  }

  // TODO check if this is correct
  unsubscribeFromAuth = () => console.log('Close empty subscription')

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // Create new user and return reference
        const userRef = await createUserProfileDocument(userAuth)
        // on snapshot change (by document reference)
        userRef.onSnapshot(snapshot => {
          // set local state
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          console.log('on snapshot')
          console.log(this.state)
        })
      }

      // this getting called before
      this.setState({currentUser: userAuth})

    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={AuthPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
