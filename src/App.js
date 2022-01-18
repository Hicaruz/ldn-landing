import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Loading from "./Components/Loading"
import Home from "./Pages/Home"
import ContentRoute from "./Components/ContentRoute"
import  setGlobalConfig from './hooks/useGlobalConfig';

function BasePage() {
  useEffect(() => {
    setGlobalConfig();
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>

        <Switch>
          {<Redirect exact from="/" to="/home" />}
          <ContentRoute path="/home" component={Home} />


        </Switch>
      </BrowserRouter>

    </Suspense>
  );
}

export default BasePage;
