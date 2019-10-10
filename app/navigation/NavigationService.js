// NavigationService.js

import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function getCurrentRoute() {
  let route = _navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
}

function popToTop(options = {}) {
  _navigator.dispatch(StackActions.popToTop(options));
}

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute,
  popToTop,
};
