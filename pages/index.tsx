import { ReactElement } from 'react';

import LMLayout from '@/components/lm_layout';
import st from '@/styles/sato_home.module.scss';

const Home: NextPageWithLayout = () => {
  return (
    <section className={st.wrapper}>
      <h1 className={st.title}>sato.</h1>
    </section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LMLayout>{page}</LMLayout>;
};

export default Home;
