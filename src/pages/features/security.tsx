import * as React from "react";
import {withLayout} from "../../components/Layout";

const SecurityPage = () => {
  return (
    <div>
      TODO - Security (https://www.dropbox.com/security)
      <ul>
        <li>Protect your data (versioning, backups, encryption, little PII)</li>
        <li>Protect your privacy (policy)</li>
        <li>Protect your account (anomaly detection)</li>
      </ul>
    </div>
  );
};

export default withLayout(SecurityPage);
