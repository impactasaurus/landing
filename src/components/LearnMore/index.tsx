import * as React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

const LearnMore = ({to}: {to: string}) => {
  const {t} = useTranslation();
  return (
    <p>
      <Link to={to}>{t("index.learnmore")}</Link>
    </p>
  );
};

export default LearnMore;
