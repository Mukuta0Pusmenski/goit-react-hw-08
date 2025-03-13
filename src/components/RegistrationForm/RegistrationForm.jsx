import toast from 'react-hot-toast';

const handleSubmit = async (values, { resetForm }) => {
  try {
    await dispatch(register(values));
    toast.success('Registration successful!');
    resetForm();
  } catch (error) {
    toast.error('Registration failed. Please try again.');
  }
};
