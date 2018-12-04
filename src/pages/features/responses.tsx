import * as React from "react";
import {withLayout} from "../../components/Layout";

const RecordsPage = () => {
  return (
    <div>
      <ul>
        <li>Conduct in person</li>
        <li>Send link</li>
        <li>Enter later (paper / historic)</li>
        <li>Securely stored in the cloud against the beneficiary</li>
      </ul>
      <ul>
        <li>complete the questionnaire together with your beneficiary</li>
        <li>send them a link to complete it on their own</li>
        <li>enter answers captured on paper or historically.</li>
      </ul>
    </div>
  );
};

export default withLayout(RecordsPage);
