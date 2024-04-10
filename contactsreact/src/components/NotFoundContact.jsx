import React from "react";

const NotFoundContact = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] gap-4">
      <div>
        {" "}
        <img src="./Hands_Contact.png" alt="" />
      </div>
      <h3 className="text-cyan-300 text-2xl font-medium">Contact Not Found</h3>
    </div>
  );
};

export default NotFoundContact;
