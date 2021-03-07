import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as routes from "src/constants/routes";
import Home from "src/components/Home";
import Snrl from "./components/Snrl";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route path={routes.SNRL} component={Snrl} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
