import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ThemeContext from './themeContext';
import styled from 'styled-components';

const DataContainer = styled.div`
  color: ${props => props.theme.color};
  text-align: left;
`;

const Number = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0;
`;

const CustomDate = ( {lastupdate, title } ) => {
  const theme = useContext(ThemeContext);

  return (
    <DataContainer theme={theme}>
      <Typography variant="body2" color="textSecondary">
        {title}
      </Typography>
      <Number>
        {lastupdate}
      </Number>
    </DataContainer>
  )
};

CustomDate.propTypes = {
  title: PropTypes.string,
}

export default CustomDate;