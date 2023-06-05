import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  
  const [sizeClass, setSizeClass] = useState('');
  const [message, setMessage] = useState('');

  useEffect (()=> {
    // console.log('Message', size);
    let cName = '';
    switch (size) {
      case 'm':
        cName = 'medium';
        break; 
      case 'l':
        cName = 'large';
        break; 
      case 'xl':
        cName = 'xlarge';
        break;
      default:
        cName = 'small';
        break;
    }
    setSizeClass(cName);
  }, [size])

  useEffect (() => {
    if (featherCount <= 0) {
      setMessage('Oh my! Your bird is naked!');
    } else if (featherCount >= 10) {
      setMessage('Full turkey!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount])

  return (
    <div className={`message ${sizeClass}`}>
      ({message})
    </div>
  );
};

export default Message;