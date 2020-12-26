import React, {useState} from 'react';
import {makeStyles, InputLabel, FormControl, Select, MenuItem} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  }
}));

const SelectCountries = ({countries}) => {
  const classes = useStyles();
  const [country, setCountry] = useState('');
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const listItems = countries.map((country) =>
    <MenuItem
      key={country.id}
      value={country.id}>
        {country.name}
    </MenuItem>
  );

  return (

    <FormControl className={classes.formControl}>
        <InputLabel id="select-countries" >Elige un pais:</InputLabel>
        <Select className="form-control" onChange={handleChange}  value={country} labelId="select-countries" id="select-countries">
          {listItems}
        </Select>
    </FormControl>
  )
};

export default SelectCountries;