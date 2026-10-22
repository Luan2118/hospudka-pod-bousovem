import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
};

function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, [title, description]);

  return null;
}

export default Seo;
