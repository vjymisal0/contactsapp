import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, `contacts`, id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-monochromatic-dark-gray text-white rounded-lg p-2 flex justify-between items-center"
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-4xl " />

          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex text-3xl">
          <RiEditCircleLine />

          <IoMdTrash
            className="text-red"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>
      <AddAndUpdate />
    </>
  );
};

export default ContactCard;
