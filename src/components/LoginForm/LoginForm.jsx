import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Login attempt:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <label>
            Email:
            <Field type="email" name="email" />
          </label>
          <ErrorMessage name="email" component="div" />

          <label>
            Password:
            <Field type="password" name="password" />
          </label>
          <ErrorMessage name="password" component="div" />

          <button type="submit">Log In</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
