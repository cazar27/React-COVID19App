import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/themeContext';
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

const Label = styled.li`
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  color: ${props => props.theme.secondaryColor};
  margin: 5px 0;
`;

const Data = ( {number, title } ) => {
  
  const theme = useContext(ThemeContext);

  return (
  
    <DataContainer theme={theme}>
      <Label theme={theme}>
        {title}
      </Label>
      <Number>
        {number}
      </Number>
    </DataContainer>
  )
};

Data.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Data;