import React, { useState, useRef } from 'react';
import './SignUpPage.styles.scss';
import Input from '../../components/Input/Input.index';
import Button from '../../components/Button/Button.index';
import Recruiter_primary from '../../assets/recruiter_primary.png';
import Recruiter_secondary from '../../assets/recruiter_secondary.png';
import Candidate_primary from '../../assets/candidates_primary.png';
import Candidate_secondary from '../../assets/candidates_secondary.png';
import { useHistory } from 'react-router-dom';
function SignUpPage(props) {
  const [isSignUpValid, setIsSignUpValid] = useState(true);
  const [isRecuiterActive, setIsRecuiterActive] = useState(true);
  const [isCandidateActive, setIsCandidateActive] = useState(false);
  const [message, setMessage] = useState('All field are mandatory.');

  let history = useHistory();
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      setIsSignUpValid(false);
    } else {
      setIsSignUpValid(true);
    }
  };

  const toggleSignUpForm = () => {
    setIsRecuiterActive(!isRecuiterActive);
    setIsCandidateActive(!isCandidateActive);
  };
  return (
    <React.Fragment>
      <div className='signup'>
        <div className='title'>Signup</div>
        <div className='userChoice'>
          <p>I'm a*</p>
          <div className='userButtons'>
            <Button
              icon={isRecuiterActive ? Recruiter_primary : Recruiter_secondary}
              primary={isRecuiterActive}
              secondary={isCandidateActive}
              style={{ width: '136px', marginRight: '20px' }}
              onClick={toggleSignUpForm}
            >
              Recruiter
            </Button>
            <Button
              icon={
                !isCandidateActive ? Candidate_secondary : Candidate_primary
              }
              primary={!isRecuiterActive}
              secondary={!isCandidateActive}
              style={{ width: '136px' }}
              onClick={toggleSignUpForm}
            >
              Candidate
            </Button>
          </div>
        </div>
        <form noValidate onSubmit={handleSubmit} ref={formRef}>
          <Input
            label='Full Name*'
            type='text'
            name='name'
            placeholder='Enter your full name'
            required
            isValid={isSignUpValid}
          />
          <Input
            label='Email address*'
            type='email'
            name='email'
            placeholder='Enter your email'
            required
            isValid={isSignUpValid}
            style={{ marginTop: '25px' }}
          />
          <div className='signup_passwords'>
            <Input
              label='Create Password*'
              type='password'
              placeholder='Enter your password'
              required
              isValid={isSignUpValid}
              style={{ width: '50%', marginRight: '21px' }}
            />
            <Input
              label='Confirm Password*'
              type='password'
              name='passowrd'
              placeholder='Enter your password'
              required
              isValid={isSignUpValid}
              style={{ width: '50%' }}
            />
          </div>
          {!isRecuiterActive ? (
            <Input
              label='Skills'
              type='text'
              placeholder='Enter comma separated skills'
              isValid={isSignUpValid}
              style={{ marginTop: '25px' }}
            />
          ) : null}
          <div className={`message${!isSignUpValid ? ' mandatory' : ''}`}>
            {message}
          </div>
          <div className='signup_button'>
            <Button primary type='submit'>
              Signup
            </Button>
          </div>
        </form>
        <div className='footer'>
          Have an account? <span className='footer_text' onClick={() => history.push('/login')}>Login </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUpPage;
