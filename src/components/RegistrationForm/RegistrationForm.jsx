// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import styles from './RegistrationForm.module.css';

// const RegistrationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

// const RegistrationForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     console.log('Form submitted:', values);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ name: '', email: '', password: '' }}
//       validationSchema={RegistrationSchema}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form className={styles.form}>
//           <label>
//             Name:
//             <Field type="text" name="name" className={styles.input} />
//           </label>
//           <ErrorMessage name="name" component="div" className={styles.error} />
//           <label>
//             Email:
//             <Field type="email" name="email" className={styles.input} />
//           </label>
//           <ErrorMessage name="email" component="div" className={styles.error} />
//           <label>
//             Password:
//             <Field type="password" name="password" className={styles.input} />
//           </label>
//           <ErrorMessage name="password" component="div" className={styles.error} />
//           <button type="submit" className={styles.button}>Register</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegistrationForm;
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    const result = await dispatch(register(values));
    if (register.fulfilled.match(result)) {
      navigate('/contacts'); // Перенаправляє на контакти
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <label>
            Name:
            <Field type="text" name="name" className={styles.input} />
          </label>
          <ErrorMessage name="name" component="div" className={styles.error} />
          <label>
            Email:
            <Field type="email" name="email" className={styles.input} />
          </label>
          <ErrorMessage name="email" component="div" className={styles.error} />
          <label>
            Password:
            <Field type="password" name="password" className={styles.input} />
          </label>
          <ErrorMessage name="password" component="div" className={styles.error} />
          <button type="submit" className={styles.button}>Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
