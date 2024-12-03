'use client';
import { Partytown } from '@builder.io/partytown/react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function ThirdParty() {
  return (
    <>
      <Partytown
        debug={true}
        forward={['dataLayer.push']}
        lib="/~partytown/"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-M8QWC2M7"
        type="text/partytown"
      ></script>
      <script type="text/partytown">
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
          window.dataLayer.push(arguments)
        };
        window.gtag('js', new Date());
        window.gtag('config', 'GTM-M8QWC2M7');
      </script>
    </>
  );
}
