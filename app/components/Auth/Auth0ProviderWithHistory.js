import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@hosamshahin/auth0-react';
import exports from '../../aws/exports';

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={exports.domain}
      redirectUri={window.location.origin}
      clientId={exports.clientId}
      issuer={exports.issuer}
      scope={exports.scope}
      onRedirectCallback={onRedirectCallback}
      backChannelUrl={exports.backChannelUrl}
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
