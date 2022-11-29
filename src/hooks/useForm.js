import { useState } from 'react';

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm(() => ({
      ...form,
      [name]: value,
    }));
  };

  const handleClickLocation = (e) => {
    setForm(() => ({
      ...form,
      formLocation: e.target.innerText,
    }));
  };

  const addForm = (state) => {
    setForm(state);
  };
  return {
    handleChange,
    handleClickLocation,
    form,
    addForm,
  };
};
