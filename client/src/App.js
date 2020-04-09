import React from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Room from './components/Room/Room';

const AppContainer = styled.div`
  font-family: 'Inter UI', sans-serif;
`;

const App = () => (
    <AppContainer>
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Room} />
        </Router>
    </AppContainer>
);

export default App;