import DataList from '../UI/DataList';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useFetch from '../../hooks/useFetch';
import {useParams} from 'react-router-dom';
import Graph from 'components/screens/Graph';

const Country = () => {
  
  let {country_id} = useParams();

  if(country_id==null) country_id = 'spain';
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/'+country_id+'/data.json');
  console.log(data);
  if(loading) {
    return (
      <Container maxWidth="sm"> Seleccione un pais valido</Container>
    )
  } else {
    return (
      <Container maxWidth="sm">
        <Box my={2}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Informacion actualizada del COVID19
          </Typography>
          <Typography variant="h6" component="h2" align="center" gutterBottom>
            En {country_id}
          </Typography>
        </Box>
        <Graph data={data} />
        <DataList
          death={data.deaths}
          confirmed={data.confirmed}
          recovered={data.recovered}
        />
      </Container>
    )
  }
};

export default Country;