import React, { FC, lazy, PropsWithChildren } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import SuspenseWrapper from '@/components/suspense-wrapper';
import { isArray, isEmpty } from '@/utils';
import routerConfigs from './config';
import history from './history';
import { RouterConfig } from './type';

const renderEmptyPage: FC<PropsWithChildren<null>> = ({ children }) => <>{children}</>;

function renderRoute(route: RouterConfig) {
  const { key, path, exact, component, syncComponent, children } = route;

  let Component;
  if (component) {
    Component = lazy(component);
  } else if (syncComponent) {
    Component = syncComponent;
  } else {
    Component = renderEmptyPage;
  }

  if (isArray(children) && !isEmpty(children)) {
    return (
      <Route key={key} path={path}>
        <Component>
          <Switch>{children.map((c) => renderRoute(c))}</Switch>
        </Component>
      </Route>
    );
  }

  return <Route key={key} path={path} exact={exact} component={Component} />;
}

const Routers = () => {
  return (
    <Router history={history}>
      <SuspenseWrapper>
        <Switch>{routerConfigs.map((route) => renderRoute(route))}</Switch>
      </SuspenseWrapper>
    </Router>
  );
};

export default Routers;
