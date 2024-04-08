import React from "react";
import { Form, Formik, Field } from "formik";
import Modal from "./Modal";

const AddAndUpdate = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik>
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10 rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="border h-10 rounded-lg"
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
