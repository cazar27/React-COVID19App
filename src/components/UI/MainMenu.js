import React from 'react';
import PropTypes from 'prop-types';
import {home, spain, contact} from 'conf/routes';
import {Breadcrumbs, Link, Switch as MaterialSwitch} from '@material-ui/core/';

const MainMenu = ({onClickChangeThemeButton}) => (
  <Breadcrumbs maxItems={4} aria-label="breadcrumb">
    <Link label="Home" color="textPrimary" href={home()}>
      Mundial
    </Link>
    <Link color="inherit" href={spain()}>
      España
    </Link>
    <Link color="inherit" href={contact()}>
      Contactar
    </Link>
    <MaterialSwitch color="primary" onClick={onClickChangeThemeButton} />
  </Breadcrumbs>
);

MainMenu.propTypes = {
  onClickChangeThemeButton: PropTypes.func.isRequired
};

export default MainMenu;