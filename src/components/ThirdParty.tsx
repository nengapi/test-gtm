"use client";

import { Partytown } from "@builder.io/partytown/react";
import {
  GTM_TAG_ASSISTANT_ACCESSOR,
  GTM_TAG_ASSISTANT_FORWARDER,
  GTMScript,
  partytownResolveUrl,
} from "@superside-oss/partytown-gtm";

export function ThirdParty() {
  const isGTMDebug =
    typeof window !== "undefined" &&
    window.location.host === "www.googletagmanager.com" &&
    window.location.pathname.startsWith("/debug");

  return (
    <>
      <Partytown
        debug={true}
        forward={[GTM_TAG_ASSISTANT_FORWARDER]}
        mainWindowAccessors={[GTM_TAG_ASSISTANT_ACCESSOR]}
        resolveUrl={partytownResolveUrl}
      />
      <GTMScript skipPartytown={isGTMDebug} gtmId={"GTM-M8QWC2M7"} />
    </>
  );
}
