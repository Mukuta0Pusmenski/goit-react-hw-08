import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className="ContactItem">
      <span>{contact.name}: {contact.number}</span>
      <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
    </li>
  );
};

export default ContactItem;
