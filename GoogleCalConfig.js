import { authorize } from 'react-native-app-auth';
import {CLIENT_ID, REDIRECT_URL, CALENDAR_AUTH,AUTH_ENDPOINT, TOKEN_ENDPOINT } from '@env'  
export const GoogleCalConfig = {
  clientId: CLIENT_ID,
  redirectUrl: REDIRECT_URL,
  scopes: [CALENDAR_AUTH],
  serviceConfiguration: {
    authorizationEndpoint: AUTH_ENDPOINT,
    tokenEndpoint: TOKEN_ENDPOINT,
  },
};

// const result = authorize(config);