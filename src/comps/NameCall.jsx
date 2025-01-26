import { IoCall } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { contacts } from "../data.js";
import React from "react";

export const NameCall = ({contact}) => {
  return (
    <div key={contact.id} className="contact">
      <p className="contact__name">
        <MdDriveFileRenameOutline /> {contact.name}
      </p>
      <p className="contact__number">
        <IoCall /> {contact.number}
      </p>
    </div>
  );
};
