import React, { useRef, useState } from 'react';
import Button from './Button';
import RegisterForm from './RegisterForm';

import "./modal.css";

function Modal() {
  const dialogRef = useRef();

  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState('');

  const handleRegisterSuccess = (username) => {
    setIsRegistered(true);
    setUserName(username);
  };


  return (
    <div className="modal">
      <Button
        className="open-button"
        type="button"
        visual="button"
        onClick={() => {
          dialogRef.current.showModal();
        }}>
        Take Action Now
      </Button>

      {isRegistered && (
        <div className="success-message">
          <div className="message1">
            Congratulations,<p className="name-id">{userName}</p>!
          </div>
          <div className="message2">
            You've successfully registered. We'll contact you soon!
          </div>
        </div>
      )}

      <dialog ref={dialogRef} className="modal-box">
        <p className="modal-title">Welcome to Join Us!</p>

        <RegisterForm dialogRef={dialogRef} onRegisterSuccess={handleRegisterSuccess} />

        <Button
          className="close-button"
          type="button"
          visual="button"
          onClick={() => {
            dialogRef.current.close();
          }}>
          Close
        </Button>

      </dialog>
    </div>
  );

}

export default Modal;

