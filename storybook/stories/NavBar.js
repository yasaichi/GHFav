// @flow
import React from 'react';
import { storiesOf, action } from '@kadira/react-native-storybook';
import update from 'immutability-helper';

import NavBar from '../../src/components/NavBar';

const baseChild = {
  key: 'key',
  title: 'Title',
  component: {},
};

const baseProps = {
  component: {},
  navigationState: {
    index: 0,
    children: [baseChild],
  },
  position: {
    interpolate() {},
  },
};

storiesOf('NavBar')
  .add('with title', () =>
    <NavBar {...baseProps} />,
  )
  .add('with title and back button', () => {
    const child = update(baseChild, {
      onBack: { $set: action('pressed') },
    });

    const props = update(baseProps, {
      navigationState: {
        parentIndex: { $set: 1 }, // Set any values except 0
        children: { $set: [child] },
      },
    });

    return <NavBar {...props} />;
  });
