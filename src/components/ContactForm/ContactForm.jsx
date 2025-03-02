import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters'),
  number: Yup.string()
    .required('Number is required')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      {() => (
        <Form className="ContactForm">
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field name="number" type="tel" placeholder="Number" />
            <ErrorMessage name="number" component="div" className="error" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
