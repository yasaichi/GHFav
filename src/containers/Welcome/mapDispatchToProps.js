// @flow
import type { Dispatch } from 'redux';

export default function (dispatch: Dispatch<*>) {
  return {
    onAuthorizationRequestApproved: (code: string) => {
      console.log(code);
    },
  };
}
