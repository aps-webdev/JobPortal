import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Helper from './helpers/rootBody';

import Header from './components/Header/Header.index';
import HomePage from './container/HomePages/Homepage.index';
import LandingPage from './container/LandingPage/LandingPage.index';
import LoginPage from './container/LoginPage/LoginPage.index';
import SignUpPage from './container/SignUpPage/SignUpPage.index';
import ForgotPasswordPage from './container/ForgotPasswordPage/ForgotPassword.index';
import PostAJob from './container/PostAJobPage/PostAJob.index.jsx';
import PageNotFound from './components/NotFound/NotFound.index';
import {
  selectAuth,
  selectIsRecruiterLogged,
  selectUserName,
} from './redux/auth/auth.selector';
import { clearSessionStorage } from './helpers/sessionStorage';

function App(props) {
  const history = useHistory();

  const handleHomePageClick = () => {
    clearSessionStorage();
    history.push('/');
  };

  return (
    <React.Fragment>
      <Header
        isLoggedIn={props.isLoggedIn}
        isRecruiter={props.isRecruiter}
        name={props.name}
      />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/changepassword' component={ForgotPasswordPage} />
        <Route exact path='/recruiter' component={HomePage} />
        <Route path='/recruiter/postjob' component={PostAJob} />
        <Route exact path='/candidate' component={HomePage} />
        <Route exact path='/candidate/alljobs' component={HomePage} />
        <Route
          path=''
          render={(props) => (
            <PageNotFound
              {...props}
              handleHomePageClick={handleHomePageClick}
            />
          )}
        />
      </Switch>
      <Helper />
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectAuth,
  isRecruiter: selectIsRecruiterLogged,
  name: selectUserName,
});

export default connect(mapStateToProps, null)(App);
