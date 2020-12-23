import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {lightTheme, darkTheme} from 'styles/theme';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import {home, spain, contact} from 'conf/routes';
import Home from 'components/screens/Home';
import Spain from 'components/screens/Spain';
import Contact from 'components/screens/Contact';
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
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme}>
        <MainContainer theme={currentTheme}>
          <Router>
            <MainMenu onClickChangeThemeButton={handleChangeTheme} theme={currentTheme} />
            <Switch>
              <Route exact path={home()} component={Home}/>
              <Route exact path={spain()} component={Spain}/>
              <Route exact path={contact()} component={Contact}/>
            </Switch>
          </Router>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
