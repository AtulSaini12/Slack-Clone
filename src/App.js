import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar>
              <Switch>
                <Router exact path="/"></Router>
              </Switch>
            </Sidebar>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
