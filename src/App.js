import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Link is a component for connecting other pages with path

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/Header/Header';
import SignInSignOut from './pages/sign-in-and-sign-out-page/SignInSignOut'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state)); 
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
      return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignOut} />
        </Switch>
      </div>
    )
  };
}

export default App;
