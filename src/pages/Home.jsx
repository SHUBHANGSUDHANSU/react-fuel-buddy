import { useMemo } from 'react'
import Page from '../Page.jsx'
import PageShell from '../components/PageShell.jsx'

const jsonLdScripts = [
  `{
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "url": "https://www.fuelbuddy.in",
    "name": "Fuelbuddy",
    "alternateName": "Tries solution"
}`,
  `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.fuelbuddy.in",
    "additionalType": "https://www.practo.com/",
    "name": "FuelBuddy",
    "logo": "./wp-content/uploads/2023/10/logo-12-e1705658680102.png",
    "url": "https://www.fuelbuddy.in",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": null,
        "contactType": "customer service",
        "email": "",
        "contactOption": "",
        "areaServed": "",
        "availableLanguage": null
    },
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "India",
        "addressLocality": "Gurugram",
        "addressRegion": null,
        "postalCode": null,
        "streetAddress": null
    }
}`,
]

export default function Home() {
  const jsonLdNodes = useMemo(
    () =>
      jsonLdScripts.map((content, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: content }}
          key={`jsonld-${index}`}
          type="application/ld+json"
        />
      )),
    [],
  )

  return (
    <PageShell>
      <Page />
      {jsonLdNodes}
    </PageShell>
  )
}
