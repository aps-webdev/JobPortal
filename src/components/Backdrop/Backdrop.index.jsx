import React, { useEffect, useState } from 'react';
import './Backdrop.styles.scss';

export default function Backdrop(props) {
  const [isBackdropOpen, setIsBackdropOpen] = useState(true);
  useEffect(() => {
    if (isBackdropOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBackdropOpen]);
  return <div className='backdrop' />;
}
