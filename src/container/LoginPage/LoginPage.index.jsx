import React, { useState, useRef } from 'react';
import './LoginPage.styles.scss';
import Input from '../../components/Input/Input.index';
import Button from '../../components/Button/Button.index';
import { useHistory } from 'react-router-dom';

function LoginPage(props) {
  const [isLoginValid, setIsLoginValid] = useState(true);
  const [message, setMessage] = useState('All fields are mandatory.');
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      setIsLoginValid(false);
    } else {
      setIsLoginValid(true);
    }
  };
  let history = useHistory();
  const handleLogin = () => {
    if (formRef.current.checkValidity()) {
      history.push('/recruiter');
    }
  };
  return (
    <React.Fragment>
      <div className='login'>
        <div className='title'>Login</div>
        <form noValidate onSubmit={handleSubmit} ref={formRef}>
          <Input
            label='Email address'
            type='email'
            name='email'
            placeholder='Enter your email'
            required
            isValid={isLoginValid}
          />
          <div
            className='forgotpassword'
            onClick={() => history.push('/changepassword')}
          >
            Forgot your password?
          </div>
          <Input
            label='Password'
            type='password'
            name='password'
            placeholder='Enter your password'
            required
            isValid={isLoginValid}
            style={{ marginTop: '19px' }}
          />
          <div className={`message${!isLoginValid ? ' mandatory' : ''}`}>
            {message}
          </div>
          <div className='login_button'>
            <Button primary type='submit' onClick={handleLogin}>
              Login
            </Button>
          </div>
        </form>
        <div className='footer'>
          New to MyJobs?{' '}
          <span className='footer_text' onClick={() => history.push('/signup')}>
            Create an account
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
