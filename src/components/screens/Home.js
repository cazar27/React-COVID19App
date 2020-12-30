import DataList from '../UI/DataList';
import {Container, Typography, Box} from '@material-ui/core/';
import useFetch from 'hooks/useFetch';
import Graph from 'components/screens/Graph';

const Home = () => {
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/full.json');

  if(loading) {
    return (
      <Container maxWidth="sm">Cargando los datos actualizados</Container>
    )
  } else {
    return (
      <Container maxWidth="sm">
        <Box my={2}>
          <Typography variant="h4" component="h1" gutterBottom>
            Información actualizada del COVID19 en todo el mundo
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

export default Home;