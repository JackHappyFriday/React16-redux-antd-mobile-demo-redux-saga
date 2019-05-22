/**
 * 20190325
 * 所有路由配置优化，注意name不要一样，里面会用name作为key循环，这里是没有动画的操作
 */

import ClaimPage from '@page/Claim/Loadable';
import ApprovalPage from '@page/Approval/Loadable';
import BookPage from '@page/Book/Loadable';
import MePage from '@page/Me/Loadable';
import NoFondPage from '@page/NoFond/Loadable';
import LoadingJRound from '@components/LoadingIndicator/LoadingRound';
import LoadingJLine from '@components/LoadingIndicator/LoadingLine';
import LoadingAntdMobile from '@components/LoadingIndicator/LoadingAntdMobile';
import LoadingVersion from '@components/LoadingIndicator/LoadVersion';
import AnalysisPage from '@page/Analysis/Loadable';
import ReactPlaceholderJ from '@components/ReactPlaceLoader';
import LoginPage from '@page/Login/Loadable';
import LocalePage from '@page/Me/locale/Loadable';
import PageGo from '@page/PageGo/Loadable';
import FormPage from '@page/PageGo/FormPage/Loadable';
import ErrorBoundaryPage from '@page/PageGo/ErrorBoundaryPage/Loadable';
import PullFreshPage from '@page/PageGo/PullFreshPage/Loadable';
import ImagePreviewPage from '@page/PageGo/ImagePreviewPage/Loadable';
import ImagePage from '@page/PageGo/ImagePage/Loadable';
import ToastPage from '@page/PageGo/ToastPage/Loadable';
import ButtonPage from '@page/PageGo/ButtonPage/Loadable';

export default [
  { path: '/approval', name: 'ApprovalPage', component: ApprovalPage, auth: true, animation: false, exact: true },
  { path: '/book', name: 'BookPage', component: BookPage, auth: true, animation: false, exact: true },
  { path: '/me', name: 'MePage', component: MePage, auth: true, animation: false, exact: true },
  { path: '/nofond', name: 'NoFondPage', component: NoFondPage, auth: false, animation: false },
  { path: '/loadround', name: 'LoadingJRound', component: LoadingJRound, auth: true, animation: false },
  { path: '/loadline', name: 'LoadingJLine', component: LoadingJLine, auth: true, animation: false },
  { path: '/loadantd', name: 'LoadingAntdMobile', component: LoadingAntdMobile, auth: true, animation: false },
  { path: '/loadversion', name: 'LoadingVersion', component: LoadingVersion, auth: true, animation: false },
  { path: '/analysis', name: 'AnalysisPage', component: AnalysisPage, auth: true, animation: false },
  { path: '/place', name: 'ReactPlaceholderJ', component: ReactPlaceholderJ, auth: true, animation: false },
  { path: '/login', name: 'LoginPage', component: LoginPage, auth: true, animation: false },
  { path: '/me/language', name: 'LocalePage', component: LocalePage, auth: true, animation: false },
  { path: '/pagego', name: 'PageGo', component: PageGo, auth: true, animation: false },
  { path: '/form', name: 'FormPage', component: FormPage, auth: true, animation: false },
  { path: '/error', name: 'ErrorBoundaryPage', component: ErrorBoundaryPage, auth: true, animation: false },
  { path: '/toast', name: 'ToastPage', component: ToastPage, auth: true, animation: false },
  { path: '/button', name: 'ButtonPage', component: ButtonPage, auth: true, animation: false },
  { path: '/imagepreview', name: 'ImagePreviewPage', component: ImagePreviewPage, auth: true, animation: false },
  { path: '/img', name: 'ImagePage', component: ImagePage, auth: true, animation: false },
  { path: '/pullfresh', name: 'PullFreshPage', component: PullFreshPage, auth: true, animation: false },
  { path: '/', name: 'ClaimPage', component: ClaimPage, auth: true, animation: false, exact: true },
];
