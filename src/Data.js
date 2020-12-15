import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Data = ( {number, title } ) => (
  <div>
    <Typography variant="body2" color="textSecondary">
      {title}
    </Typography>
    <Typography variant="body1">
      {number}
    </Typography>
  </div>
);

Data.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Data;