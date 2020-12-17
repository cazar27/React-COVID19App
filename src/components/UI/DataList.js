import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import 'fontsource-roboto';
import Data from './Data';

//import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

const DataList = ( {death,confirmed,recovered,last_update,} ) => (
  <Box my={4}>
    <Data title="Muertos: " number={death} />
    <Data title="Positivos confirmados: " number={confirmed} />
    <Data title="Recuperados:" number={recovered} />
  </Box>
)

DataList.propTypes = {
  death: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
}

export default DataList;