import toast from 'react-hot-toast';

const handleSubmit = async (values, { resetForm }) => {
  try {
    await dispatch(login(values));
    toast.success('Login successful!');
    resetForm();
  } catch (error) {
    toast.error('Login failed. Please check your credentials.');
  }
};

export default LoginForm;
