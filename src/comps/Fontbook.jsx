import React from "react";
import { contacts } from "../data.js";
import { IoCall } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { NameCall } from "./NameCall";


export const Fontbook = () => {
  return (
    <div class="contactsList">
      {contacts.map((contact) => {
        return (
         <NameCall contact={contact}/>
        );
      })}
    </div>
  );
};
