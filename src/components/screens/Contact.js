import React, {useState, useReducer} from 'react';
import {makeStyles, TextField, Container, Button} from '@material-ui/core/';

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

const MODIFY_INPUT = 'MODIFY_INPUT';

const initialState = {
  fullname: '',
  email: '',
  message: '',
}

function reducer(state, action) {
  if(action.type === MODIFY_INPUT) {
    return {
      ...state,
      [action.field]: action.value
    }
  } else {
    return state;
  }
}

const Contact = () => { 
  
  const [state, dispach] = useReducer(reducer, initialState);
  const [file, setFile] = useState(null);
  const classes = useStyles();

  function handleSubmit(evt) {
    evt.preventDefault();
    const {fullname, email, message} = state;
    console.log(`nombre: ${fullname} mail: ${email} mail: ${message} file: ${file}`);
  }

  function handleChangeInput(evt) {
    dispach({
      type: MODIFY_INPUT,
      field: evt.target.name,
      value: evt.target.value
    });
  }

  function handleChangeFile(evt) {
    setFile(URL.createObjectURL(evt.target.files[0]));
  }

  return (
    <Container maxWidth="sm">
      <form className={classes.root} autoComplete="off">
        <TextField id="fullname" value={state.fullname} onChange={handleChangeInput} label="Su nombre completo" color="secondary" />
        <TextField id="email" value={state.email} onChange={handleChangeInput} label="Su email" color="secondary" />
        <TextField id="message" value={state.message} onChange={handleChangeInput} label="Su Mensaje" color="secondary" />
        <input type="file" onChange={handleChangeFile} />
        {file && <img  alt="profile" src={file} />}
        <Button className={classes.button} type="submit" value="Enviar" onClick={handleSubmit} variant="contained" color="primary">
          Enviar
        </Button>
        
      </form>
    </Container>
  );
}

export default Contact;