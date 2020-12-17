import React, { useState } from 'react';
import {Container} from '@material-ui/core/';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from 'Home';
import Spain from 'Spain';
import ThemeContext from 'themeContext';
import {lightTheme, darkTheme} from 'styles/theme';
import styled from 'styled-components';
import 'App.css';
import {home, spain} from 'conf/routes';
import MainMenu from 'components/UI/MainMenu';

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
            <MainMenu onClickChangeThemeButton={handleChangeTheme} ></MainMenu>
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
