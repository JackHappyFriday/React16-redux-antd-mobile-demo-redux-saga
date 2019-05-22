import Loadable from 'react-loadable';

import LoadVersionJ from '@components/LoadingIndicator/LoadVersion';

export const loadableComponent = ({ loader }) => {
  return Loadable({
    loader,
    loading: LoadVersionJ,
    delay: 200,
    timeout: 10000,
  });
};
