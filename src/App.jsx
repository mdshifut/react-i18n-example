import React from "react";
import { IntlProvider } from "react-intl";
import PasswordChangeWithIntl from "./component/PasswordChangeWithIntl";
import "./App.css";
const messages = {};

function App() {
  return (
    <IntlProvider messages={messages} locale="fr" defaultLocale="en">
      <PasswordChangeWithIntl />
    </IntlProvider>
  );
}

export default App;
