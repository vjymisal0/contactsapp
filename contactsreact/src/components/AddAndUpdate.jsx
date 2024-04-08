import React from "react";

import Modal from "./Modal";

const AddAndUpdate = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        Hello
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
