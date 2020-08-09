import React, { useState } from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }


    return (
      <PageTemplate>
        <h1>Cadastro de Categoria: {values.name}</h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategories([
            ...categories, values
          ]);

          setValues(initialValues);
        }}>
          <FormField
          label="Nome da Categoria"
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
          />

          <FormField 
          label="Descrição"
          type="multiline"
          value={values.description}
          name="description"
          onChange={handleChange} />

          <FormField
          label="Cor"
          type="color"
          value={values.color}
          name="color"
          onChange={handleChange}
          />

          <button>Cadastrar</button>
        </form>

        <ul>
          {categories.map((category, index) => {
            return(
              <li key={`${category}${index}`}>
                {category.name}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Home
        </Link>
      </PageTemplate>
    )
  }

  export default CadastroCategoria;