import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Helper from './helpers/rootBody';

import Header from './components/Header/Header.index';
import Loader from './components/Loader/Loader.index';
// import Backdrop from './components/Backdrop/Backdrop.index';

import HomePage from './container/HomePages/Homepage.index';


const LandingPage = lazy(() =>
  import('./container/LandingPage/LandingPage.index')
);
const LoginPage = lazy(() => import('./container/LoginPage/LoginPage.index'));
const SignUpPage = lazy(() =>
  import('./container/SignUpPage/SignUpPage.index')
);
const ForgotPasswordPage = lazy(() =>
  import('./container/ForgotPasswordPage/ForgotPassword.index')
);
const PageNotFound = lazy(() => import('./components/NotFound/NotFound.index'));
const PostAJob = lazy(() => import('./container/PostAJobPage/PostAJob.index'));

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/changepassword' component={ForgotPasswordPage} />
            <Route
              exact
              path='/recruiter'
              component={HomePage.RecruitHomePage}
            />
            <Route path='/recruiter/postjob' component={PostAJob} />
            <Route
              exact
              path='/candidate'
              component={HomePage.CandidateHomePage}
            />
            <Route path='' component={PageNotFound} />
          </Switch>
        </Suspense>
        <Helper />
        {/* <Backdrop/> */}
      </Router>
    </React.Fragment>
  );
}

export default App;
