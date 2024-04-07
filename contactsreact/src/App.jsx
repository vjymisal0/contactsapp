import { React, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection } from "firebase/firestore";

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        console.log(contactsSnapshot);
      } catch (error) {}
    };
  });
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
    </div>
  );
};

export default App;
