import Start from '../../containers/Start'
import Grid from '../../containers/Grid'

export const routes = [
  {
    path: '/',
    name : 'home',
    component: Start
  },
  {
    path: '/grid',
    name : 'grid',
    component: Grid
  }
];
