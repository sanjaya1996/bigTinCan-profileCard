import React, { useState } from 'react';
import EditProfileModal from '../modal/EditProfileModal';

import './addButton.css';

const AddButton = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    window.onclick = function (event: MouseEvent) {
      const modal = document.getElementById('modalLayout');
      if (event.target === modal) {
        setShowModal(false);
      }
    };
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const submitHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className='buttonContainer'>
        <button className='addButton' onClick={handleShow}>
          <i className=' fas fa-solid fa-user-plus'></i>
        </button>
      </div>
      {showModal && (
        <EditProfileModal onCloseModal={handleClose} onSubmit={submitHandler} />
      )}
    </>
  );
};

export default AddButton;
