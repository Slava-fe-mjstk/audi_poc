import React, { FC, useEffect, useState } from "react";
import { useApi } from "hooks/useApi";
import { MainPageAPI } from "../../../api";
import { iLinkField } from "../../../types/fields";
import Link from "next/link";

interface iHBData {
  background: string;
  links: Array<{ link: iLinkField; type: string; }>;
  heading: string;
  paragraph: string;
}

export const HeroBanner: FC = () => {
  const [data, setData] = useState<iHBData>();
  const { apiCall } = useApi();

  useEffect(() => {
    apiCall(MainPageAPI.getHeroBanner())
      .then(({ data: { entry: {
        background_image: { url }, links, heading, paragraph,
      }}}) => setData({ background: url, links, heading, paragraph }))
      .catch((e) => {
        console.log( "%c Error getting herobanner data", "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red" );
      });
  }, []);

  return (
    <section
      className="HeroBanner"
      style={{ backgroundImage: `url('${data?.background}')` }}
    >
      <h1 className="HeroBanner-heading">{data?.heading}</h1>
      <div className="HeroBanner-paragraph">{data?.paragraph}</div>
      <div className="HeroBanner-links">
        {
          Array.isArray(data?.links) && data?.links.map(({link, type}) => (
            <Link key={link.href} href={link.href} className={`HeroBanner-links-item ${type || ""}`}>
              {link.title}
            </Link>
          ))
        }
      </div>
    </section>
  );
};
