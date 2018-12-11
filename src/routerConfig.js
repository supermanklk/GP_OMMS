// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
import Home from './pages/Home';
import Page3 from './pages/Page3';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import UserTable from './pages/UserTable';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideFooterLayout,
    component: Home,
  },
  {
    path: '/page3',
    layout: HeaderAsideFooterLayout,
    component: Page3,
  },
  /* 如果想显示单独的页面,就不要使用 layout 将其包围*/
  {
    path: '/loginPage',
    component: LoginPage,
  },
  /* 用户信息 */
  {
    path : '/userInfo',
    layout: HeaderAsideFooterLayout,
    component : UserTable,
  },
  /* 路径不存在展示的页面 */
  {
    path: '*',
    layout: HeaderAsideFooterLayout,
    component: NotFound,
  },
];

export default routerConfig;
