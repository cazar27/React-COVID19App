import DataList from '../UI/DataList';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useFetch from '../../hooks/useFetch';

const Spain = () => {
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/spain/data.json');
  console.log(data)
  if(loading) {
    return (
      <Container maxWidth="sm">Cargando los datos actualizados</Container>
    )
  } else {
    return (
      <Container maxWidth="sm">
        <Box my={2}>
          <Typography variant="h4" component="h1" gutterBottom>
            Información actualizada del COVID19 en España
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

export default Spain;