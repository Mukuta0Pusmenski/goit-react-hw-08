// import React from 'react';

// const ContactsPage = () => {
//   return <h1>Contacts Page</h1>;
// };

// export default ContactsPage;
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}: {contact.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
