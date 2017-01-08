// @flow
import React from 'react';
import { WebView } from 'react-native';

type Props = {
  url: String
};

export default function RepositoryDetail(props: Props) {
  return (
    <WebView
      source={{ uri: props.url }}
    />
  );
}
