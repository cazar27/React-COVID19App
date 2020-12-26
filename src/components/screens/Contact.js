import React, {useState} from 'react';
import {Formik} from 'formik';
import styled from 'styled-components';
import {makeStyles, TextField, Container, Button, FormHelperText } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  button: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

const FormGroup= styled.div`
  margin-bottom: 15px;
`;
const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const initialState = {
  fullname: '',
  email: '',
  message: '',
  image: ''
};

function validateForm(values) {
  const errors = {};

  if(!values.fullname) {
    errors.fullname = 'El nombre es obligatorio';
  }
  if(!values.email) {
    errors.email = 'El email es obligatorio';
  }

  return errors;
}

const Contact =  () => {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  
  function handleSubmit(values) {
    console.log(values);
  }

  function handleChangeFile(event) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <Container maxWidth="sm">
      <h1> Formulario de contacto</h1>
      <Formik 
        initialValues={initialState} 
        validate={validateForm}
        onSubmit={handleSubmit}>
        {({values, errors, touched, handleChange, handleSubmit}) => (
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField label="Nombre completo:" name="fullname" type="text" value={values.fullname} onChange={handleChange} />
            {errors.fullname && touched.fullname && <FormHelperText color="error.dark">{errors.fullname}</FormHelperText>}
            <TextField label="Email" name="email" type="text" value={values.email} onChange={handleChange} />
            {errors.fullname && touched.fullname && <FormHelperText color="error.dark">{errors.email}</FormHelperText>}
            <TextField label="Mensaje:" name="message" value={values.message} onChange={handleChange} />
            <FormGroup>
              <Label>Tu foto:</Label>
              <input label="" type="file" onChange={handleChangeFile} />
              {image && <img width="50%" src={image} alt="Profile icon" />}
            </FormGroup>
            <Button className={classes.button} type="submit" value="Enviar" variant="contained" color="primary">
              Enviar
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  )
}

export default Contact;