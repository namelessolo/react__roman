import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle.js';
import { theme } from 'assets/styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Wrapper } from './Root.styled';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
