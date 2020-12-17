import React, { useState/*, lazy*/, Suspense } from 'react';
import {Container} from '@material-ui/core/';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ThemeContext from 'contexts/themeContext';
import {lightTheme, darkTheme} from 'styles/theme';
import styled from 'styled-components';
import 'App.css';
import {home, spain, contact} from 'conf/routes';
import Home from 'components/screens/Home';
import Spain from 'components/screens/Spain';
import Contact from 'components/screens/Contact';

import MainMenu from 'components/UI/MainMenu';

// const Home = lazy(() => import('components/screens/Home'));
// const Spain = lazy(() => import('components/screens/Spain'));
// const Contact = lazy(() => import('components/screens/Contact'));

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
        <Suspense fallback={<div>Cargando...</div>}>
          <Router>
            <Container maxWidth="sm">
              <MainMenu onClickChangeThemeButton={handleChangeTheme} ></MainMenu>
              <Switch>
                <Route path={home()}>
                  <Home />
                </Route>
                <Route path={spain()}>
                  <Spain />
                </Route>
                <Route path={contact()}>
                  <Contact />
                </Route>
              </Switch>
            </Container>
          </Router>
        </Suspense>
      </MainContainer>
    </ThemeContext.Provider>
  );
}
