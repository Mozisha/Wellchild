// app/components/HubSpotEmbedForm.tsx
'use client';

import Script from 'next/script';

type HubSpotEmbedFormProps = {
  portalId: string;
  formId: string;
};

export default function HubSpotEmbedForm({ portalId, formId }: HubSpotEmbedFormProps) {
  return (
    <>
      {/* This is the target div where the form will be injected. */}
      {/* We've translated the HTML from HubSpot directly into JSX. */}
      <div
        className="hs-form-frame"
        data-region="na1"
        data-portal-id={portalId}
        data-form-id={formId}
      ></div>

      {/* This is the Next.js optimized way to load the HubSpot script. */}
      {/* It will load after the page is interactive, so it won't slow down your site. */}
      <Script
        id="hubspot-form-script"
        src={`https://js.hsforms.net/forms/embed/${portalId}.js`}
        strategy="lazyOnload"
        defer
      />
    </>
  );
}