import { BasicLayout, MenuLayout } from '@/layouts';
import { RouterConfig } from './type';

const menuLayoutRoutes: RouterConfig[] = [
  {
    key: 'home',
    icon: 'home',
    title: '首页',
    path: '/',
    exact: true,
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home'),
  },
];

const basicLayoutRoutes: (RouterConfig & { path: string })[] = [
  {
    key: 'minesweeper',
    title: '扫雷',
    path: '/minesweeper/',
    component: () => import(/* webpackChunkName: "minesweeper" */ '@/pages/minesweeper'),
  },
  {
    key: 'go-chess',
    title: '围棋',
    path: '/go-chess/',
    component: () => import(/* webpackChunkName: "go-chess" */ '@/pages/go-chess'),
  },
];

const ROUTER_CONFIGS: RouterConfig[] = [
  {
    key: 'basic-layout',
    path: basicLayoutRoutes.map((o) => o.path),
    syncComponent: BasicLayout,
    children: basicLayoutRoutes,
  },
  {
    key: 'menu-layout',
    syncComponent: MenuLayout,
    children: menuLayoutRoutes,
  },
];

export default ROUTER_CONFIGS;
