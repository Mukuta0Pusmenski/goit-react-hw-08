import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { selectContacts } from '../../redux/contacts/selectors'; 

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); 

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm /> {/* Форма для додавання контакту */}
      <SearchBox /> {/* Поле для пошуку */}
      {contacts.length > 0 ? (
        <ContactList /> // Відображення списку контактів
      ) : (
        <p>No contacts available. Add your first contact!</p> 
      )}
    </div>
  );
};

export default ContactsPage;
