import * as React from "react";
import { Link } from "gatsby";

const LearnMore = ({to}: {to: string}) => {
  return (
    <p>
      <Link to={to}>Learn more</Link>
    </p>
  );
};

export default LearnMore;
