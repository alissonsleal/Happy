import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}
