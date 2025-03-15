import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/Filter/Filter'; // Якщо компонент називається "Filter"
import ContactList from '../../components/ContactList/ContactList';
import { selectContacts } from '../../redux/contacts/selectors'; // Перевірте правильність шляху

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); // Отримуємо контакти з Redux

  useEffect(() => {
    dispatch(fetchContacts()); // Завантажуємо контакти після рендера
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm /> {/* Форма для додавання контакту */}
      <SearchBox /> {/* Поле для пошуку контактів */}
      {contacts.length > 0 ? (
        <ContactList /> {/* Відображення списку контактів */}
      ) : (
        <p>No contacts available. Add your first contact!</p>
      )}
    </div>
  );
};

export default ContactsPage;
