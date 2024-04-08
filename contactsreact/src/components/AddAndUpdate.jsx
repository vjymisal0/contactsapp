import React from "react";
import { Form, Formik, Field } from "formik";
import Modal from "./Modal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdate = ({ isOpen, onClose }) => {
  const addContact = (contact) => {
    try {
      const contactRef = collection(db, "contacts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                className="border h-10 text-black rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                className="border h-10  text-black rounded-lg"
              />
            </div>
            <button className="bg-blue px-3 py-1 border rounded-lg self-end">
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
