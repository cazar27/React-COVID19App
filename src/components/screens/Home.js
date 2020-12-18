import DataList from '../UI/DataList';
import {Container, Typography, Box} from '@material-ui/core/';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/full.json');

  if(loading) {
    return (
      <div>Cargando los datos actualizados</div>
    )
  } else {
    return (
      <Container maxWidth="sm">
        <Box my={2}>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Informacion actualizada del COVID19
          </Typography>
          <Typography variant="h6" component="h2" align="center" gutterBottom>
            En todo el mundo
          </Typography>
        </Box>
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