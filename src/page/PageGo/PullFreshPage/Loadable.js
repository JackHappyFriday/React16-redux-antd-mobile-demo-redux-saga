/**
 * Asynchronously loads the components
 */
import { loadableComponent } from '../../../router/loadable';

export default loadableComponent({
  loader: () => import(/* webpackChunkName:"LoadPullFreshPageIndex" */ './index.js'),
});
