import React from 'react';
import PropTypes from 'prop-types';
import './Modal.styles.scss';

import Close from '../../assets/close.png';

function Modal({ text, description, width, children, onClose }) {
  return (
    <React.Fragment>
      <div className='modal'>
        <div className='modal_header'>
          <div className='modal_header_title'>
            <div>{text}</div>
            <img src={Close} alt='close' onClick={onClose} />
          </div>
          <div className='modal_header_description'>{description}</div>
        </div>
        <div className='modal_body' style={{ width: `${width}` }}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}

Modal.defaultProps = {
  text: 'Modal header text goes here',
  description: '0 applications',
  width: '650px',
};

Modal.propTypes = {
  text: PropTypes.string,
  description: PropTypes.string
};

export default Modal;
