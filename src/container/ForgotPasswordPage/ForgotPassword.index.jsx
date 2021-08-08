import React, { useState, useRef } from 'react';
import './ForgotPassword.styles.scss';
import Input from '../../components/Input/Input.index';
import Button from '../../components/Button/Button.index';

function ForgotPasswordPage(props) {
  const [isInputValid, setIsInputValid] = useState(true);
  const [resetPassword, setResetPassword] = useState(false);
  const [message, setMessage] = useState('This field is mandatory.');
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
      setResetPassword(true);
      setMessage('All fields are mandatory.');
    }
  };
  return (
    <React.Fragment>
      <div className='forgotPassword'>
        <div className='title'>
          {!resetPassword ? `Forgot your password?` : 'Reset Your Password'}
        </div>
        <div className='infomessage'>
          {!resetPassword
            ? `Enter the email associated with your account and we’ll send you
          instructions to reset your password.`
            : 'Enter your new password below.'}
        </div>
        <form noValidate onSubmit={handleSubmit} ref={formRef}>
          {!resetPassword ? (
            <Input
              label='Email address'
              type='email'
              name='email'
              placeholder='Enter your email'
              required
              isValid={isInputValid}
              style={{ marginTop: '20px' }}
            />
          ) : (
            <>
              <Input
                label='New password'
                type='password'
                placeholder='Enter your password'
                required
                isValid={isInputValid}
                style={{ marginTop: '20px' }}
              />
              <Input
                label='Confirm new password'
                type='password'
                name='password'
                placeholder='Enter your password'
                required
                isValid={isInputValid}
                style={{ marginTop: '20px' }}
              />
            </>
          )}
          <div className={`message${!isInputValid ? ' mandatory' : ''}`}>
            {message}
          </div>
          <div className='forgotPassword_button'>
            <Button primary type='submit'>
              {!resetPassword ? 'Submit' : 'Reset'}
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ForgotPasswordPage;
