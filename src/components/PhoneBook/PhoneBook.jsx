import { Container, ListTitle } from "./PhoneBook.styled";
import Form from "./form/Form";
import Contacts from "./contacts/Contacts.jsx";
import Filter from "./filter/Filter.jsx"; 


function PhoneBook  () { 
    return (
        <Container>
        <h1>Phonebook</h1>
        <Form />
        <ListTitle>Contacts</ListTitle>
        <Filter />
        <Contacts />
      </Container>
    )
}
export default PhoneBook;