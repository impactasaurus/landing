import React from "react";
import Helmet from "react-helmet";

interface IProps {
  url: string;
  type: string;
  title: string;
  desc: string;
  image: string;
}

const Facebook = ({ url, type, title, desc, image }: IProps) => (
  <Helmet>
    {url && <meta property="og:url" content={url} />}
    {type && <meta property="og:type" content={type} />}
    {title && <meta property="og:title" content={title} />}
    {desc && <meta property="og:description" content={desc} />}
    {image && <meta property="og:image" content={image} />}
  </Helmet>
);

export default Facebook;
