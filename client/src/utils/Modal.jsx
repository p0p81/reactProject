import React from "react";
import ReactModal from 'react-modal'
import styles from "./Modal.module.css"

ReactModal.setAppElement('#root'); 

export default function MyModal({ isOpen, onClose, onConfirm }) {
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Confirmation"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
        <div className={styles.confirmText}>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this Business Card?</p>
      </div>
      <div className={styles.modalButtons}>
        <button onClick={onConfirm} className={styles.confirmBtn}>Confirm</button>
        <button onClick={onClose} className={styles.cancelBtn}>Cancel</button>
      </div>
    </ReactModal>
  );
}