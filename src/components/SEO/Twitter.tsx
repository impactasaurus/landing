import React from "react";
import Helmet from "react-helmet";

interface IProps {
  type: string;
  username: string;
  title: string;
  desc: string;
  image: string;
}

const Twitter = ({ type = "summary_large_image", username, title, desc, image }: IProps) => (
  <Helmet>
    <meta name="twitter:card" content={type} />
    {username && <meta name="twitter:creator" content={username} />}
    {title && <meta name="twitter:title" content={title} />}
    {desc && <meta name="twitter:description" content={desc} />}
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
);

export default Twitter;
