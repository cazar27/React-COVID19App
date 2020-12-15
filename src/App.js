import React, {useState, useEffect} from 'react';
import DataList from './DataList';
//imports from material-ui
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './App.css';

const App = ({}) => {

  const [loadding ,setLoading ] = useState(true);
  const [death ,setDeath ] = useState(null);
  const [confirmed ,setConfirmed ] = useState(null);
  const [recovered ,setRecovered ] = useState(null);
  const [last_update ,setLast_update ] = useState(null);
  //const [countries ,setCountries ] = useState(null);

  useEffect( () => {
    async function fetchData() {
      try {
        const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
        const data = await response.json();
        setLoading(false);
        
          setDeath(data.deaths);
          setConfirmed(data.confirmed);
          setRecovered(data.recovered);
          setLast_update(data.last_update);
          //setCountries(data.countries);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  if(loadding) {
    return (
      <div> Cargando los datos actualizados</div>
    )
  } else {
    return (
      <Container maxWidth="sm">
          <DataList
            death= {death}
            confirmed={confirmed}
            recovered={recovered}
            last_update={last_update}
          />
      </Container>
    )
  }
};

export default App;