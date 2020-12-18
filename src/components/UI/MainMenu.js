import React from 'react';
import PropTypes from 'prop-types';
import {home, spain, contact} from 'conf/routes';
import {Link} from 'react-router-dom';
import {Switch as MaterialSwitch, Container, makeStyles } from '@material-ui/core/';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

const MainHeader = styled.header`
  background-color: ${(props) => props.theme.backgroundColor};
  color:  ${(props) => props.theme.color};
  min-height: 100vh;
`;

const MainMenu = ({onClickChangeThemeButton,currentTheme}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <nav className={classes.root}>
        <Link className="link" label="Home" to={home()}>
          Mundial
        </Link>
        <Link className="link" to={spain()}>
          España
        </Link>
        <Link className="link" to={contact()}>
          Contactar
        </Link>
        <MaterialSwitch color="primary" onClick={onClickChangeThemeButton} />
      </nav>
    </Container>
  );
}

MainMenu.propTypes = {
  onClickChangeThemeButton: PropTypes.func.isRequired
};

export default MainMenu;