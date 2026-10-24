import logo from "../../assets/images/hospudka-logo.png";
import type { ContactData } from "../../types/contact";
import type { OpeningHoursData } from "../../types/openingHours";

type StructuredDataProps = {
  contact: ContactData | null;
  openingHours: OpeningHoursData | null;
};

const SITE_URL = "https://hospudkapodbousovem.cz/";

const DAY_LABELS: Record<string, string> = {
  monday: "Mo",
  tuesday: "Tu",
  wednesday: "We",
  thursday: "Th",
  friday: "Fr",
  saturday: "Sa",
  sunday: "Su",
};

function StructuredData({ contact, openingHours }: StructuredDataProps) {
  const formattedOpeningHours = Object.entries(openingHours ?? {})
    .filter(([, hours]) => hours?.closed === false && hours.openingTime && hours.closingTime)
    .map(([day, hours]) => `${DAY_LABELS[day]} ${hours?.openingTime}-${hours?.closingTime}`);

  const facebookUrl = contact?.facebookUrl?.trim();
  const data = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "@id": `${SITE_URL}#hospudka`,
    name: "Hospůdka pod Boušovem",
    url: SITE_URL,
    description: "Poctivé pivo, příjemné posezení a domácí atmosféra ve Všekarech u Holýšova.",
    image: `${SITE_URL}og-image.jpg`,
    logo: new URL(logo, SITE_URL).href,
    address: {
      "@type": "PostalAddress",
      streetAddress: "č.p. 1",
      addressLocality: "Všekary",
      postalCode: "345 62",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.604691,
      longitude: 13.0426129,
    },
    hasMenu: `${SITE_URL}#menu`,
    telephone: contact?.phoneNumber?.replace(/\s/g, "") || undefined,
    email: contact?.email?.trim() || undefined,
    sameAs: facebookUrl ? [facebookUrl] : undefined,
    openingHours: formattedOpeningHours.length ? formattedOpeningHours : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default StructuredData;
