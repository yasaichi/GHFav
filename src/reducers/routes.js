// @flow
import { ActionConst } from 'react-native-router-flux';

type Action = {
  type: string,
  scene: Object
}

type State = {
  scene: Object
}

const initialState = {
  scene: {},
};

export default function routes(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return { ...state, scene: action.scene };
    default:
      return state;
  }
}
