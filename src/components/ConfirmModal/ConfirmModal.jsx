import React from 'react';
import styles from './ConfirmModal.module.css';

const ConfirmModal = ({ onConfirm, onCancel, message }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{message || 'Are you sure?'}</p>
        <div>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
