import DataList from '../UI/DataList';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useFetch from '../../hooks/useFetch';

const Country = (country) => {
  if(country==null) country = 'jamaica';
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/'+country+'/data.json');

  if(loading) {
    return (
      <Container maxWidth="sm"> Cargando los datos actualizados</Container>
    )
  } else {
    return (
      <Container maxWidth="sm">
        <Box my={2}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Informacion actualizada del COVID19
          </Typography>
          <Typography variant="h6" component="h2" align="center" gutterBottom>
            En {country}
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

export default Country;