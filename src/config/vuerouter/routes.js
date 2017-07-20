import Start from '../../containers/Start'
import Grid from '../../containers/Grid'
import Auth from '../../containers/Auth'

export const routes = [
  {
    path: '/',
    name : 'authentification',
    component: Auth
  },
  {
    path: '/start',
    name : 'start',
    component: Start
  },
  {
    path: '/grid',
    name : 'grid',
    component: Grid
  }
];
