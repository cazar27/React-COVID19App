import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import 'fontsource-roboto';

import Data from './Data';

const deathColor = { color: '#f44336' }, confirmedColor = { color: '#f44336' }, recoveredColor= { color: '#f44336' };

const DataList = ( {death,confirmed,recovered} ) => (
  <Box my={4}>
    <Data title="Fallecidos: " number={death} color={deathColor}/>
    <Data title="Positivos: " number={confirmed} color={confirmedColor}/>
    <Data title="Recuperados:" number={recovered} color={recoveredColor}/>
  </Box>
  
)

DataList.propTypes = {
  death: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired
}

export default DataList;