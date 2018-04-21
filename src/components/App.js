import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import Gif from './Gif';
import { ContentWrap, Sidebar, Pages, NavBar, Title } from '../styled';

class App extends Component {
  render() {
    return (
      <Router>
        <ContentWrap>
          <Sidebar>
            <Title>React App</Title>

            <NavBar>
              <NavLink to="/" exact>
                Home
              </NavLink>
              <NavLink to="/counter">Counter</NavLink>
              <NavLink to="/gif">GIF</NavLink>
            </NavBar>
          </Sidebar>

          <Pages>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/gif" component={Gif} />
          </Pages>
        </ContentWrap>
      </Router>
    );
  }
}

export default App;
