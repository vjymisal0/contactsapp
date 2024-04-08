import React from "react";

const Modal = (onClose, isOpen, children) => {
  return <>{isOpen &&<div>Modal</div>}</>;
};

export default Modal;
