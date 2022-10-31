import { FC } from 'react';

import cx from 'classnames';

import LMHead from '@/components/lm_head';

import st from './lm_layout.module.scss';

const LMLayout: FC<ILMLayout> = ({
  children,
  metaData,
  wrapperClassName,
  wrapperStyle,
}) => {
  return (
    <>
      <LMHead data={metaData} />

      <main className={cx(st.wrapper, wrapperClassName)} style={wrapperStyle}>
        {children}
      </main>
    </>
  );
};

export default LMLayout;
