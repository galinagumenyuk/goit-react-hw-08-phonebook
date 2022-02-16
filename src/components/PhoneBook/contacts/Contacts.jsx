import React from "react";
import { ContactItem, DeleteButton, Contact, EditButton } from "./Contacts.styled";
import { useSelector } from "react-redux";
import { useFetchContactsQuery, useDeleteContactsMutation } from "../../../contactsSlice";
import { SpinnerDiamond } from 'spinners-react';
import { useState } from "react";
import ModalWindow from "../Modal/Modal";


const Contacts = () => {

  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();
  
  const [showModal, setShowModal] = useState(false);
  const [editContact, setEditContact] = useState(null);

  const contactsFilter = useSelector(state => {
    const { filter } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    let filteredContacts = [];
    if (contacts) {
      filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
      );
    };
    return filteredContacts;
  })

  const toggleModal = (id) => {
    setShowModal((showModal) => !showModal);
    setEditContact(contacts.filter(item =>  item.id === id
    )[0]);
  }
  
  return (
    <>
      {isFetching && <SpinnerDiamond size="300" secondaryColor='#ffffff' color=" #A2D9CE" speed='80'/>}
      {contacts && <ContactItem>
      {contactsFilter.map((contact) => (
        <Contact key={contact.id}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <DeleteButton
            type="button"
            onClick={()=>deleteContacts(contact.id)}
          >
            Delete
          </DeleteButton>
          <EditButton type="button" onClick={()=>toggleModal(contact.id)}>Edit</EditButton>
        </Contact>
      ))}
         {showModal && (
          <ModalWindow contact={editContact } onClose={toggleModal} />
      )}
    </ContactItem>}</>
  );
};

export default Contacts;
