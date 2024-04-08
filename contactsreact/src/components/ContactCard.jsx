import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const ContactCard = ({ contact }) => {
  return (
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

        <IoMdTrash className="text-red" />
      </div>
    </div>
  );
};

export default ContactCard;
