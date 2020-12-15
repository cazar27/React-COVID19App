import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Data from './Data';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

const DataList = ( {death,confirmed,recovered,last_update,} ) => (
  <Box my={4}>
    <Box my={2}>
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Informacion actualizada del COVID19
      </Typography>
      <Typography variant="h6" component="h2" align="center" gutterBottom>
        En todo el mundo
      </Typography>
    </Box>
    <Data title="Muertos: " number={death} />
    <Data title="Positivos confirmados: " number={confirmed} />
    <Data title="Recuperados:" number={recovered} />
    <Data title="Ultima fecha de actualización: " number={last_update} />
  </Box>
)

DataList.propTypes = {
  death: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired
}

DataList.defaultProps = {
 last_update: new Date()
}

export default DataList;