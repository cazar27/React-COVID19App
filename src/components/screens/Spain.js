import DataList from '../UI/DataList';
//imports from material-ui
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useFetch from '../../hooks/useFetch';

const Spain = () => {
  const {data, loading} = useFetch('https://enrichman.github.io/covid19/world/spain/data.json');

  if(loading) {
    return (
      <div> Cargando los datos actualizados</div>
    )
  } else {
    return (
      <Container maxWidth="sm">
        <Box my={2}>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Informacion actualizada del COVID19
          </Typography>
          <Typography variant="h6" component="h2" align="center" gutterBottom>
            En España
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