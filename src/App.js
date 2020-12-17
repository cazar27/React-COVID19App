import React, { useState } from 'react';
import {Container, Breadcrumbs, Link, Switch as MaterialSwitch} from '@material-ui/core/';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from 'Home';
import Spain from 'Spain';
import ThemeContext from 'themeContext';
import {lightTheme, darkTheme} from 'styles/theme';
import styled from 'styled-components';
import 'App.css';
import {home, spain} from 'conf/routes';

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color:  ${(props) => props.theme.color};
  min-height: 100vh;
`;

export default function App() {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const handleChangeTheme = () => {
    //setIsDarkTheme(!setIsDarkTheme);
    setIsDarkTheme (oldValue => !oldValue );
  }

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={currentTheme}>
      <MainContainer theme={currentTheme}>
        <Router>
          <Container maxWidth="sm">
            <Breadcrumbs maxItems={3} aria-label="breadcrumb">
              <Link label="Home" color="textPrimary" href={home()}>
                Mundial
              </Link>
              <Link color="inherit" href={spain()}>
                España
              </Link>
              <MaterialSwitch color="primary" onClick={handleChangeTheme}>Cambiar Tema</MaterialSwitch>
            </Breadcrumbs>
            <Switch>
              <Route path={spain()}>
                <Spain></Spain>
              </Route>
              <Route path={home()}>
                <Home></Home>
              </Route>
            </Switch>
          </Container>
        </Router>
      </MainContainer>
    </ThemeContext.Provider>
  );
}
