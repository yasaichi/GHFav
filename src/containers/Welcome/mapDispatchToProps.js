// @flow
import type { Dispatch } from 'redux';

import { getCredentialsWithCode } from '../../actions';

export default function (dispatch: Dispatch<*>) {
  return {
    onAuthorizationRequestApproved: (code: string) => {
      dispatch(getCredentialsWithCode(code));
    },
  };
}
