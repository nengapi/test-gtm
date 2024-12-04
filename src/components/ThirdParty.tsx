"use client";

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
      <Partytown
        debug={true}
        forward={[GTM_TAG_ASSISTANT_FORWARDER]}
        mainWindowAccessors={[GTM_TAG_ASSISTANT_ACCESSOR]}
        resolveUrl={partytownResolveUrl}
      />
      <GTMScript skipPartytown={true} gtmId={"GTM-M8QWC2M7"} />
    </>
  );
}
