import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'; 

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: 'rgb(38, 38, 38)',
  } 

  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values, 
      [key]:value, 
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
      );
  }

  return (
    <PageDefault> 
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault(); 
        setCategorias([
          ...categorias,
          values
        ]); 

        setValues(valoresIniciais);  

      }}>

        <FormField 
          name="nome"
          type="text"
          label="Nome da categoria"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          name="cor"
          type="color"
          label="Cor"
          value={values.nome}
          onChange={handleChange}
        />


        <button>
          Cadastrar
        </button>

      </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                  {categoria.nome}
              </li>
            )
          })}
        </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;