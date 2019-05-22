/**
 * 20190325
 * 所有路由配置优化，注意name不要一样，里面会用name作为key循环,这里的路由都是使用动画，左进右出的动画
 */

import TestPage from '@page/Test/Loadable';

export default [
  { path: '/test', name: 'TestPage', component: TestPage, auth: true, animation: false },
];
