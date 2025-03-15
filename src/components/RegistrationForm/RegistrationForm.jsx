// 
const RegistrationForm = () => {
  return (
    <div>
      <p>Testing: Registration Form Loaded</p>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <label>Name:</label>
            <Field type="text" name="name" className={styles.input} />
            <ErrorMessage name="name" component="div" className={styles.error} />
            <button type="submit" className={styles.button}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
