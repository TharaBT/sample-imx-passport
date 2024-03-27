import "react";
import "./App.css";
import { config, passport } from "@imtbl/sdk";

function onButtonClicked() {
  const baseConfig: config.ImmutableConfiguration = {
    environment: config.Environment.SANDBOX,
  };
  const passportInstance = new passport.Passport({
    baseConfig: baseConfig,
    clientId: "<Replace here>",
    redirectUri: "http://localhost:5173/passport_redirect",
    logoutRedirectUri: "http://localhost:5173/passport_logout",
    scope: "openid offline_access email transact",
    audience: "platform_api",
  });
  passportInstance.loginCallback();
}

function App() {
  return (
    <div>
      <button onClick={() => onButtonClicked()}>Login</button>
    </div>
  );
}

export default App;
