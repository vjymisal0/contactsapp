import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const ContactCard = (contact) => {
  return (
    
        <div
          key={contact.id}
          className="bg-light_cyan rounded-lg p-2 flex justify-around items-center"
        >
          <div className="flex gap-1">
            <HiOutlineUserCircle className="text-black text-4xl" />

            <div className="">
              <h2 className="font-medium">{contact.name}</h2>
              <p className="text-sm">{contact.email}</p>
            </div>
          </div>

          <div className="flex">
            <RiEditCircleLine />

            <IoMdTrash className="text-red" />
          </div>
       
    </div>
  );
};

export default ContactCard;
