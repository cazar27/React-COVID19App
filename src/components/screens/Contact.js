import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Contact = () => { 
  
  const [fullname, setFullmame] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(`nombre: ${fullname} mail: ${email} mail: ${message}`);
  }

  function handleChangeFullname(evt) {
    setFullmame(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangeMessage(evt) {
    setMessage(evt.target.value);
  }

  return (
    <form className={classes.root} autoComplete="off">
      <TextField id="fullname" value={fullname} onChange={handleChangeFullname} label="Su nombre completo" color="secondary" />
      <TextField id="email" value={email} onChange={handleChangeEmail} label="Su email" color="secondary" />
      <TextField id="message" value={message} onChange={handleChangeMessage} label="Su Mensaje" color="secondary" />
      <input type="submit" value="Enviar" onClick={handleSubmit} />
    </form>
  );
}

export default Contact;