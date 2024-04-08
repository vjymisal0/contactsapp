import { React, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists); // Set contacts state with fetched data
        console.log("Contacts fetched successfully!", contactLists);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    getContacts();
  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex flex-grow items-center relative">
          <FiSearch className="text-white text-3xl absolute ml-1" />
          <input
            type="text"
            className="h-10 flex-grow bg-transparent  border-white rounded-md border text-white pl-10"
          />
        </div>
        <AiFillPlusCircle className="text-white text-5xl cursor-pointer" />
      </div>
      <div>
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-gray rounded-xl p-2">
            <div className="flex">
              <HiOutlineUserCircle className="text-white text-4xl" />
              <div className="text-white">
                <div className="">
                  <h2 className="">{contact.name}</h2>
                  <p className="">{contact.email}</p>
                </div>
              </div>
            </div>
            <div>
              <RiEditCircleLine />

              <IoMdTrash />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
