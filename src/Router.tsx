import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as routes from "src/constants/routes";
import Home from "src/components/Home";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
