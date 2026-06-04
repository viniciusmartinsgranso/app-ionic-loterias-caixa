import { apiRoutes } from "./apiRoutes";

export const environment = {
  production: true,
  api: {
    apiBaseUrl: 'https://loteriascaixa-api.herokuapp.com/api',
    routes: apiRoutes
  },
};
