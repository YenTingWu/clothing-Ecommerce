import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Link is a component for connecting other pages with path
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import CheckOutPage from './pages/checkoutpage/CheckOutPage';

import SignInSignOutPage from './pages/sign-in-and-sign-out-page/SignInSignOutPage';

import Header from './components/Header/Header';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }); 
        });
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
      return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' 
            render={() => this.props.currentUser ? 
                  <Redirect to='/'/> : 
                  <SignInSignOutPage />} 
                />
          {/* 

          component props can only pass a component if you provide a inline functino to component props, it will create a new element every single render.

          Instead, you can provide a function with render props. It only be called when the location match.
         
          */}
        </Switch>
      </div>
    )
  };
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
