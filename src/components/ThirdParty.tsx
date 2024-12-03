"use client";

// import { GoogleTagManager } from "@next/third-parties/google";

import { Partytown } from "@builder.io/partytown/react";
import {
  GTM_TAG_ASSISTANT_ACCESSOR,
  GTM_TAG_ASSISTANT_FORWARDER,
  GTMScript,
  partytownResolveUrl,
} from "@superside-oss/partytown-gtm";

export function ThirdParty() {
  return (
    <>
      {/* <GoogleTagManager gtmId="GTM-M8QWC2M7" /> */}
      {/* <Partytown
        debug={true}
        forward={['dataLayer.push']}
        lib="/~partytown/"
        resolveUrl={(url, location, type) => {
          if (type === 'script' && url.hostname.includes('googletagmanager.com')) {
            const proxyUrl = new URL(url);
            proxyUrl.searchParams.append('gtm', 'true');
            return proxyUrl;
          }
          return url;
        }}
      />
      <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=GTM-M8QWC2M7"></script>
      <script type="text/partytown" dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'GTM-M8QWC2M7');
        `,
      }} /> */}
      <Partytown
        debug={true}
        forward={["dataLayer.push", GTM_TAG_ASSISTANT_FORWARDER]}
        mainWindowAccessors={[GTM_TAG_ASSISTANT_ACCESSOR]}
        resolveUrl={partytownResolveUrl}
      />
      <GTMScript gtmId={'GTM-M8QWC2M7'} />
    </>
  );
}
