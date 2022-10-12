import { useState } from 'react';

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleSubmit = (e, set, json) => {
    e.preventDefault();

    if (form.formLocation === '' || form.formGuests === '') {
      console.log('no deje espacios vacios');
      return;
    }
    set(
      json.filter(
        (item) =>
          item.city === form.formLocation && item.maxGuests > form.formGuests,
      ),
    );
  };

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
    handleSubmit,
    handleChange,
    handleClickLocation,
    form,
    addForm,
  };
};
