import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
// import { fetchContacts } from '../../redux/contacts/operations';
import './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="ContactList">
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
