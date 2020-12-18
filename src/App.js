import React from 'react'
import './App.css';
import Homepage from './pages/Homepage/Homepage'

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'
import AuthPage from './pages/AuthPage/AuthPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/userActions'
import { createStructuredSelector } from "reselect"
import { selectCurrentUser } from "./redux/user/userSelectors"
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage"


class App extends React.Component {

  unsubscribeFromAuth = () => console.log('Close empty subscription')

  componentDidMount () {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // Create new user and return reference
        const userRef = await createUserProfileDocument(userAuth)
        // on snapshot change (by document reference)
        userRef.onSnapshot(snapshot => {
          // set local state
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }

      // this getting called before
      // wtf, we passing raw data...
      setCurrentUser(userAuth)

    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    const { currentUser } = this.props
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/' />) : (<AuthPage/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const dispatchProps = {
  setCurrentUser: setCurrentUser
}

export default connect(mapStateToProps, dispatchProps)(App);
