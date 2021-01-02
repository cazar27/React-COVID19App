import React, {useState} from 'react';
import {makeStyles, InputLabel, FormControl, Select, MenuItem} from '@material-ui/core/';
import {useHistory} from "react-router-dom";

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

  function compare(a, b) {
    if (a.name<b.name) {
      return -1;
    }
    if (a.name>b.name) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  }

  const classes = useStyles();
  const [country, setCountry] = useState('');
  countries = countries.sort(compare);
  let history = useHistory();
  const handleChange = (event) => {
    setCountry(event.target.value);

    history.push('/country/'+event.target.value);
  };

  const listItems = countries.map((country) =>
    <MenuItem
      key={country.id}
      value={country.id}>
        {country.name}
    </MenuItem>
  );

  if(countries) {
    return (
    
      <FormControl className={classes.formControl}>
          <InputLabel id="select-countries" >Elige un pais:</InputLabel>
          <Select className="form-control" onChange={handleChange} value={country} labelId="select-countries" id="select-countries">
            {listItems}
          </Select>
      </FormControl>
    
    )
  }
};

export default SelectCountries;