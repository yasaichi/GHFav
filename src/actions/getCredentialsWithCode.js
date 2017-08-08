// @flow
import config from '../config';

import {
  GET_CREDENTIALS_WITH_CODE_REQUEST,
  GET_CREDENTIALS_WITH_CODE_SUCCESS,
  GET_CREDENTIALS_WITH_CODE_FAILURE,
} from '../constants/ActionTypes';

async function exchangeCodeForAccessToken(code: string) {
  const response = await fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        client_id: config.GITHUB_CLIENT_ID,
        client_secret: config.GITHUB_CLIENT_SECRET,
      }),
    },
  );

  return response.json();
}

async function getAuthenticatedUser(accessToken: string) {
  const response = await fetch(
    'https://api.github.com/user',
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${accessToken}`,
      },
    },
  );

  return response.json();
}

export default function getCredentialsWithCode(code: string) {
  return async (dispatch) => {
    dispatch({ type: GET_CREDENTIALS_WITH_CODE_REQUEST });

    try {
      const { access_token: accessToken } = await exchangeCodeForAccessToken(code);
      const { login: username } = await getAuthenticatedUser(accessToken);

      dispatch({
        type: GET_CREDENTIALS_WITH_CODE_SUCCESS,
        payload: { accessToken, username },
      });
    } catch (err) {
      dispatch({
        type: GET_CREDENTIALS_WITH_CODE_FAILURE,
        payload: err,
        error: true,
      });
    }
  };
}

