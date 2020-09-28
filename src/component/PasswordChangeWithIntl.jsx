import * as React from "react";
import { injectIntl } from "react-intl";

class PasswordChangeWithIntl extends React.Component {
  render() {
    const { intl } = this.props;
    return (
      <li>
        <input
          placeholder={intl.formatMessage({
            defaultMessage: "New Password",
            description: "placeholder text",
          })}
        />
        <input
          placeholder={intl.formatMessage({
            id: "explicit-id",
            defaultMessage: "Confirm Password",
            description: "placeholder text",
          })}
        />
      </li>
    );
  }
}

export default injectIntl(PasswordChangeWithIntl);
