import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DataContainer = styled.div`
  color: ${props => props.theme.color};
  text-align: left;
  padding: 10px 0;
`;

const Number = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0;
`;

const Label = styled.span`
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  color: ${props => props.theme.secondaryColor};
  margin: 5px 0;
`;

const Data = ( {number, title } ) => {

  const numberFormat = new Intl.NumberFormat('de-DE');

  return (
  
    <DataContainer>
      <Label>
        {title}
      </Label>
      <Number>
        {numberFormat.format(number)}
      </Number>
    </DataContainer>
  )
};

Data.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Data;