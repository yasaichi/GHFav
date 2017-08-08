// @flow
import SafariView from 'react-native-safari-view';
import URI from 'urijs';

export function showURLWithBrowserView(url: string, params: any = {}) {
  const normalizedURL = new URI(url).addQuery(params).normalize().toString();

  SafariView
    .isAvailable()
    .then(SafariView.show({ url: normalizedURL }))
    .catch((_) => {
        // TODO: Implement fallback code for Android and iOS 8 or former
    });
}
