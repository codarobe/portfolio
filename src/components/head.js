import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
//import config from '@config';

import favicon from '@images/favicons/favicon.ico';
import favicon32x32 from '@images/favicons/favicon-32x32.png';
import favicon16x16 from '@images/favicons/favicon-16x16.png';
import appleTouchIcon from '@images/favicons/apple-touch-icon.png';
import safariPinnedTab from '@images/favicons/safari-pinned-tab.svg';

const Head = ({ metadata }) => (
  <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title itemProp="name" lang="en">
          {metadata.title}
      </title>
      <link rel="shortcut icon" href={ favicon } />
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta itemProp="name" content={metadata.title} />
      <meta itemProp="description" content={metadata.description} />

    <link rel="apple-touch-icon" sizes="180x180" href={ appleTouchIcon } />
    <link rel="icon" type="image/png" sizes="32x32" href={ favicon32x32 } />
    <link rel="icon" type="image/png" sizes="16x16" href={ favicon16x16 } />
    <link rel="mask-icon" href={ safariPinnedTab } color="#5bbad5" />
    <link rel="shortcut icon" href={ favicon } />
    <meta name="apple-mobile-web-app-title" content="CodyRobertson.com" />
    <meta name="application-name" content="CodyRobertson.com" />
    <meta name="msapplication-TileColor" content="#09071d" />
    <meta name="msapplication-config" content="/images/favicons/browserconfig.xml" />
    <meta name="theme-color" content="#09071d" />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
