import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {lightTheme, darkTheme} from 'styles/theme';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import {home, spain, contact} from 'conf/routes';
import Home from 'components/screens/Home';
import Contact from 'components/screens/Contact';
import MainMenu from 'components/UI/MainMenu';
import Country from 'components/screens/Country';

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color:  ${(props) => props.theme.color};
  min-height: 100vh;
`;

export default function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleChangeTheme = () => {
    setIsDarkTheme (oldValue => !oldValue );
  }
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme}>
        <MainContainer theme={currentTheme}>
          <Router path='React-COVID19App'>
            <MainMenu onClickChangeThemeButton={handleChangeTheme} theme={currentTheme} />
            <Switch>
              <Route exact path={home()} component={Home}/>
              <Route exact path={spain()} component={Country}/>
              <Route exact path={contact()} component={Contact}/>
              <Route path="/country/:country_id" component={Country}/>
            </Switch>
          </Router>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
