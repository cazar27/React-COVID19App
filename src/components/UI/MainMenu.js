import React from 'react';
import PropTypes from 'prop-types';
import {home, spain, contact} from 'conf/routes';
import {Link} from 'react-router-dom';
import {Switch as MaterialSwitch, Container, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));
function handleLink(evt) {
  const parent = evt.target.parentNode;
  parent.childNodes.forEach(link => {
    if(link.tagName === 'A' ) link.className = 'link';
  });
  evt.target.className = 'activeLink';
}

const MainMenu = ({onClickChangeThemeButton,currentTheme}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <nav className={classes.root}>
        <Link onClick={handleLink} className="activeLink" label="Home" to={home()}>
          Mundial
        </Link>
        <Link onClick={handleLink} className="link" to={spain()}>
          España
        </Link>
        <Link onClick={handleLink} className="link" to={contact()}>
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