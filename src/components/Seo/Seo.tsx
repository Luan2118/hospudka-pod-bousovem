import { useEffect } from "react";
import { useLocation } from "react-router";

type SeoProps = {
  title: string;
  description: string;
};

function Seo({ title, description }: SeoProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    let metaDescription = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }

    const canonicalPath = pathname.replace(/\/+$/, "") || "/";
    canonicalLink.href = `https://hospudkapodbousovem.cz${canonicalPath}`;
  }, [title, description, pathname]);

  return null;
}

export default Seo;
