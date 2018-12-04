import * as React from "react";
import {withLayout} from "../../components/Layout";

const JourneyPage = () => {
  return (
    <div>
      <ul>
        <li>View individual beneficiary, radar or line chart</li>
        <li>Adjust service to optimise for the individual</li>
        <li>Manage records</li>
      </ul>
    </div>
  );
};

export default withLayout(JourneyPage);
