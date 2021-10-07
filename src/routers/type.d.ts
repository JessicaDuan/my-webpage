// interface BaseRouter {
//   key: string;
//   title?: string;
//   icon?: any;
// }

// export interface ComponentRouter extends BaseRouter {
//   path: string;
//   exact?: boolean;
//   component?: any;
//   hideInMenu?: boolean;
// }

// interface WrapperRouter extends BaseRouter {
//   children: ComponentRouter[];
// }

// export interface LayoutRouter extends BaseRouter {
//   syncComponent: any;
//   path?: string[];
//   // eslint-disable-next-line no-use-before-define
//   children?: RouterConfig[];
// }

// export type RouterConfig = LayoutRouter | ComponentRouter | WrapperRouter;
export interface RouterConfig {
  key: string;
  title?: string; // MenuLayout中的菜单展示名
  path?: string | string[]; // 访问路径
  component?: () => any; // 渲染的组件
  syncComponent?: any;
  hideInMenu?: boolean; // 使用MenuLayout时是否在菜单中隐藏
  authority?: string[]; // ['角色名/模块名'] 与用户role & privileges组合使用，限制页面访问权限
  icon?: any; // MenuLayout中展示的icon
  redirect?: string; // 重定向目标路由
  children?: Array<RouterConfig>;
  exact?: boolean;
  target?: string;
}
