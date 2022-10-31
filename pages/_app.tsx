import { ReactElement } from 'react';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppPropswithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}
