import React from 'react';
import './style/ImageModal.scss';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.largeImageURL} alt={image.tags} />
        <p>{image.tags}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
