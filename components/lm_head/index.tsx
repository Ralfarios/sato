import { FC } from 'react';

import Head from 'next/head';

const LMHead: FC<ILMHead> = ({ data = {} }) => {
  const {
    description = '',
    keyword = [],
    titlePage = '',
    imgUrl = '',
    url = '',
  } = data;

  const metaDescription = `${description ? `${description} | ` : ''}sato`;
  const metaKeyword = `sato, satomizu, artist, minimalist, art${
    keyword && keyword?.length > 1 ? `, ${keyword.join(', ')}` : ''
  }`;
  const metaTitle = `${titlePage ? `${titlePage} | ` : ''}sato`.trim();

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeyword} />
      {imgUrl && (
        <>
          <meta property="og:image:url" content={imgUrl} />
          <meta property="og:image" content={imgUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
          <meta property="og:image:alt" content={metaTitle} />
          <meta property="og:image:type" content="image/png" />
        </>
      )}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:url" content={url} />
      {imgUrl && <meta property="twitter:image" content={imgUrl} />}
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default LMHead;
