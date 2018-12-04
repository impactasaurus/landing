import * as React from "react";
import {withLayout} from "../../components/Layout";

const ReportingPage = () => {
  return (
    <div>
      <ul>
        <li>Radar graph across beneficiaries</li>
        <li>Segment by tag</li>
        <li>Export data</li>
      </ul>
    </div>
  );
};

export default withLayout(ReportingPage);
