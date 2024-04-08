import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-50 min-h-[200px] max-w-[80%] m-auto bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="  backdrop-blur h-screen w-screen absolute top-0 z-40"
          ></div>
        </>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
