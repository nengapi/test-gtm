'use client';
import { Partytown } from '@builder.io/partytown/react';

export function ThirdParty() {
  return (
    <>
      <Partytown
        debug={true}
        forward={['dataLayer.push']}
        lib="/~partytown/"
      />
        <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=GTM-M8QWC2M7"></script>
        <script type="text/partytown" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'GTM-M8QWC2M7');
          `,
        }} />
    </>
  );
}
