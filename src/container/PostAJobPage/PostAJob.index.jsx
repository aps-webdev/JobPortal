import React, { useState, useRef } from 'react';
import './PostAJob.styles.scss';
import Input from '../../components/Input/Input.index';
import Button from '../../components/Button/Button.index';
import TextArea from '../../components/Input/TextArea.index';

function PostAJob(props) {
  const [isPostValid, setIsPostValid] = useState(true);
  const [message, setMessage] = useState('All fields are mandatory.');
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      setIsPostValid(false);
    } else {
      setIsPostValid(true);
    }
  };

  return (
    <React.Fragment>
      <div className='jobPost'>
        <div className='title'>Post a Job</div>
        <form noValidate onSubmit={handleSubmit} ref={formRef}>
          <Input
            label='Job title*'
            type='text'
            name='jobTitle'
            placeholder='Enter job title'
            isValid={isPostValid}
            required
          />
          <TextArea
            label='Description*'
            name='jobDescription'
            placeholder='Enter job description'
            rows='5'
            isValid={isPostValid}
            style={{ marginTop: '20px' }}
            required
          />
          <Input
            label='Location*'
            type='text'
            name='jobLocation'
            placeholder='Enter location'
            isValid={isPostValid}
            style={{ marginTop: '20px' }}
            required
          />
          <div className={`message${!isPostValid ? ' mandatory' : ''}`}>
            {message}
          </div>
          <div className='jobPost_button'>
            <Button primary type='submit'>
              Post
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default PostAJob;
