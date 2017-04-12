// @flow
import React from 'react';
import { WebView } from 'react-native';

type Props = {
  match: {
    params: {
      owner: string,
      repo: string,
    }
  }
};

export default function RepositoryDetail(props: Props) {
  const { owner, repo } = props.match.params;

  return (
    <WebView
      source={{ uri: `https://github.com/${owner}/${repo}` }}
    />
  );
}
