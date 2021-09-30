import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from "./routes";

function App() {
  return (
    <Router>
      <Navbar />

      {/* 하나만 매칭! 단, 순서가 중요. */}
      <Switch>
        {/* 하나 당 한 페이지 */}
        {routes.map(route=>{
          return(
            <Route key={route.path} path={route.path} exact>
              <route.component />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
