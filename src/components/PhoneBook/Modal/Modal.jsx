import { useEffect, useState } from "react";
import { Modal, Overlay } from "./Modal.styled";
import { useEditContactsMutation } from "../../../contactsSlice";

export default function ModalWindow({ onClose, contact }) {
    
    const [editContact] = useEditContactsMutation();
    const [name, setName] = useState(contact.name);
    const [number, setNumber] = useState(contact.number);
    
    
    const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        editContact({name, number,contactId: contact.id});
        onClose();
    };
  
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
    onClose();
    }
  };

   const handleKeydown = (e) => {
    if (e.code === "Escape") {
    onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {window.removeEventListener("keydown",handleKeydown)}
  })

    return (
      <Overlay onClick={handleBackdropClick}>
        <Modal>
            <form>
                <input type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}>
                </input>    
                <input type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        value={number}
                        onChange={handleChange}>
                </input>
                <button type="submit" onClick={onHandleSubmit}>Edit</button>    
           </form>
        </Modal>
      </Overlay>
    );
}
