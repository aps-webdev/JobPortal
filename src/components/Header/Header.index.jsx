import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import './Header.styles.scss';

import Logo from '../Logo/Logo.index';
import Button from '../Button/Button.index';
import DownCaret from '../../assets/down-arrow.png';
import { Toast } from '../Toast/Toast.index';

function Header(props) {
  const [loginNav, setLoginNav] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);

  const { pathname } = useLocation();
  let history = useHistory();
  const splitPath = pathname.split('/');
  const currentClass =
    splitPath[1] === ''
      ? 'homepage'
      : isLoggedIn && splitPath[2] !== 'postjob'
      ? 'loggedin'
      : '';

  useEffect(() => {
    if (splitPath[1] === 'login' || splitPath[1] === 'signup') {
      setLoginNav(false);
    }
  }, [splitPath]);

  console.log('INSIDE HEADER COMPONENT', loginNav, isLoggedIn);
  return (
    <React.Fragment>
      <header className={`container ${currentClass}`}>
        <nav className='nav'>
          <Logo size='small' />
          <div className='nav_left'>
            {loginNav && !isLoggedIn ? (
              <Button onClick={() => history.push('/login')}>
                Login/Signup
              </Button>
            ) : isLoggedIn ? (
              <LeftHeaderNav isRecruiter={isRecruiter} />
            ) : null}
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

function LeftHeaderNav({ isRecruiter }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const toastRef = useRef();
  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
    setIsDropdownOpen(!isDropdownOpen);
    toastRef.current.openToast('You have successfully logged out.', 'Logout');
  };

  return (
    <React.Fragment>
      <div className='leftMenu'>
        {isRecruiter ? (
          <NavLink className='leftMenu_link' to={`${pathname}/postjob`}>
            Post a Job
          </NavLink>
        ) : (
          <NavLink className='leftMenu_link' to={`${pathname}/alljobs`}>
            View all Job
          </NavLink>
        )}
        <div className='leftMenu_avatar'>R</div>
        <img
          src={DownCaret}
          alt='menu'
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen ? (
          <div className='leftMenu_dropdown'>
            <div className='leftMenu_dropdown_logout' onClick={handleLogout}>
              Logout
            </div>
          </div>
        ) : null}
      </div>
      <Toast ref={toastRef} />
    </React.Fragment>
  );
}


export default Header;
