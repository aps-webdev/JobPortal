import ReactDOM from 'react-dom';

export default function Helper() {
  return ReactDOM.createPortal(
    <div style={{ background: '#EDF6FF', height: '100vh' }}></div>,
    document.getElementById('root-body')
  );
}
